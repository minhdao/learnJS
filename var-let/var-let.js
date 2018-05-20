/**
 * let - allow you to declare a variable limted to a scope of a code block (locally)
 * var - allow you to declare a variable globally or locally to an entire function regardless to code block
 */

var varOne = 'varOne';

if (true) {
    console.log(varOne); // varOne
    if (true) {
        var varOne = 'varOne declared again'; // override the global varOne
    }
}

console.log(varOne); // varOne declared again

// -----------------------------------------------------------------------------

let letOne = 'letOne';

if (true) {
    console.log(letOne); // letOne
    if (true) {
        let letOne = 'letOne declared again'; // this only shadow, but NOT override global letOne
        console.log(letOne); // letOne declared again
    }
}

console.log(letOne); // letOne
