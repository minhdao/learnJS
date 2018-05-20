// JS is a single thread language meaning it can only do 1 thing at a time
// V8 is a runtime environment for JS which executes JS code
// V8 consists of 2 main part: Stack and Heap
// V8 Heap == memonry allocation and stuff
// V8 Stack executes and keeps track of where you are your JS code
// Stack == push and pop on top. When code hit a 'return' or complete, it pops out of the stack
// Some code takes long to complete and can block other code in the stack

// blocking code example:
// forEach is a blocking code/sync code that can block the stack until it finishes
function doBlockingLoop(array) {
    array.forEach(function (item) {
        console.log(item);
    });
}
// for loop is also a blocking/sync code that can block the stack until it finishes
function createArray(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = i;
        console.log(i + ' created!');
    }
    return arr;
}

// var myarr = createArray(100000);
// doBlockingLoop(myarr);
// console.log('This should not be the last line printed out!');

// fix the code so it's not blocking anymore
// but unfortunately this code won't work because
// you defer this code out of the stack with setTimeout and then call array.forEach
// .forEach doesn't work outside of the stack
function tryDoNonBlockingLoop(array) {
    setTimeout(function (array) {
        array.forEach(function (item) {
            console.log(item);
        }, 5);
    });
}
// this code will work
// each item is pushed out of the stack into web browser world to be executed
// http://latentflip.com use this for illustration
function doNonBlockingLoop(array) {
    array.forEach(function (item) {
        setTimeout(function () {
            // do some browser work
            // like getting data from a database, requesting a page, etc.
            console.log(item);
        }, 0);
    });
}

doNonBlockingLoop([1,2,3,4,5,6]);
// even though this is called after, it will show up first
console.log('This should be the first line printed');
