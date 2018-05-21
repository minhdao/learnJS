/**
 * Class is a way to construct class in JS beside constructor function
 * It looks somewhat similar to Java
 */

class Animal {
    constructor(type, name, age, gender) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getBio() {
        return `Type: ${this.type}. Name: ${this.name}. Age: ${this.age}. Gender: ${this.gender}`;
    }
}

class Cat extends Animal {
    constructor(name, age, gender) {
        super('Cat', name, age, gender);
    }
    mewo() {
        return `${this.name} said 'Meow~...'`;
    }
    climbTree() {
        return `${this.name} climbing tree ... `;
    }
}

let animal = new Animal('Cat', 'Floki', 3, 'Male');
console.log(animal.getBio());

let animal2 = new Cat('Luna', 2, 'Female');
console.log(animal2.getBio());
console.log(animal2.mewo());
console.log(animal2.climbTree());