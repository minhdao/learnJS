// arguments only exist in normal functions
const add = function (a, b) {
    console.log(arguments);
};
add(1,2,3,4);

// arrow function does not bind with 'this', 'arguments', etc. so there are some
// more usage for arrow function beside the 'friendly' syntax.

/**
 * notice the function inside array method forEach()
 * a normal function binds to 'this', so calling 'this' inside a normal function inside the method
 * might refer to another 'this' (global) due to scoping
 */
let person_1 = {
    name: 'Mina',
    age: 19,
    gener: 'male',
    bffs: ['pip', 'floki', 'maria'],
    isBestFriendOf: function (name) {
        let result = false;
        this.bffs.forEach(function(bff) {
            if (bff === name) {
                console.log(`${this.name} is ${name}'s bff.`); // undefined is pip's bff
                result = true;
            }
        });
        return result;
    }
};

/**
 * notice the function inside array method forEach()
 * an arrow function does NOT bind to 'this', so 'this' is not refering to anything else besides object
 */
let person_2 = {
    name: 'Minh',
    age: 27,
    gener: 'male',
    bffs: ['pip', 'floki', 'maria'],
    isBestFriendOf: function (name) {
        let result = false;
        this.bffs.forEach((bff) => {
            if (bff === name) {
                console.log(`${this.name} is ${name}'s bff.`); // Minh is pip's bff
                result = true;
            }
        });
        return result;
    }
};


/**
 * you can still use a normal function inside the array methods with some workaround
 * create the variable '_this' and assign to 'this', then use '_this' inside the method
 */
let person_3 = {
    name: 'nope01',
    age: 3,
    gener: 'female',
    bffs: ['pip', 'floki', 'maria'],
    isBestFriendOf: function (name) {
        let result = false;
        let _this = this;
        this.bffs.forEach(function(bff) {
            if (bff === name) {
                console.log(`${_this.name} is ${name}'s bff.`); // nope01 is pip's bff
                result = true;
            }
        });
        return result;
    }
};
console.log(person_1.isBestFriendOf('pip'));
console.log(person_2.isBestFriendOf('pip'));
console.log(person_3.isBestFriendOf('pip'));
