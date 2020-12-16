import { assertEquals, test } from "../../lib/testing.js";

import { memoryGame } from "./main.js";

export function main()
{
  test("Result should be 436", () =>
  {
    const input = [0, 3, 6];
    return assertEquals(memoryGame(input), 436);
  });
}