'use strict'

// const people = [{name: 'Viacheslav',
// age: 28}, {
//     name: 'Bob',
//     age: 44
// }, {
//     name: 'Amy',
//     age: 33
// }]

// console.log(people)

// const person = people.find((person) => person.age === 28)

// console.log(person.name)

const team = ['Viacheslav', 'Bob', 'Oksana', 'Olga', 'Petro']

const teamSize = (team) => team.length

const showTeamSize = (team) => {
    return `Team size: ${team.length}`
}

const displayWarning = () => {
    return `Too many people in the team`
}

const message = teamSize(team) <= 4 ? showTeamSize(team) : displayWarning()

console.log(message)