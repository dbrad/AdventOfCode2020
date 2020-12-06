import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * @typedef {Object} RuleSet
 * @property {number} min
 * @property {number} max
 * @property {string} letter
 */

/**
 * 
 * @param {RuleSet} rules 
 * @param {string} password 
 * @returns {boolean}
 */
function isPasswordValid(rules, password)
{
  let count = 0;
  for (const letter of password)
  {
    count += letter === rules.letter ? 1 : 0;
    if (count > rules.max)
    {
      return false;
    }
  }
  return count >= rules.min && count <= rules.max;
}

/**
 * 
 * @param {string} line 
 * @returns {{Ruleset, string}}
 */
function parseLine(line)
{
  const [rules, password] = line.split(": ");
  const [limits, letter] = rules.split(" ");
  const [min, max] = limits.split("-");
  return {
    rules: {
      min, max, letter
    },
    password
  };
}

/**
 * 
 * @param {string[]} list 
 */
export function validPasswordCount(list)
{
  let result = 0;
  for (const line of list)
  {
    const { rules, password } = parseLine(line);
    if (isPasswordValid(rules, password))
    {
      result++;
    }
  }
  return result;
}

export function main()
{
  log(`Input Result: ${ validPasswordCount(input) }`);
}