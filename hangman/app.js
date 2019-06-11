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

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

getCountry('US', (error, country) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Country name: ${country.name}`)
  }
})