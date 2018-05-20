/**
 * What will happen when you pass an object into a function?
 * This is pass by reference (pointer to the object in the memmory)
 */

let myAccount = {
    name: 'Minh Dao',
    expense: 0,
    income: 0
};

/**
 * anonymous function - add expense into an account
 *
 * @param  {Object} account account object
 * @param  {number} amount  expense amount
 * @return {type}         no return
 */
let addExpense = function (account, amount) {
    // account = {}; doing this will break the reference link to the object passed in and create a new object
    account.expense += amount;
};

// reference to the object in the memmory is used -> changes will reflect in the object
addExpense(myAccount, 10.00);
console.log(myAccount);
