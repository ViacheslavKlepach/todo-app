const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
let game1

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  statusEl.textContent = game1.getMessage(game1)
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCountry('US').then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//   console.log(location)
//   console.log(`City is ${location.city} and country is ${location.country}`)
// }).catch((error) => {
//   console.log(`Error: ${error}`)
// })