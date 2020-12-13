import { input } from "./input.js";
import { log } from "../../app.js";

export function findShuttle(input)
{
  const eariestTime = input.split("\n")[0];
  const busIds = input.split("\n")[1].split(",");

  let shortestWait = Number.MAX_VALUE;
  let bestBusId = -1;
  for (const busId of busIds)
  {
    if (busId === "x") continue;

    const minutes = parseInt(busId);
    const wait = Math.ceil(eariestTime / minutes) * minutes - eariestTime;
    if (wait < shortestWait)
    {
      shortestWait = wait;
      bestBusId = minutes;
    }
  }
  return bestBusId * shortestWait;
}

export function main()
{
  log(`Input Result: ${ findShuttle(input) }`);
}