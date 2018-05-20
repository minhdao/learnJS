console.log('Script loaded ...');

let todos = getSavedTodos();

let hideCompletedTodos = false;

// eventListener for filter text inside input-newTodo
let filterText = '';
document.querySelector('#input-newTodo').addEventListener('input', function(event) {
    filterText = event.target.value;
    console.log('filter text', filterText);
    let filteredResults = filterTodos(todos, filterText);
    showTodosSummary(filteredResults);
    renderTodos(filteredResults);
});

// listener for form submit event
document.querySelector('#form-add-todo').addEventListener('submit', function(event) {
    // cancel default reload event when submitting form
    event.preventDefault();
    // create new todo
    createTodo(todos, event);
    // save to local storage
    saveTodos(todos);
    event.target.elements.inputTodo.value = '';
    // rerender todos array
    showTodosSummary(todos);
    renderTodos(todos);
});

// listener for hide-completed-todos checkbox
document.querySelector('#hide-completed-todos').addEventListener('change', function(event) {
    hideCompletedTodos = event.target.checked;
    if (hideCompletedTodos) {
        let notCompletedTodos = todos.filter(function(todo) {
            if (!todo.completed) {
                return todo;
            }
        });
        renderTodos(notCompletedTodos);
    } else {
        renderTodos(todos);
    }
});

// run
renderTodos(todos);