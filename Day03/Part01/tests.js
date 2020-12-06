import { assertEquals, test } from "../../lib/testing.js";

import { calculateCollisions } from "./main.js";

export function main()
{
  test("sled should collide with 7 trees", () =>
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
    return assertEquals(calculateCollisions(input), 7);
  });
}