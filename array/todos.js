let myTodos = ['learn JS', 'into-stellar', 'Japanese', 'push up', 'crunch'];

/**
 * anonymous function - get number of todos in an array
 *
 * @param  {type} todos array of todos
 * @return {type}       no return/undefined
 */
let getNumTodos = function (todos) {
    console.log(`You have ${todos.length} todos.`);
};

/**
 * anonymous function - get the todo from array of todos
 *
 * @param  {type} todos array of todos
 * @param  {type} index array position
 * @return {type}       no return
 */
let getTodo = function (todos, index) {
    let todo = todos[index];
    if (todo !== undefined) {
        console.log(`Here is what you need to do: ${todo}`);
    }else{
        console.log('Cannot find todo.');
    }
};

/**
 * anonymous function - add new todo at the end of the todos array
 *
 * @param  {type} todos   todos array
 * @param  {type} newTodo new todo
 * @return {type}         no return
 */
let addTodo = function (todos, newTodo) {
    todos.push(newTodo);
    console.log(`Added ${newTodo}`);
};

/**
 * anonymous function - remove a specific todo from todo array
 *
 * @param  {type} todos todo array
 * @param  {type} index position of item to remove
 * @return {type}       no return
 */
let removeTodo = function (todos, index) {
    let removedItem = todos.splice(index, 1);
    console.log(`Removed ${removedItem} from the todo list.`);
};

/**
 * anonymous function - show all items in the todos list
 *
 * @param  {type} todos todos array
 * @return {type}       no return
 */
let showTodos = function (todos) {
    let itemNum = 1;
    console.log(`List of todos:`);
    console.log(`-------------`);
    todos.forEach(function (item) {
        console.log(`${itemNum}. ${item}`);
        itemNum++;
    });
    console.log(`-------------`);
};

// test stuff down here
getNumTodos(myTodos); // get total number of todos in the array
getTodo(myTodos, 0); // get 1st todo
getTodo(myTodos, myTodos.length - 1); // get last todo
addTodo(myTodos, 'clean up');
console.log(myTodos);
removeTodo(myTodos, 0);
console.log(myTodos);
showTodos(myTodos);

// todos objects array
let todosObjects = [{
    text: 'JS',
    completed: true
}, {
    text: 'into-stellar',
    completed: false
}, {
    text: 'Japanese',
    completed: false
}, {
    text: 'exercise',
    completed: false
}];
console.log(todosObjects);

/**
 * anonymous function - find todo when provided text
 *
 * @param  {array} todos array of todos objects
 * @param  {string} text  todo text
 * @return {object}       todo object or undefined
 */
let findTodo = function (todos, text) {
    let todo = todos.find(function (todo, index) {
        if (todo.text === text) {
            return true;
        }
    });
    return todo; // return todo object if found or undefined if not found
};

let todo = findTodo(todosObjects, 'JS');
console.log(todo);
todo = findTodo(todosObjects, 'blah blah');
console.log(todo);


/**
 * anonymous function - delete specific todo provided the text
 *
 * @param  {array} todos array of todos objects
 * @param  {string} text  todo text
 * @return {object}       deleted todo object or empty object
 */
let deleteTodo = function (todos, text) {
    let index = todos.findIndex(function (todo, index) {
        if (todo.text === text) {
            return true;
        }
    });
    if (index !== -1) {
        todos.splice(index, 1);
        console.log(`Deleted todo '${text}' from the list. `);
    }else {
        console.log(`Cannot find todo with text ${text}`);
        return {};
    }
};

/**
 * anonymous function - get todo that has not been completed
 *
 * @param  {array} todos array of todo objects
 * @return {array}       array of todos not completed yet
 */
let getThingsToDo = function (todos) {
    let results = todos.filter(function (todo, index) {
        return todo.completed === false;
    });
    return results;
};


/**
 * anonymous function - sort todos so that the ones not completed comes first
 *
 * @param  {array} todos array of todos objects
 * @return {type}       no return
 */
let sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === false && b.completed === true) {
            return -1;
        }else if (a.completed === true && b.completed === false){
            return 1;
        }else {
            return 0;
        }
    });
};

// deleteTodo(todosObjects, 'JS');
// console.log(todosObjects);
// console.log(getThingsToDo(todosObjects));
sortTodos(todosObjects);
console.log(todosObjects);
