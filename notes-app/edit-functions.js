// get ID after #
let noteID = location.hash.substring(1);

// load in notes from local storage
let notes = loadNotes();

// get the note with specific noteID
let note = notes.find(function (note) {
    if (note._id === noteID) {
        return note;
    }
});

// if not found any note with noteID then redirect back to home
if (note === undefined) {
    location.assign('/');
}

// display what is in the note
document.querySelector('#note-title').value = note.title;
document.querySelector('#note-text').value = note.text;
document.querySelector('#note-lastEditedAt').textContent = getLastEdited(note.editedAt);

// add event listener for note-title
document.querySelector('#note-title').addEventListener('input', function (event) {
    note.title = event.target.value;
    note.editedAt = moment().valueOf();
    saveNotes(notes);
});

// add event listener for note-text
document.querySelector('#note-text').addEventListener('input', function (event) {
    note.text = event.target.value;
    note.editedAt = moment().valueOf();
    saveNotes(notes);
});

// add event listener for btn-delete-note
document.querySelector('#btn-delete-note').addEventListener('click', function (event) {
    deleteNote(noteID);
    location.assign('/');
});


// add window event lisener to listen for changes in the storage for data sync between different edit pages
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        // load in notes from local storage
        let notes = loadNotes();

        // get the note with specific noteID
        let note = notes.find(function (note) {
            if (note._id === noteID) {
                return note;
            }
        });

        // if not found any note with noteID then redirect back to home
        if (note === undefined) {
            location.assign('/');
        }

        // display what is in the note
        document.querySelector('#note-title').value = note.title;
        document.querySelector('#note-text').value = note.text;
    }
});
