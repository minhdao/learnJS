console.log('functions loaded ... ');


/**
 * anonymous function - load notes from local storage
 *
 * @return {type}  description
 */
let loadNotes = function () {
    let notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    }
    return [];
};


/**
 * anonymous function - create a note by pushing it into notes array and save to local storage
 *
 * @param  {object} note note object
 * @return {type}      no return
 */
let createNote = function (note) {
    notes.push(note);
    saveNotes(notes);
};


/**
 * anonymous function - delete a note with provided noteID
 *
 * @param  {string} noteID note ID
 * @return {type}        no return
 */
let deleteNote = function (noteID) {
    console.log('delete note', noteID);
    let index = notes.findIndex(function (note, index) {
        if (note._id === noteID) {
            return true;
        }
    });

    if (index > -1) {
        notes.splice(index, 1);
        saveNotes(notes);
    }
};


/**
 * anonymous function - save notes array into local storage
 *
 * @param  {type} notes description
 * @return {type}       description
 */
let saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};


/**
 * anonymous function - sort notes based on the sortBy value provided
 *
 * @param  {array} notes  array of notes objects
 * @param  {string} sortBy sort by options
 * @return {array}        sorted notes
 */
let sortNotes = function (notes, sortBy) {
    if (sortBy === 'lastEdited') {
        return notes.sort(function (a, b) {
            if (a.editedAt > b.editedAt) {
                return -1;
            }else if (a.editedAt < b.editedAt) {
                return 1;
            }else {
                return 0;
            }
        });
    }else if (sortBy === 'lastCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
                return -1;
            }else if (a.createdAt < b.createdAt) {
                return 1;
            }else {
                return 0;
            }
        });
    }else if (sortBy === 'alphabets') {
        return notes.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }else if (a.title < b.title) {
                return -1;
            }else {
                return 0;
            }
        });
    }
    return notes;
};

/**
 * anonymous function - generate DOM based on note object provided
 *
 * @param  {object} note note object provided
 * @return {type}        DOM for the note
 */
let genNoteDOM = function (note) {
    // create element
    let noteDIV = document.createElement('div');
    let noteSpam = document.createElement('a');
    let deleteButton = document.createElement('button');

    // modify elements
    noteSpam.textContent = `${note.title}`;
    noteSpam.setAttribute('href', `/edit.html#${note._id}`);
    deleteButton.textContent = 'x';

    // add elements into noteDIV
    noteDIV.appendChild(noteSpam);
    noteDIV.appendChild(deleteButton);

    return noteDIV;
};


/**
 * anonymous function - render the notes from notes array objects
 *
 * @param  {array} notes notes objects array
 * @return {type}       no return
 */
let renderNotes = function (notes, sortBy) {
    notes = sortNotes(notes, sortBy);
    notes.forEach(function (note) {
        document.querySelector('#div-notes').appendChild(genNoteDOM(note));
    });
};


/**
 * anonymous function - remove all notes inside div-notes
 *
 * @return {type}  no return
 */
let clearNotesView = function () {
    document.querySelector('#div-notes').innerHTML = '';
};

let getLastEdited = function (timestamp) {
    let lastEdited = moment(timestamp).fromNow();
    console.log(timestamp);
    return `Last edited ${lastEdited}`;
};
