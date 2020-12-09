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

  let count = 0;
  for (const bag of uniqueBags)
  {
    let list = [bag]; // start the list with the current bad
    while (list.length > 0)
    {
      const currentBag = list.shift(); // grab the oldest unopened bag
      if (bagContents.has(currentBag)
        && bagContents.get(currentBag).length > 0) 
      {
        // get the names of the bags inside this bag
        const outputs = bagContents.get(currentBag).map(pair => pair[0]);
        if (outputs.includes("shiny gold"))
        {
          // if we find a shiny gold bag, increment andmove on
          count++;
          break;
        }
        // if we haven't found our goal, add the new bags to check to the list
        list.push(...outputs);
      }
    }
  }
  return count;
}

export function main()
{
  log(`Input Result: ${ countGoldBagHolders(input) }`);
}