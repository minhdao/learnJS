/**
 * try-catch is a way to handle error properly without crashing the program
 * it's actually try-throw-catch in that order
 */

/**
 * [calTip calculate tip base on the amount. Tip is always 25% of the amount]
 * @param  {[number]} amount [Total bill amount]
 * @return {[number]}        [Tip]
 */
let calTip = (amount) => {
    // someone might try to call this function with a string or boolean
    // which will cause the program to behave unexpectedly
    // so we must handle this situation
    if (typeof amount !== 'number') {
        throw Error('amount must be a number'); // the function stops here
    }
    return amount * .25;
};

// proper way to handle error
try {
    // an error might be throw
    let billAmount = 10;
    let tip = calTip(billAmount);
    console.log(tip);
} catch (e) {
    // this will catch any error throw inside try
    console.log(e);
} finally {
    // program continue here afterward
    console.log('Program continue ... ');
}