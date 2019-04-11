'use strict'

const todoId = location.hash.substring(1)

const titleElement = document.querySelector('#todo-title')
const bodyElement = document.querySelector('#todo-body')

const dateElement = document.querySelector('#last-edited')


let todos = getSavedTodos()

let todo = todos.find((todo) => todo.id === todoId)

if (!todo) {
    location.assign('/index.html')
}

titleElement.value = todo.title
bodyElement.value = todo.body
dateElement.textContent = lastEditedMessage(todo.updatedAt)

titleElement.addEventListener('input', (e) => {
    todo.title = e.target.value
    todo.updatedAt = moment().valueOf()
    dateElement.textContent = lastEditedMessage(todo.updatedAt)
    SaveTodos(todos)
})

bodyElement.addEventListener('input', (e) => {
    todo.body = e.target.value
    todo.updatedAt = moment().valueOf()
    dateElement.textContent = lastEditedMessage(todo.updatedAt)
    SaveTodos(todos)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue)
        todo = todos.find((todo) => todo.id === todoId)
    }

    if (!todo) {
        location.assign('/index.html')
    }

    titleElement.value = todo.title
    bodyElement.value = todo.body
    dateElement.textContent = lastEditedMessage(todo.updatedAt)
})