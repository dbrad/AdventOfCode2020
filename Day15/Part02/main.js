import { input } from "./input.js";
import { log } from "../../app.js";

export function memoryGame(input)
{
  const lastKnown = new Map();
  let previousNumber = -1;
  let previousIndex = -1;
  let previousTurn = -1;

  for (let turn = 0; turn < 30000000; turn++)
  {
    previousTurn = turn - 1;
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
      previousIndex = lastKnown.get(previousNumber);
      lastKnown.set(previousNumber, previousTurn);
      previousNumber = previousTurn - previousIndex;
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