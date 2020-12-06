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

function getHighestSeatId(input)
{
  let highSeatId = 0;
  for (const boardingPass of input)
  {
    const seatId = getSeatId(boardingPass);
    if (seatId > highSeatId) highSeatId = seatId;
  }
  return highSeatId;
}

export function main()
{
  log(`Input Result: ${ getHighestSeatId(input) }`);
}