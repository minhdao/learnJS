/**
 * JS has a pre-defined set of values that can either be truthy or falsy
 * Truthy - values that resolved as true in boolean context
 * Falsy - values that resolved as false in boolean context
 *         undefined, null, empty string, 0, false
 * Best used to check if something exists
 */

// Given an array of products
// Check if there is any products exist in the array
let products = [];
let product = products[0];

// undefied if no 1st element in the array
if (product !== undefined) {
    console.log('There is a product');
} else {
    console.log('There is no product');
}

// product will resolve in false if it is undefined
if (product) {
    console.log('There is a product');
} else {
    console.log('There is no product');
}

// given an array of friends
// check if you have any friend
let frens = [];
let frensCount = frens.length;

if (friendCount) {
    console.log('Yay, you have friens');
} else {
    console.log('You have no friends');
}