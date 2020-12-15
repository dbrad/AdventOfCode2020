import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * @param {number} value 
 * @returns {string[]}
 */
function decimalToBinary(value)
{
  return value.toString(2).split("").reverse();
}

/**
 * 
 * @param {string[]} binary 
 * @return {bigint}
 */
function binaryToBigInt(binary)
{
  let result = 0n;
  let len = BigInt(binary.length);
  for (let i = 0n; i < len; i++)
  {
    if (binary[i] === "1")
    {
      result += 2n ** i;
    }
  }
  return result;
}

/**
 * 
 * @param {string[]} value 
 * @param {string[]} mask 
 */
function applyMask(value, mask)
{
  for (let i = 0; i < mask.length; i++)
  {
    if (mask[i] === "1")
    {
      value[i] = "1";
    }
    else if (mask[i] === "0")
    {
      value[i] = value[i] || 0;
    }
    else
    {
      value[i] = "X"
    }
  }
  return value;
}

/**
 * @param {string} input 
 */
export function calculateTotalValue(input)
{
  let mask = ["X"];
  let memory = [0n];

  /**
   * 
   * @param {number} index 
   * @param {string[]} mask 
   * @param {bigint} value 
   */
  const mem = (index, mask, value) =>
  {
    const indexes = [];
    const binaryIndex = decimalToBinary(index);
    const maskedIndex = applyMask(binaryIndex, mask);
    log(maskedIndex);

    memory[index] = value;
  };

  let program = input.split("\n");
  for (const line of program)
  {
    const op = line.split(" = ")[0];
    const value = line.split(" = ")[1];

    if (op === "mask")
    {
      mask = value.split("").reverse();
    }
    else
    {
      const index = parseInt(op.match(/\d+/)[0]);
      const bigintValue = BigInt(parseInt(value));
      mem(index, mask, bigintValue);
    }
  }

  let result = 0n;
  for (let i = 0; i < memory.length; i++)
  {
    if (memory[i])
    {
      result += memory[i];
    }
  }
  return result;
}

export function main()
{
  log(`Input Result: ${ calculateTotalValue(input) }`);
}