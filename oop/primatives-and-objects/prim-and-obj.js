/**
 * JS has primatives: string, number, boolean, null and undefined
 * By right, primatives do no have any properties and solely used to store primative values
 *      e.g. let name = 'minh'; let number = 3; let isBeautiful = true
 * However, it would be nice if we can have some method attached directly to those primatives to use
 *      e.g. 'minh'.split('') to split the string into an array of characters
 * Therefore primatives like string, number, boolean alve some object wrapper to provide those useful methods through prototypal inheritance
 */

// string -> primative type, but when called with '.split()' JS created a String object and call on the '.split() methods within the prototype properties'
// name -> String.prototype -> Object.prototype -> null
// the same prototypal chain can be found for number and boolean
let name = 'minh';
console.log(minh.split(''));

// an array is not primative but has a similar prototypal chain
// myArray -> Array.prototype -> Object.prototype -> null
let myArray = [1, 2, 3, 4];
console.log(myArray.indexOf(2));

// an object
// product -> Object.prototype -> null
let product = {
    name: 'A book on C',
    type: 'Book'
};
console.log(product.hasOwnProperty('name'));