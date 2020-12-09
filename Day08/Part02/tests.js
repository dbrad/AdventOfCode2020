import { assertEquals, test } from "../../lib/testing.js";

import { repairProgram } from "./main.js";

export function main()
{
  test("acc value should be 8", () =>
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
    return assertEquals(repairProgram(input), 8);
  });
}