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
function calculateCollisions(map, width, height, rise, run)
{
  let result = 0;
  let x = 0;
  let y = 0
  let index = (x % width) + y * width;
  while (y < height)
  {
    x += run;
    y += rise;
    index = (x % width) + y * width;
    if (map[index] === "#")
    {
      result++;
    }
  }
  return result;
}

export function checkSlopes(input)
{
  const [map, width, height] = parseMap(input);
  let result = calculateCollisions(map, width, height, 1, 1);
  result *= calculateCollisions(map, width, height, 1, 3);
  result *= calculateCollisions(map, width, height, 1, 5);
  result *= calculateCollisions(map, width, height, 1, 7);
  result *= calculateCollisions(map, width, height, 2, 1);
  return result;
}

export function main()
{
  log(`Input Result: ${ checkSlopes(input) }`);
}