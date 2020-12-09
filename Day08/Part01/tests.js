import { assertEquals, test } from "../../lib/testing.js";

import { runProgram } from "./main.js";

export function main()
{
  test("acc value should be 5", () =>
  {
    const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
    return assertEquals(runProgram(input), 5);
  });
}