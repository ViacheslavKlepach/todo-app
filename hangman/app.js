const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const game1 = new Hangman('White cat', 3)

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.remainingGuesses)
    puzzleEl.textContent = game1.puzzle
    statusEl.textContent = game1.getMessage(game1)
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`)
})