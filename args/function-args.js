/**
 * In JS a function can take in argument(s)
 * JS assigns undefined for any argument declared but not provided by default
 * JS also provide you a way to assign defult value(s) for argument(s)
 */

// Zero argument
let helloEveryone = function () {
    console.log('Hello, everyone!');
};
helloEveryone();

// One or multiple argument(s)
let add = function (x, y ,z) {
    return x + y + z;
};
let result = add(1,2,3);
console.log('Result', result);

// Argument(s) with default value(s)
let getScore = function (name = 'Anoymous', score = 0) {
    console.log('Player: ' + name + ' Score: ' + score);
};
getScore();
getScore('Minh', 20);
getScore(undefined, 100);

// Exercise - Write function to caculate tip
let calTip = function (amount = 0, tipPercent = 0) {
    return amount * tipPercent;
};
let tip = calTip();
console.log(tip);
tip = calTip(254, 0.13);
console.log(tip);
tip = calTip(254, 0.20);
console.log(tip);
