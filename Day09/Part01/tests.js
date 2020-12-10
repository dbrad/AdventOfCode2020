import { assertEquals, test } from "../../lib/testing.js";

import { findException } from "./main.js";

export function main()
{
  test("exceptional value should be 127", () =>
  {
    const input = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ];
    return assertEquals(findException(input, 5), 127);
  });
}