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
    todoEl.appendChild(checkTodo)

    //Setup the todo text
    textEl.textContent = todo.text
    todoEl.appendChild(textEl)

    //Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)    
    
    return todoEl
}