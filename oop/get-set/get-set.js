/**
 * Getter and Setter is a JS feature used in Objects to intercept before assigning
 * value to properties
 */

let data = {
    location: ''
};

// assign value to location property
data.location = 'Saigon';
console.log(data.location);

// what happen if someone input a number?
// it makes no sense to accept a number in this case
data.location = 1;
console.log(data.location);

// there is a way to intercept and check value before assigning the property
// getter and setter in JS

let data1 = {
    set location(value) {
        // make sure location is not a number
        if (isNaN(value)) {
            this._location = value;
        }
    },
    get location() {
        return this._location;
    }
};

data1.location = 'Hanoi';
data1.location = 123;
console.log(data1.location);

// use getter and setter insdie a class
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.likes = [];
    }
    set like(value) {
        this.likes.push(value);
    }
    get like() {
        return this.likes;
    }
}

let minh = new Person('Dao Tien Minh', 27, 'Male');
console.log(minh);
minh.like = 'coffee';
console.log(minh.like);
minh.like = 'food';
console.log(minh.like);