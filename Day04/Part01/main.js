import { input } from "./input.js";
import { log } from "../../app.js";

const FIELDS = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid",
  "cid",
];

const FIELDS_LENGTH = FIELDS.length - 1;
const REQUIRED_FIELDS_LENGTH = FIELDS.length - 2;

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
      result = result && passport.has(FIELDS[f]);
      if (!result) break;
    }
    valid += result ? 1 : 0;
  }

  return valid;
}

export function main()
{
  log(`Input Result: ${ validPassportCount(input) }`);
}