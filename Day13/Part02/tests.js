import { assertEquals, test } from "../../lib/testing.js";

import { findShuttle } from "./main.js";

export function main()
{
  test("Result should be 1068781", () =>
  {
    const input = `939
7,13,x,x,59,x,31,19`;
    return assertEquals(findShuttle(input), 1068781n);
  });

  test("Result should be 3417", () =>
  {
    const input = `haha
17,x,13,19`;
    return assertEquals(findShuttle(input), 3417n);
  });
  test("Result should be 754018", () =>
  {
    const input = `wow
67,7,59,61`;
    return assertEquals(findShuttle(input), 754018n);
  });
  test("Result should be 779210", () =>
  {
    const input = `get gud
67,x,7,59,61`;
    return assertEquals(findShuttle(input), 779210n);
  });
  test("Result should be 1261476", () =>
  {
    const input = `939
67,7,x,59,61`;
    return assertEquals(findShuttle(input), 1261476n);
  });
  test("Result should be 1202161486", () =>
  {
    const input = `939
1789,37,47,1889`;
    return assertEquals(findShuttle(input), 1202161486n);
  });
}