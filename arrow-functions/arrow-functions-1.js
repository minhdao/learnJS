const square = (x) => {
    return x*x;
};

console.log(square(10));

let people = [{
    name: 'minh',
    age: 27
}, {
    name: 'tien',
    age: 31
}, {
    name: 'dao',
    age: 18
}];

let under30 = people.filter(function (person) {
    return person.age < 30;
});

let above30 = people.filter((person) => person.age >=30);

let adult18 = people.filter((person) => person.age === 18);

console.log(adult18);
