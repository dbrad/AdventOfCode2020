import { assertEquals, test } from "../../lib/testing.js";

import { joltageDiff } from "./main.js";

export function main()
{
  test("joltageDiff shoudl be 35", () =>
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
    return assertEquals(joltageDiff(input), 7 * 5);
  });
  test("joltageDiff shoudl be 220", () =>
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
    return assertEquals(joltageDiff(input), 22 * 10);
  });
}