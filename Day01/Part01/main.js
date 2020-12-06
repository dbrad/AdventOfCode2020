import { input } from "./input.js";
import { log } from "../../app.js";

export function expenses(report)
{
  report.sort();
  const maxIndex = report.findIndex(
    (value) =>
    {
      return value >= 2020;
    });
  report = report.slice(0, maxIndex);

  let index = report.length - 1;
  while (index >= 1)
  {
    let cursor = 0;
    const target = 2020 - report[index];
    while (cursor < report.length)
    {
      if (report[cursor] === target)
      {
        return (report[cursor] * report[index]);
      } 
      else if (report[cursor] > target)
      {
        break;
      }
      cursor++;
    }
    index--;
  }
  
  return -1;
}

export function main()
{
  log(`Input Result: ${ expenses(input) }`);
}