import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {number[]} input 
 */

function factorial(num)
{
  if (num === 0) return 1;
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 6;
  if (num === 4) return 24;
  if (num === 5) return 120;
  if (num === 6) return 720;
  if (num === 7) return 5040;
  return num * factorial(num - 1);
}

function factorialDiv(n, k)
{
  let result = n;
  for (let i = 0; i < k - 1; i++)
  {
    result *= n - 1;
  }
  return result;
}



export function totalCombos(input)
{
  /*
  const finalValue = Math.max(...input);
  const adapterSet = new Set(input);

  let currentJoltage = 0;
  let optionalCount = 0;
  while (currentJoltage !== finalValue)
  {
    if (adapterSet.has(currentJoltage + 3))
    {
      if (adapterSet.has(currentJoltage + 1)) optionalCount++;
      if (adapterSet.has(currentJoltage + 2)) optionalCount++;
      currentJoltage += 3;
    }
    else if (adapterSet.has(currentJoltage + 2))
    {
      if (adapterSet.has(currentJoltage + 1)) optionalCount++;
      currentJoltage += 2;
    }
    else if (adapterSet.has(currentJoltage + 1))
    {
      currentJoltage += 1;
    }
  }

  let totalCombinations = 2;
  for (let k = 1; k < optionalCount; k++)
  {
    totalCombinations += factorialDiv(optionalCount, k) / factorial(k);
  }
*/
  const sortedInput = [...input.sort((a, b) => a - b)];
  sortedInput.push(sortedInput[sortedInput.length - 1] + 3);
  const adapterSet = new Set(input);
  const nodes = new Map();

  for (const adapter of sortedInput)
  {

  }
  let totalCombinations = 1;
  return totalCombinations;
}

export function main()
{
  log(`Input Result: ${ totalCombos(input) }`);
}