import { input } from "./input.js";
import { log } from "../../app.js";

const EAST = 0;
const SOUTH = 1;
const WEST = 2;
const NORTH = 3;

const DIRECTIONS = ["E", "S", "W", "N"];

/**
 * 
 * @param {string} input 
 */
export function simulateShip(input)
{
  const array = input.split("\n");
  const data = array.map(v => [v[0], parseInt(v.substr(1))]);

  let heading = EAST;
  const pos = [0, 0];

  const turn = (direction, amount) =>
  {
    amount = amount / 90;
    if (direction === "L")
    {
      heading += 4 - amount;
    }
    else
    {
      heading += amount;
    }
    heading = heading % 4;
  };

  const move = (direction, amount) =>
  {
    switch (direction)
    {
      case "N":
        pos[1] += amount;
        break;
      case "E":
        pos[0] += amount;
        break;
      case "S":
        pos[1] -= amount;
        break;
      case "W":
        pos[0] -= amount;
        break;
    }
  }

  for (const [op, param] of data)
  {
    switch (op)
    {
      case "N":
      case "E":
      case "S":
      case "W":
        move(op, param);
        break;
      case "L":
      case "R":
        turn(op, param)
        break;
      case "F":
        move(DIRECTIONS[heading], param);
        break;
    }
  }
  return (Math.abs(pos[0]) + Math.abs(pos[1]));
}

export function main()
{
  log(`Input Result: ${ simulateShip(input) }`);
}