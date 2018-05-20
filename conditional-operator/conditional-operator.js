/**
 * It's another way to write condition without using 'if' statements
 * Makes it looks cleaner while still achive the same goal
 */

let age = 21;
let message = '';

// write a condition to check value of age and assign appropriate message
if (age < 18) {
    message = 'You cannot enter';
} else {
    message = 'Welcome :)';
}

console.log('if statement result:', message);

// now use conditional operator to achieve the same thing
// no 'if' used
// the structure looks something like this:
// condition ? returned value if satisfy : returned value if not satisfy
message = age < 18 ? 'You cannot enter' : 'Welcome :)';

console.log('con operator: ', message);

// display a page if it exists
let pageFound = false;

let displayPage = () => {
    console.log('Displaying page ... ');
};

let displayPageNotFound = () => {
    console.log('Page not found');
};

// check the value of pageFound
pageFound ? displayPage() : displayPageNotFound();

// checking team size and print correct message
let team = ['minh', 'tien', 'dao', 'blah', 'blah'];

let checkTeam = (array) => {
    return array.length <= 4 ? `Team size: ${array.length}` : `Too many people on your team`;
};

let result = checkTeam(team);
console.log(result);