import { assertEquals, test } from "../../lib/testing.js";

import { simulateSeating } from "./main.js";

export function main()
{
  test("Total seated people should be 37", () =>
  {
    const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
    return assertEquals(simulateSeating(input), 37);
  });
}