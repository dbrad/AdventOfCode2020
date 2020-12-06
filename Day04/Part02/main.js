import { input } from "./input.js";
import { log } from "../../app.js";

const ECL_VALUES = new Set(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]);
const FIELDS = new Map([
  ["byr", value => { return +value >= 1920 && +value <= 2002; }],
  ["iyr", value => { return +value >= 2010 && +value <= 2020; }],
  ["eyr", value => { return +value >= 2020 && +value <= 2030 }],
  ["hgt", value =>
  {
    const numerals = value.replace("cm", "").replace("in", "");
    return (value.includes("cm") && numerals >= 150 && numerals <= 193)
      || (value.includes("in") && numerals >= 59 && numerals <= 76)
  }],
  ["hcl", value => { return /^#[0-9a-f]{6}$/i.test(value); }],
  ["ecl", value => { return ECL_VALUES.has(value); }],
  ["pid", value => { return /^[0-9]{9}$/.test(value); }],
  ["cid", value => { return true; }]
]);

const FIELD_NAMES = [...FIELDS.keys()];

const FIELDS_LENGTH = FIELDS.size - 1;
const REQUIRED_FIELDS_LENGTH = FIELDS.size - 2;

/**
 * 
 * @param {string} input 
 */
export function validPassportCount(input)
{
  input = input.replace(/\n/g, " ");

  const passportStrings = input.split("  ");

  const passports = passportStrings.map(passportStr =>
  {
    const kvFields = passportStr
      .split(" ")
      .map(f => f.split(":"));
    return new Map(kvFields);
  });

  let valid = 0;
  for (const passport of passports)
  {
    let result = true;
    for (let f = 0; f <= REQUIRED_FIELDS_LENGTH; f++)
    {
      result = result
        && passport.has(FIELD_NAMES[f])
        && FIELDS.get(FIELD_NAMES[f])(passport.get(FIELD_NAMES[f]));
      if (!result)
      {
        // log(`FAILED ${ FIELD_NAMES[f] }:${ passport.get(FIELD_NAMES[f]) }`);
        break;
      }
    }
    valid += result ? 1 : 0;
  }

  return valid;
}

export function main()
{
  log(`Input Result: ${ validPassportCount(input) }`);
}