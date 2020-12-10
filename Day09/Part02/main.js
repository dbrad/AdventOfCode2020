import { input } from "./input.js";
import { log } from "../../app.js";

function findException(input, preambleLength)
{
  for (let i = preambleLength; i < input.length; i++)
  {
    let target = input[i];
    let foundPair = false;
    for (let a = i - preambleLength; a < i; a++)
    {
      for (let b = a + 1; b < i; b++)
      {
        if (input[a] + input[b] === target)
        {
          foundPair = true;
          break;
        }
      }
      if (foundPair) break;
    }
    if (foundPair) continue;
    return target;
  }
}

/**
 * 
 * @param {number[]} input 
 * @param {number} preambleLength 
 */
export function findWeakness(input, preambleLength)
{
  const exceptionialValue = findException(input, preambleLength);

  for (let start = 0; start < input.length; start++)
  {
    let sum = input[start];
    for (let i = start + 1; i < input.length; i++)
    {
      sum += input[i];
      if (sum === exceptionialValue)
      {
        const range = input.slice(start, i + 1);
        const min = Math.min(...range);
        const max = Math.max(...range);
        return min + max;
      }
      else if (sum > exceptionialValue)
      {
        break;
      }
    }
  }
  return -1;
}

export function main()
{
  log(`Input Result: ${ findWeakness(input, 25) }`);
}