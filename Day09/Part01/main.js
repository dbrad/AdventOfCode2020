import { input } from "./input.js";
import { log } from "../../app.js";

export function findException(input, preambleLength)
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

export function main()
{
  log(`Input Result: ${ findException(input, 25) }`);
}