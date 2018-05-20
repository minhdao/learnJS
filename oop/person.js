// constructor function(similar to a class in java)
//      must be a normal function(need to access 'this')
//      must be use with 'new' keyword to return the object and 'this'
//      should have capitalized name e.g. Person, Animal
// constructor focuses on the UNIQUENESS of each object created e.g. people normally have different name
const Person = function (firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age;
};
// prototype focuses on what CAN be SHARED between the objects
// e.g. getBio() to display some summary about a person
// this is called prototypal inheritance in JS
Person.prototype.getBio = function () {
    return `${this.firstName} is ${this.age}.`;
};
Person.prototype.setName = function (fullName) {
    let names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
    return this.getBio();
};
Person.prototype.race = 'Human';

// 'new' will create the object and pass 'this' to acess what's inside the object
let person1 = new Person('minh', 'dao', 27);
let person2 = new Person('tim', 'horton', 40);
let person3 = new Person();

console.log(person1.getBio());
console.log(person2.getBio());
console.log(person1.setName('Alex Turner'));
console.log(person2.getBio());
