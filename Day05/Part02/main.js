import { assertEquals } from "../../lib/testing.js";
import { input } from "./input.js";
import { log } from "../../app.js";

export function getSeatId(boardingPass)
{
  let rowLower = 0;
  let rowUpper = 127;
  let rowCount = 128;

  let columnLower = 0;
  let columnUpper = 7;
  let columnCount = 8;

  for (const value of boardingPass)
  {
    switch (value)
    {
      case "F":
        rowCount = rowCount / 2;
        rowUpper -= rowCount;
        break;
      case "B":
        rowCount = rowCount / 2;
        rowLower += rowCount;
        break;
      case "L":
        columnCount = columnCount / 2;
        columnUpper -= columnCount;
        break;
      case "R":
        columnCount = columnCount / 2;
        columnLower += columnCount;
        break;
    }
  }

  assertEquals(columnLower, columnUpper);
  assertEquals(rowLower, rowUpper);

  return rowLower * 8 + columnLower;
}

function findMissingSeats(input)
{
  let lowSeatId = 999
  let highSeatId = 0;
  const seatIds = new Set();
  for (const boardingPass of input)
  {
    const seatId = getSeatId(boardingPass);
    seatIds.add(seatId);
    if (seatId > highSeatId) highSeatId = seatId;
    if (seatId < lowSeatId) lowSeatId = seatId;
  }

  for (let i = lowSeatId; i <= highSeatId; i++)
  {
    if (!seatIds.has(i))
    {
      log(`MISSING NUMBER: ${ i }`);
    }
  }
}

export function main()
{
  log(`Input Result: ${ findMissingSeats(input) }`);
}