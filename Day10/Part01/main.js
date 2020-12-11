import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {number[]} input 
 */
export function joltageDiff(input)
{
  const sortedInput = [...input.sort((a, b) => a - b)];
  sortedInput.push(sortedInput[sortedInput.length - 1] + 3);

  let diffOfOne = 0;
  let diffOfThree = 0;

  let currentJoltage = 0;
  for (const adapter of sortedInput)
  {
    switch (adapter - currentJoltage)
    {
      case 1:
        diffOfOne++;
        break;
      case 3:
        diffOfThree++;
        break;
      default:
        break;
    }
    currentJoltage = adapter;
  }
  return diffOfOne * diffOfThree;
}

export function main()
{
  log(`Input Result: ${ joltageDiff(input) }`);
}