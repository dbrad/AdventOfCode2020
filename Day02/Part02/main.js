import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * @typedef {Object} RuleSet
 * @property {number} posOne
 * @property {number} posOne
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
  return (password[rules.posOne - 1] === rules.letter && password[rules.posTwo - 1] != rules.letter)
    || (password[rules.posOne - 1] != rules.letter && password[rules.posTwo - 1] === rules.letter)
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
  const [posOne, posTwo] = limits.split("-");
  return {
    rules: {
      posOne: +posOne,
      posTwo: +posTwo,
      letter
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