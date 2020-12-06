import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {string[]} mapArray 
 */
function parseMap(mapArray)
{
  const mapWidth = mapArray[0].length;
  const mapHeight = mapArray.length;
  const result = [];
  for (const line of mapArray)
  {
    result.push(...line.split(""));
  }
  return [result, mapWidth, mapHeight];
}

/**
 * 
 * @param {string[]} input 
 */
export function calculateCollisions(input)
{
  let result = 0;
  const [map, width, height] = parseMap(input);
  let x = 0;
  let y = 0
  let index = (x % width) + y * width;
  while (y < height)
  {
    x += 3;
    y += 1;
    index = (x % width) + y * width;
    if (map[index] === "#")
    {
      result++;
    }
  }
  return result;
}

export function main()
{
  log(`Input Result: ${ calculateCollisions(input) }`);
}