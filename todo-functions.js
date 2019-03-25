//Fetch existing todos from localStorage
const getSavedTodos = function() {
    //check for existing saved data
    const todosJSON = localStorage.getItem('todos')
    //read and parse the data when the app starts up
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//Save todos to localStorage
const SaveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Remove Todo from the list
const removeTodo = function (id) {
    const nodeIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (nodeIndex > -1) {
        todos.splice(nodeIndex, 1)
    }
}

//Toggle the completed value for a given  todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

//Render application todos based on filters
const renderTodos = function (todos, filters) {
    //filters todos based on the filter pattern and by value from hide-completed checkbox
    const filteredTodos = todos.filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    //clears initial todos
    document.querySelector('#todos').innerHTML = ''
    //renders filterred todos
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    });
}

//Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkTodo = document.createElement('input')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup todo checkbox
    checkTodo.setAttribute('type', 'checkbox')
    checkTodo.checked = todo.completed
    todoEl.appendChild(checkTodo)
    checkTodo.addEventListener('change', function () {
        toggleTodo(todo.id)
        SaveTodos(todos)
        renderTodos(todos, filters)
    })

    //Setup the todo text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    //Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        SaveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoEl
}