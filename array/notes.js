const notes = ['note 1', 'note 2', 'note 3']; // create an array
console.log(notes);

let num_items = notes.length; // get number of items/lenght of the array
console.log('Number of items/length in side the array', num_items);

// add new item at the end of the array
notes.push('new note'); // push()
console.log(notes);

// remove an item at the end of the array
let removedItem = notes.pop(); // pop()
console.log(`Removed`, removedItem);
console.log(notes);

// add new item at the begining of the array
notes.unshift('new note');
console.log(notes);

// remove item at the begining of the array
removedItem = notes.shift();
console.log(`Removed`, removedItem);
console.log(notes);

let myNotes = [`blind`, `can detect sounds very very very well`, `silence to survive`];
console.log(myNotes);

// remove item anywhere in the array
myNotes.splice(1,1); // this means: start at index 1 and remove 1 item
console.log(myNotes);

// add an item anywhere in the array
myNotes.splice(1, 0, 'can detect sound very very very well'); // this means: start from index 1, remove 0 item, put in this string
console.log(myNotes);

// forEach methods apply a function for each element inside the array
myNotes.forEach(function (item) {
    console.log(item);
});

// search an array with indexOf(): return -1 if not found
console.log(myNotes.indexOf('blind')); // 0 - find the string at index 0 of the array
console.log(myNotes.indexOf('blah blah')); // -1 - cannot find anything like that in the array

// array with objects
let myNoteObjects = [{
    title: 'into-stellar',
    body: 'project to help you learn about stellar.org'
}, {
    title: 'JS',
    body: 'learn JS is good for your career'
}, {
    title: 'Guitar',
    body: 'learn some music is good for your brain'
}, {
    title: 'jS advanced',
    body: 'learn about JS advanced features'
}];
console.log(myNoteObjects);

// objects are different than the other type like string or number
// you can have 'my name ' === 'my name' and 1 === 1 -> this is true
// but when you have 2 objects look exactly like each other {} === {} -> FALSE
// no 2 objects are considered '===', they leave on different parts of the memory
// === opearation on objects will compare their references
// only references to the same object can be '==='
let object1 = {};
let object2 = {};
if (object1 === object2) {
    console.log(`They are equal`);
}else {
    console.log(`Nope, not equal`);
}
let someObject = {};
let someOtherObject = someObject; // someOtherObject has the same reference to someObject hence they are equal
if (someObject === someOtherObject) {
    console.log(`They are equal.`);
}else {
    console.log(`Nope, not equal`);
}

// for array of objects indexOf() method is useless hence findIndex() is used
let index = myNoteObjects.findIndex(function (note, index) {
    if (note.title === 'JS') {
        return index;
    }
});

console.log(index);


/**
 * anonymous function - find specific note base on title provided
 *
 * @param  {array} notes  array of notes
 * @param  {string} title title of note
 * @return {object}        note object found or empty object
 */
// let findNote = function (notes, title) {
//     let index = notes.findIndex(function (note, index) {
//         if (note.title === title){
//             return index;
//         }
//     });
//     if (index !== -1) {
//         return notes[index];
//     }else {
//         console.log(`Cannot find note with title ${title}`);
//         return {};
//     }
// };
let findNote = function (notes, title) {
    let note = notes.find(function (note, index) {
        if (note.title === title) {
            return true;
        }
    });
    return note;
};

/**
 * anonymous function - search and return notes
 *
 * @param  {array} notes array of note objects
 * @param  {string} searchString what to search for
 * @return {array}       array of search results
 */
let searchNote = function (notes, searchString) {
    let results = [];
    notes.find(function (note, index) {
        if (note.title.includes(searchString) || note.body.includes(searchString)) {
            results.push(note);
        }
    });
    return results;
};

/**
 * anonymous function - filter and return notes
 *
 * @param  {array} notes       array of note objects
 * @param  {string} searchString what to search for
 * @return {array}              array of filtered results
 */
let filterNotes = function (notes, searchString) {
    let results = notes.filter(function (note, index) {
        let titleMatched = note.title.includes(searchString);
        let bodyMatched = note.body.includes(searchString);
        return titleMatched || bodyMatched;
    });
    return results;
};

// test stuff out
// let note = findNote(myNoteObjects, 'JS');
// console.log(note);
// note = findNote(myNoteObjects, 'Blah blah');
// console.log(note);
let results = searchNote(myNoteObjects, 'JS');
console.log(results);
results = filterNotes(myNoteObjects, 'JS');
console.log(results);
myNoteObjects.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) { // if a comes before b
        return -1; // put a before b
    }else if (a.title.toLowerCase() > b.title.toLowerCase()){ // if a comes after b
        return 1; // put a after b
    }else{
        return 0; // don't do anything
    }
});
console.log(myNoteObjects);
