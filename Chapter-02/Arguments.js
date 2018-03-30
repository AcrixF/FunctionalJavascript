function somenthingElse() {
    console.log( arguments );
}

function listArguments() {
    console.log( arguments );
    var myArray = Array.prototype.slice.call( arguments );
    console.log( myArray );
    somenthingElse.apply(null, myArray);
}

listArguments(22, 9, 60);

function listArguments2(...args) {
    console.log( args );
    somenthingElse( ...args );
}

listArguments2( 12, 4, 56);