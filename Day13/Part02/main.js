import { input } from "./input.js";
import { log } from "../../app.js";

function findModuloInverse(A, C)
{
  for (let B = 0n; B < C; B++)
  {
    const x = (A * B) % C;
    if (x === 1n) return B;
  }
  return -1n;
}
export function findShuttle(input)
{
  let maxTime = 0n;
  const busIds = input.split("\n")[1].split(",").reverse();
  const linC = new Map();
  let N = 1n;
  let index = 0n;
  for (const id of busIds)
  {
    if (id === "x")
    {
      index++;
      continue;
    }
    const mod = BigInt(parseInt(id));
    linC.set(index, mod);
    N = N * mod;
    maxTime = index;
    index++;
  }

  let sum = 0n;
  for (const [bi, mod] of linC)
  {
    const Ni = N / BigInt(mod);

    let xi = findModuloInverse(Ni, mod);
    let biNixi = bi * Ni * xi;

    // log(`x = ${ bi } (mod ${ mod }) | bi = ${ bi } | Ni = ${ Ni } | xi = ${ xi } | biNixi = ${ biNixi }`);

    sum += BigInt(biNixi);
  }
  sum = sum - BigInt(maxTime)
  // log("---");
  // log(`x = ${ sum } (mod ${ N })`);

  sum = sum % BigInt(N);

  // log(`x = ${ sum } (mod ${ N })`);
  // log("&nbsp;");

  return sum;
}

export function main()
{
  log(`Input Result: ${ findShuttle(input) }`);
}