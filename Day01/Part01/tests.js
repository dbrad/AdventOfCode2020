import { assertEquals, test } from "../../lib/testing.js";

import { expenses } from "./main.js";

export function main()
{
  test("expenses result should be 514579", () =>
  {
    const input = [1721, 979, 366, 299, 675, 1456];
    return assertEquals(expenses(input), 514579);
  });
}