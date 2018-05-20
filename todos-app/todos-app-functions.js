console.log('Functions loaded ... ');


/**
 * anonymous function - create new todo - adding todo into todos array
 *
 * @param  {type} todos description
 * @param  {type} event description
 * @return {type}       description
 */
let createTodo = function (todos, event) {
    todos.push({
        _id: uuidv4(),
        text: event.target.elements.inputTodo.value,
        completed: false
    });
};


/**
 * anonymous function - remove todo by its ID
 *
 * @param  {type} id id of the todo
 * @return {type}    no return
 */
let removeTodo = function (id) {
    let todoIndex = todos.findIndex(function (todo) {
        if (todo._id === id) {
            return true;
        }
    });
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};


/**
 * anonymous function - get saved todos in local storage
 *
 * @return {type}  description
 */
let getSavedTodos = function () {
    // fetch todos from local storate
    let todosJSON = localStorage.getItem('todos');

    // check if todos in local storage exists then convert to objects
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        console.log('returned empty');
        return [];
    }
};


/**
 * anonymous function - save todos to localStorage
 *
 * @param  {type} todos description
 * @return {type}       description
 */
let saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
};


/**
 * anonymous function - show todos on the UI
 *
 * @param  {array} todos array of todos
 * @return {type}       no return
 */
let renderTodos = function (todos) {
    let count = 1;
    clearTodosView();
    showTodosSummary(todos);
    todos.forEach(function (todo) {
        document.querySelector('#div-todos').appendChild(genTodoDOM(todo, count));
        count ++;
    });
};


/**
 * anonymous function - generate todo DOM
 *
 * @param  {object} todo  todo object
 * @param  {number} count todo index starting from 1
 * @return {type}         no return
 */
let genTodoDOM = function (todo, count) {

    // create needed elements for each todo
    let tododiv = document.createElement('div');
    let todoCheckbox = document.createElement('input');
    let todoContent = document.createElement('spam');
    let deleteButton = document.createElement('button');

    // modify type and text for the elements
    todoCheckbox.setAttribute('type', 'checkbox');
    todoContent.textContent = `${count}. ${todo.text}`;
    deleteButton.textContent = `x`;

    // check if todo is completed
    if (todo.completed === true) {
        // set checkbox checked
        todoCheckbox.setAttribute('checked', true);
    }

    // add event listener for each delete button
    deleteButton.addEventListener('click', function (event) {
        removeTodo(todo._id);
        saveTodos(todos);
        renderTodos(todos);
    });

    // add event listener for each checkbox
    todoCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            todo.completed = true;
        }else{
            todo.completed = false;
        }
        saveTodos(todos);
        renderTodos(todos);
    });

    // append elements
    tododiv.appendChild(todoCheckbox);
    tododiv.appendChild(todoContent);
    tododiv.appendChild(deleteButton);

    return tododiv;
};


/**
 * anonymous function - get number of todos not completed
 *
 * @param  {array} todos array of todo objects
 * @return {number}       number of todos left
 */
let getTodosLeft = function (todos) {
    let todosLeft = 0;
    todos.forEach(function (todo) {
        if (todo.completed === false) {
            todosLeft += 1;
        }
    });
    return todosLeft;
};


/**
 * anonymous function - remove all todos inside div-todos
 *
 * @return {type}  no return
 */
let clearTodosView = function () {
    document.querySelector('#div-todos').innerHTML = '';
};


/**
 * anonymous function - filter out todos based on input text
 *
 * @param  {array} todos array to todos objects
 * @param  {string} text  input text
 * @return {array}       array of todos returned
 */
let filterTodos = function (todos, text) {
    text = text.toLowerCase();
    let results = [];
    results = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(text);
    });
    return results;
};


/**
 * anonymous function - show summary about todos
 *
 * @param  {array} todos todo objects
 * @return {type}       no return
 */
let showTodosSummary = function (todos) {
    document.querySelector('#div-todos-summary').innerHTML = '';
    let todosLeft = getTodosLeft(todos);
    document.querySelector('#div-todos-summary').appendChild(genTodosSummaryDOM(todosLeft));
};


/**
 * anonymous function - generate todos summary DOM
 *
 * @param  {number} numTodosLeft number of todos left
 * @return {type}              no return
 */
let genTodosSummaryDOM = function (numTodosLeft) {
    let summary = document.createElement('p');
    summary.textContent = `You have ${numTodosLeft} todo(s) left.`;
    return summary;
};
