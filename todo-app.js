const todos = getSavedTodos()

//initial filter pattern
const filters = {
    searchText: '',
    hideCompleted: false
}

//renders initial todos
renderTodos(todos, filters)

//updates filter pattern based on input
document.querySelector('input#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//take text from input and add new todo
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    //save to local storage
    SaveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

//take value(true/false) of hide-completed checkbox
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})