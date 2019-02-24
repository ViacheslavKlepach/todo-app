console.log('Yo')

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

//Add an element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function (todo) {
        if (!todo.completed) {
        const newParagraph = document.createElement('p')
        newParagraph.textContent = todo.text
        document.querySelector('#todos').appendChild(newParagraph)
        }
    });
}

renderTodos(todos, filters)

document.querySelector('button#add-todo').addEventListener('click', function(e){
    e.target.textContent = 'Added!'
})

document.querySelector('input#new-todo-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})