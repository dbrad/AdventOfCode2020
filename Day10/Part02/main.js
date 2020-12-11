import { input } from "./input.js";
import { log } from "../../app.js";

export function totalCombos( input )
{

  const adapters = [ 0, ...input ];
  adapters.sort( ( a, b ) => a - b );

  let cache = new Map();
  const wayToConnectToIndex = ( index ) =>
  {
    if ( cache.has( index ) )
      return cache.get( index );

    if ( index === adapters.length - 1 )
      return 1;

    let waysToConnect = 0;
    const end = Math.min( index + 4, adapters.length );
    for ( let search = index + 1; search <= end; search++ )
    {
      if ( adapters[ search ] - adapters[ index ] <= 3 )
        waysToConnect += wayToConnectToIndex( search );
    }

    cache.set( index, waysToConnect );
    return waysToConnect;
  };

  return wayToConnectToIndex( 0 );
}

export function main()
{
  log( `Input Result: ${ totalCombos( input ) }` );
}