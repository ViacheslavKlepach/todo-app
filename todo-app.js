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

// todos.forEach(function (todo) {
//     if (!todo.completed) {
//     const newParagraph = document.createElement('p')
//     newParagraph.textContent = todo.text
//     document.querySelector('body').appendChild(newParagraph)
//     }
// });

document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'Clicked!'
})