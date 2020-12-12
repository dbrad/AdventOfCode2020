import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {string} input 
 */
export function simulateSeating(input)
{
  const width = input.split("\n")[0].length;
  const height = input.split("\n").length;

  const getIndex = (x, y) =>
  {
    return x + y * width;
  };

  const coordCache = new Map();
  const getCoord = (index) =>
  {
    if (coordCache.has(index)) return coordCache.get(index);
    return [index % width, Math.floor(index / width)];
  };

  let state = input.replace(/\n/g, "").split("");

  const countNeighbours = (index) =>
  {
    const [x, y] = getCoord(index);
    let result = 0;
    for (let dx = -1; dx <= 1; dx++)
    {
      const nx = x + dx;
      if (nx < 0 || nx >= width) continue;
      for (let dy = -1; dy <= 1; dy++)
      {
        const ny = y + dy;
        if (ny < 0 || ny >= height) continue;
        if (dx === 0 && dy === 0) continue;
        if (state[getIndex(nx, ny)] === "#") result++;
      }
    }
    return result;
  };

  let numberOfGenerations = 0;
  let seatedPeople = 0;
  let changes = false;
  do
  {
    changes = false;
    seatedPeople = 0;
    let index = 0;
    const newState = [];
    for (const cell of state)
    {
      if (cell === "L" && countNeighbours(index) === 0) { newState.push("#"); changes = true; }
      else if (cell === "#" && countNeighbours(index) >= 4) { newState.push("L"); changes = true; }
      else newState.push(cell);

      if (newState[index] === "#") seatedPeople++;

      index++;
    }

    state = newState;
    numberOfGenerations++;
  } while (changes)

  log(`Balance reached in ${ numberOfGenerations } generations of seating.`);

  return seatedPeople;
}

export function main()
{
  log(`Input Result: ${ simulateSeating(input) }`);
}