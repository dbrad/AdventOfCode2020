import { assertEquals } from "../../lib/testing.js";
import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {string} input 
 */
export function countGoldBagHolders(input)
{
  /** @type {Set<string>} */
  const uniqueBags = new Set();

  /** @type {Map<string, [string, number][]>} */
  const bagContents = new Map();

  const lines = input.replace(/ bags?/gi, "").replace(/[.]/g, "").split("\n");

  for (const line of lines)
  {
    const [sourceRaw, outputRaw] = line.split(" contain ");
    const source = sourceRaw.trim();
    uniqueBags.add(source);

    const outputs = outputRaw.split(", ");
    for (const output of outputs)
    {
      if (output === "no other")
      {
        bagContents.set(source, []);
        continue;
      }
      const count = output.substr(0, 1);
      const bag = output.substr(2).trim();
      if (!bagContents.has(source))
      {
        bagContents.set(source, []);
      }
      const array = bagContents.get(source);
      bagContents.set(source, [...array, [bag, count]]);
    }
  }

  let result = 0;
  let list = ["shiny gold"]; // start the list with the current bad
  while (list.length > 0)
  {
    const currentBag = list.shift(); // grab the oldest unopened bag
    if (bagContents.has(currentBag)
      && bagContents.get(currentBag).length > 0) 
    {
      const outputs = bagContents.get(currentBag);
      for (const [bagType, count] of outputs)
      {
        for (let i = 0; i < count; i++)
        {
          list.push(bagType);
          result++;
        }
      }
    }
  }
  return result;
}

export function main()
{
  log(`Input Result: ${ countGoldBagHolders(input) }`);
}