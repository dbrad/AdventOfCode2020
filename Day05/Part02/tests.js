import { assertEquals, test } from "../../lib/testing.js";

import { getSeatId } from "./main.js";

export function main()
{
  test("boarding pass BFFFBBFRRR should be seatId 567", () =>
  {
    const input = "BFFFBBFRRR";
    return assertEquals(getSeatId(input), 567);
  });

  test("boarding pass FFFBBBFRRR should be seatId 119", () =>
  {
    const input = "FFFBBBFRRR";
    return assertEquals(getSeatId(input), 119);
  });

  test("boarding pass BBFFBBFRLL should be seatId 820", () =>
  {
    const input = "BBFFBBFRLL";
    return assertEquals(getSeatId(input), 820);
  });
}