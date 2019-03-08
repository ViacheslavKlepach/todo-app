const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: false
}]

//initial filter pattern
const filters = {
    searchText: '',
    hideCompleted: false
}

//filters and renders todos based on the filter pattern
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
            const newParagraph = document.createElement('p')
            newParagraph.textContent = todo.text
            document.querySelector('#todos').appendChild(newParagraph)
    });
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
        text: e.target.elements.text.value,
    completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

//take value(true/false) of hide-completed checkbox
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})