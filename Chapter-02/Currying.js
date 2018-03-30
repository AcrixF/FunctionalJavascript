const altSum3 = x => y => z => x + y + z;

console.log( altSum3(1)(2)(3) ) ;

let fn1 = altSum3( 4 );
let fn2 = fn1( 5 );
let fn3 = fn2( 6 );

console.log( fn3 );
