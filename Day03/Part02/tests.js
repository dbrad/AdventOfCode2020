import { assertEquals, test } from "../../lib/testing.js";

import { checkSlopes } from "./main.js";

export function main()
{
  test("tree checksum should be 336", () =>
  {
    const input = [
      "..##.......",
      "#...#...#..",
      ".#....#..#.",
      "..#.#...#.#",
      ".#...##..#.",
      "..#.##.....",
      ".#.#.#....#",
      ".#........#",
      "#.##...#...",
      "#...##....#",
      ".#..#...#.#",
    ]
    return assertEquals(checkSlopes(input), 336);
  });
}