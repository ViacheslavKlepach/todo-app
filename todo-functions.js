'use strict'

//Fetch existing todos from localStorage
const getSavedTodos = () => {
        //check for existing saved data
        const todosJSON = localStorage.getItem('todos')
    try {
        //read and parse the data when the app starts up
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//Save todos to localStorage
const SaveTodos = (todos) => localStorage.setItem('todos', JSON.stringify(todos))

//Remove Todo from the list
const removeTodo = (id) => {
    const nodeIndex = todos.findIndex((todo) => todo.id === id)
    if (nodeIndex > -1) {
        todos.splice(nodeIndex, 1)
    }
}

//Toggle the completed value for a given  todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

//Sort todos by one of 3 ways
const sortTodos = (todos, sortBy) => {
    if (sortBy === 'byEdited') {
        return todos.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return todos.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return todos.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return todos
    }
}

//Render application todos based on filters
const renderTodos = (todos, filters) => {
    //Sort todos
    todos = sortTodos(todos, filters.sortBy)
    //filters todos based on the filter pattern and by value from hide-completed checkbox
    const filteredTodos = todos.filter((todo) => {
        const searchTitleMatch = todo.title.toLowerCase().includes(filters.searchTitle.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTitleMatch && hideCompletedMatch
    })

    //clears initial todos
    document.querySelector('#todos').innerHTML = ''
    //renders filterred todos
    filteredTodos.forEach((todo) => document.querySelector('#todos').appendChild(generateTodoDOM(todo)));
}

//Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkTodo = document.createElement('input')
    const textEl = document.createElement('a')
    const removeButton = document.createElement('button')

    //Setup todo checkbox
    checkTodo.setAttribute('type', 'checkbox')
    checkTodo.checked = todo.completed
    todoEl.appendChild(checkTodo)
    checkTodo.addEventListener('change', () => {
        toggleTodo(todo.id)
        SaveTodos(todos)
        renderTodos(todos, filters)
    })

    //Setup the todo text
    textEl.textContent = todo.title
    textEl.setAttribute('href', `/edit.html#${todo.id}`)
    todoEl.appendChild(textEl)

    //Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        SaveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoEl
}

//Generate last edited message 
const lastEditedMessage = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`