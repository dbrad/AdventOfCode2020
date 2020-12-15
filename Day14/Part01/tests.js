import { assertEquals, test } from "../../lib/testing.js";

import { calculateTotalValue } from "./main.js";

export function main()
{
  test("Result should be 165", () =>
  {
    const input = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;
    return assertEquals(calculateTotalValue(input), 165n);
  });
}