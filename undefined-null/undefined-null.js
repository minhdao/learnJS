/**
 * JS provide 2 types to represent emptiness: undifined and null
 * undifined is used by the JS language itself to provide as default value in some cases
 * therefore, null should be used by the developer to explicitly assign empty value
 */


/**
 * undefined for variables
 */
let name; // only declared but not assign any value
console.log(name); // undefined - a variable with out any value will be assigned undefined by JS

let variableOne = 'variableOne';
// to check if a variable has a value assigned, we can use this if condition to check
if (variableOne === undefined) {
    console.log('Please assign a value for variableOne');
}else{
    console.log(variableOne);
}


/**
 * undefined for functions: arguments and return
 */
let functionOne = function (argument) {
    console.log(argument);
};
functionOne(); // undefined - no arg provided so JS assign undefined for argument

let returnValue = functionOne('arg');
console.log(returnValue); // undefined - no return value from the fucntion so JS assign undefined to the variable by default
