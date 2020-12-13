import { assertEquals, test } from "../../lib/testing.js";

import { findShuttle } from "./main.js";

export function main()
{
  test("Result should be 295", () =>
  {
    const input = `939
7,13,x,x,59,x,31,19`;
    return assertEquals(findShuttle(input), 295);
  });
}