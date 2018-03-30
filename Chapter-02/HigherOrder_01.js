const once = (f, g) => {
    let done  = false;
    return ( ...args) => {
        if( !done ){
            done = true;
            f( ...args);
        } else {
            g( ...args)
        }
    };
};

const squeak = a => console.log(a, " squeak!!");
const done = () => console.log("Already done");

squeak("Original");
squeak("Original");
squeak("Original");

const squeakOnce = once( squeak, done );

squeakOnce("Only once");
squeakOnce("Only once");
squeakOnce("Only once");

console.log("***********************************************************");

const onceAndAfter = (f , g) => {
    let done = false;
    return (... args) => {
        if ( !done ){
            done = true;
            f(... args);
        } else {
            g(... args);
        }
    };
};

const squeak_A = x => console.log(x, "squeak!!");
const creak = x => console.log(x , "creak");
const makeSound = onceAndAfter( squeak_A, creak );

makeSound("door");
makeSound("door");
makeSound("door");
makeSound("door");


/**
 **/

console.log("-----------------Alterator---------------------");
const alternator  = ( f ,g ) => {
    let value = 2;
    return (... args) => {
        if( (value % 2) === 0) {
            value = 1;
            f(... args);
        } else {
            value = 2;
            g(...args);
        }
    }

};

const sayA = () => console.log( "A" );
const sayB = () => console.log( "B" );

let alt = alternator( sayA, sayB );

alt();
alt();
alt();
alt();
