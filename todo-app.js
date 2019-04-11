'use strict'

let todos = getSavedTodos()

const timestamp = moment().valueOf()

//initial filter pattern
const filters = {
    searchTitle: '',
    hideCompleted: false,
    sortBy: 'byEdited'
}

//renders initial todos
renderTodos(todos, filters)

//updates filter pattern based on input
document.querySelector('input#search-title').addEventListener('input', (e) => {
    filters.searchTitle = e.target.value
    renderTodos(todos, filters)
})

//take text from input and add new todo
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const id = uuidv4()
    e.preventDefault()
    todos.push({
        id: id,
        title: e.target.elements.text.value,
        body: 'X',
        completed: false,
        createdAt: timestamp,
        updatedAt: timestamp
    })
    //save to local storage
    SaveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

//take value(true/false) of hide-completed checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

//Sync title across pages
window.addEventListener('storage', (e) => {
    console.log(e)
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue)
    }

    renderTodos(todos, filters)
})

//Sort todos
document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderTodos(todos, filters)
})