const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
const game1 = new Hangman('CAT', 3)



window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.remainingGuesses)
    puzzleEl.textContent = game1.getPuzzle()
    statusEl.textContent = game1.getMessage(game1)
})