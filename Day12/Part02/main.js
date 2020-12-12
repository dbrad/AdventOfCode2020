import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * @param {string} input 
 */
export function simulateShip(input)
{
  const array = input.split("\n");
  const data = array.map(v => [v[0], parseInt(v.substr(1))]);

  const waypoint = [10, 1];
  const ship = [0, 0];

  const rotateWaypoint = (direction, amount) =>
  {
    const point = [...waypoint];
    if (amount === 180)
    {
      // 180 degree turn
      waypoint[0] = -point[0];
      waypoint[1] = -point[1];
    }
    else if ((amount === 90 && direction === "R")
      || (amount === 270 && direction === "L"))
    {
      // 90 degree clockwise
      waypoint[0] = point[1];
      waypoint[1] = -point[0];
    }
    else if ((amount === 90 && direction === "L")
      || (amount === 270 && direction === "R"))
    {
      // 90 degree counterclockwise
      waypoint[0] = -point[1];
      waypoint[1] = point[0];
    }
  };

  const moveWaypoint = (direction, amount) =>
  {
    switch (direction)
    {
      case "N":
        waypoint[1] += amount;
        break;
      case "E":
        waypoint[0] += amount;
        break;
      case "S":
        waypoint[1] -= amount;
        break;
      case "W":
        waypoint[0] -= amount;
        break;
    }
  };

  for (const [op, param] of data)
  {
    switch (op)
    {
      case "N":
      case "E":
      case "S":
      case "W":
        moveWaypoint(op, param);
        break;
      case "L":
      case "R":
        rotateWaypoint(op, param)
        break;
      case "F":
        ship[0] += waypoint[0] * param;
        ship[1] += waypoint[1] * param;
        break;
    }
  }
  return (Math.abs(ship[0]) + Math.abs(ship[1]));
}

export function main()
{
  log(`Input Result: ${ simulateShip(input) }`);
}