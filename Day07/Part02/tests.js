import { assertEquals, test } from "../../lib/testing.js";

import { countGoldBagHolders } from "./main.js";

export function main()
{
  test("bags that could contain a shiny gold bag should be 4", () =>
  {
    const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;
    return assertEquals(countGoldBagHolders(input), 32);
  });
}