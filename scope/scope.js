/**
 * The scpope of a variable defines how accessable the variable is based on where it's created
 * JS uses lexical scope (static scope) === varible declared in one part might not be accessable somewhere in the program
 * Code block is used to define the scope of a varible e.g. { stuff insde a code block }
 * Global scope === define outside of all code block
 * Local scope === defined inside a code block
 * Scope rule - In a scope you can access variable inside that scope and any other variable inside its parent scope
 *            - You can define variable with the same name in different scope without effecting other variable in other scope (this works with let)
 * Variable shadowing - variable with the same name but within different scope -> value of the inner most child scope will shadow the value in parent scope
 * Leaked global - variable used with out declaring (using 'let' or 'var') will be created as a global variable - this is not cool
 */

// Scope hierarchy for example below
// Global - varOne
    // Local - varTwo, varOne (shadowing)
        // Local - varFour
    // Local - varThree

let varOne = 'varOne'; // Global scope since not inside any block

if (true) {
    let varOne = 'varOne inside a local scope'; // variable shadowing here
    console.log(varOne); // because of shadowing print 'varOne inside a local scope'
    let varTwo = 'varTwo'; // Local scope since inside if {} block
    if (true) {
        let varFour = 'varFour'; // Local scope insdie nested if{} block
    }
}

if (true) {
    let varThree = 'varThree'; // Local scope inside if{} block
}

console.log(varOne); // refer to the Global value varOne

// console.log(varTwo); // error - local variable is not accessible here

if (true) {
    if (true) {
        leakGlobal = 'leaked global'; // variable becomes a leaked global when used with out declaring
    }
}

console.log(leakGlobal);
