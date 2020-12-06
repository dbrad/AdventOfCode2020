import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {number[]} report 
 */
export function expenses(report)
{
  report.sort((a, b) => a - b);

  let maxIndex = report.findIndex((value) =>
  {
    return value >= 2020;
  });
  report = report.slice(0, maxIndex);

  maxIndex = report.findIndex((value) =>
  {
    return report[0] + report[1] + value >= 2020;
  });
  report = report.slice(0, maxIndex);

  let f = 0;
  let m = 1;
  let e = 2;
  let cap = report.length;

  while (f < report.length - 2)
  {
    const value = report[f] + report[m] + report[e];

    if (value === 2020)
    {
      return report[f] * report[m] * report[e];
    }
    else if (value < 2020)
    {
      e++;
    }
    else if (m === cap)
    {
      f++;
      m = f + 1;
      e = m + 1;
    }
    else if (e === cap || value > 2020)
    {
      cap = e;
      m++;
      e = m + 1;
    }
  }

  return -1;
}

export function main()
{
  log(`Input Result: ${ expenses(input) }`);
}