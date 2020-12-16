import { input } from "./input.js";
import { log } from "../../app.js";

export function memoryGame(input)
{
  const lastKnown = new Map();
  let previousNumber = -1;
  for (let turn = 0; turn < 2020; turn++)
  {
    const previousTurn = turn - 1;
    if (input[turn] !== undefined) 
    {
      if (previousNumber !== -1)
      {
        lastKnown.set(previousNumber, previousTurn);
      }
      previousNumber = input[turn];
    }
    else if (lastKnown.has(previousNumber))
    {
      const previousIndex = lastKnown.get(previousNumber);
      lastKnown.set(previousNumber, previousTurn);
      const newNumber = previousTurn - previousIndex;
      previousNumber = newNumber;
    }
    else
    {
      lastKnown.set(previousNumber, previousTurn);
      previousNumber = 0;
    }
  }
  return previousNumber;
}

export function main()
{
  log(`Input Result: ${ memoryGame(input) }`);
}