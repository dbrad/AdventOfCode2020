import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * @param {number} value 
 * @returns {string[]}
 */
function decimalToBinary( value )
{
  return value.toString( 2 ).split( "" ).reverse();
}

/**
 * 
 * @param {string[]} binary 
 * @return {bigint}
 */
function binaryToBigInt( binary )
{
  let result = 0n;
  let len = BigInt( binary.length );
  for ( let i = 0n; i < len; i++ )
  {
    if ( binary[ i ] === "1" )
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
function applyMask( value, mask )
{
  for ( let i = 0; i < mask.length; i++ )
  {
    if ( mask[ i ] === "1" )
    {
      value[ i ] = "1";
    }
    else if ( mask[ i ] === "0" )
    {
      value[ i ] = value[ i ] || 0;
    }
    else
    {
      value[ i ] = "X";
    }
  }
  return value;
}

/**
 * @param {string} input 
 */
export function calculateTotalValue( input )
{
  let mask = [ "X" ];
  let memory = new Map();

  /**
   * 
   * @param {number} baseIndex 
   * @param {string[]} mask 
   * @param {bigint} value 
   */
  const mem = ( baseIndex, mask, value ) =>
  {
    const indexes = [ 0 ];
    const binaryIndex = decimalToBinary( baseIndex );
    const maskedIndex = applyMask( binaryIndex, mask );

    let bitIndex = 0;
    for ( const bit of maskedIndex )
    {
      if ( bit === "1" )
      {
        for ( let i = 0; i < indexes.length; i++ )
        {
          indexes[ i ] += 2 ** bitIndex;
        }
      }
      else if ( bit === "X" )
      {
        const copy = [ ...indexes ];
        for ( let i = 0; i < copy.length; i++ )
        {
          copy[ i ] += 2 ** bitIndex;
        }
        indexes.push( ...copy );
      }
      bitIndex++;
    }

    for ( const index of indexes )
    {
      memory.set( index, value );
    }
  };

  let program = input.split( "\n" );
  for ( const line of program )
  {
    const op = line.split( " = " )[ 0 ];
    const value = line.split( " = " )[ 1 ];

    if ( op === "mask" )
    {
      mask = value.split( "" ).reverse();
    }
    else
    {
      const index = parseInt( op.match( /\d+/ )[ 0 ] );
      const bigintValue = BigInt( parseInt( value ) );
      mem( index, mask, bigintValue );
    }
  }

  let result = 0n;
  for ( const [ index, value ] of memory )
  {
    result += value;
  }
  return result;
}

export function main()
{
  log( `Input Result: ${ calculateTotalValue( input ) }` );
}