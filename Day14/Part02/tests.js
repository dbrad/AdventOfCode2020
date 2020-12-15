import { assertEquals, test } from "../../lib/testing.js";

import { calculateTotalValue } from "./main.js";

export function main()
{
  test( "Result should be 208", () =>
  {
    const input = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;
    return assertEquals( calculateTotalValue( input ), 208n );
  } );
}