import { assertEquals, test } from "../../lib/testing.js";

import { totalCombos } from "./main.js";

export function main()
{
  test("totalCombos should be 8", () =>
  {
    const input = [
      16,
      10,
      15,
      5,
      1,
      11,
      7,
      19,
      6,
      12,
      4,
    ];
    return assertEquals(totalCombos(input), 8);
  });
  test("totalCombos should be 19208", () =>
  {
    const input = [
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
    ];
    return assertEquals(totalCombos(input), 19208);
  });
}