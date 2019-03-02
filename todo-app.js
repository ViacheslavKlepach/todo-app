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

//Querry p and remove if contains 1
// const p = document.querySelectorAll('p')
// p.forEach(function (p) {
//     if (p.textContent.includes("1"))
//     p.remove()
// });

//initial filter pattern
const filters = {
    searchText: ''
}

//filters and renders todos based on the filter pattern
const renderTodos = function (todos, filters) {
    //filters todos based on the filter pattern
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    //clears initial todos
    document.querySelector('#todos').innerHTML = ''
    //renders filterred todos
    filteredTodos.forEach(function (todo) {
        if (!todo.completed) {
        const newParagraph = document.createElement('p')
        newParagraph.textContent = todo.text
        document.querySelector('#todos').appendChild(newParagraph)
        }
    });
}

//renders initial todos
renderTodos(todos, filters)

document.querySelector('button#add-todo').addEventListener('click', function(e){
    e.target.textContent = 'Added!'
})
//updates filter pattern based on input
document.querySelector('input#new-todo-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})