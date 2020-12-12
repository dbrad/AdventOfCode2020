import { assertEquals, test } from "../../lib/testing.js";

import { simulateShip } from "./main.js";

export function main()
{
  test("Ships manhattan distance should be 25", () =>
  {
    const input = `F10
N3
F7
R90
F11`;
    return assertEquals(simulateShip(input), 25);
  });
}