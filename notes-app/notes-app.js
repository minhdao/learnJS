console.log('script loaded...');

let notes = loadNotes();

// sort by value - default value is the first option in the selection
let sortBy = document.querySelector('#sort-by').options[0].value;

// get text from input-filter
// input event get value for every text keyed in the input field
document.querySelector('#input-filter').addEventListener('input', function (event) {
    console.log(event.target.value);
});

// add listener to sort by selector
document.querySelector('#sort-by').addEventListener('change', function (event) {
    sortBy = event.target.value;
    clearNotesView();
    renderNotes(notes, sortBy);
});

// add event listener to create note button
document.querySelector('#btn-create-note').addEventListener('click', function (event) {
    let id = uuidv4();
    let createdTime = moment().valueOf();
    createNote({
        _id: id,
        title: 'note title',
        text: 'note text',
        createdAt: createdTime,
        editedAt: createdTime
    });
    location.assign(`/edit.html#${id}`);
});

// add window event listener to sync data between edit and home pages
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = loadNotes();
        clearNotesView();
        renderNotes(notes, sortBy);
    }
});

renderNotes(notes, sortBy);
