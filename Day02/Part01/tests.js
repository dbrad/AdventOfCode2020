import { assertEquals, test } from "../../lib/testing.js";

import { validPasswordCount } from "./main.js";

export function main()
{
  test("valid password count should be 2", () =>
  {
    const input = [
      "1-3 a: abcde",
      "1-3 b: cdefg",
      "2-9 c: ccccccccc"
    ]
    return assertEquals(validPasswordCount(input), 2);
  });
}