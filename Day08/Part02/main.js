import { input } from "./input.js";
import { log } from "../../app.js";

export function runProgram(memory)
{
  const actionHistory = new Set();
  let acc = 0;
  let ptr = 0;

  while (ptr < memory.length)
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

  return [ptr === memory.length, acc]
}

export function repairProgram(input)
{
  const programLength = input.split("\n").length;
  let fixPtr = 0;

  while (fixPtr < programLength)
  {
    const memory = input.split("\n");
    let opChanged = false;
    while (!opChanged)
    {
      const line = memory[fixPtr].split(` `);
      const operation = line[0];
      const argument = line[1];

      switch (operation)
      {
        case `jmp`:
          memory[fixPtr] = `nop ${ argument }`;
          opChanged = true;
          break;

        case `nop`:
          memory[fixPtr] = `jmp ${ argument }`;
          opChanged = true;
          break;

        default:
          break;
      }

      fixPtr++;
    }

    const [success, acc] = runProgram(memory);
    if (success)
    {
      return acc;
    }
  }
}

export function main()
{
  log(`Input Result: ${ repairProgram(input) }`);
}