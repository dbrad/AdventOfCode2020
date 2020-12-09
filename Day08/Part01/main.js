import { input } from "./input.js";
import { log } from "../../app.js";

export function runProgram(input)
{
  const actionHistory = new Set();
  const memory = input.split("\n");
  let acc = 0;
  let ptr = 0;

  while (true)
  {
    const line = memory[ptr].split(` `);
    const operation = line[0];
    const argument = parseInt(line[1]);

    if (actionHistory.has(ptr))
    {
      break;
    }
    actionHistory.add(ptr);

    switch (operation)
    {
      case `acc`:
        acc += argument;
        ptr++;
        break;
      case `jmp`:
        ptr += argument;
        break;
      case `nop`:
      default:
        ptr++;
        break;
    }
  }

  return acc
}

export function main()
{
  log(`Input Result: ${ runProgram(input) }`);
}