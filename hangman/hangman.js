class Hangman {
    constructor(word,remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            const isUnique = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
            const isGoodGuess = this.word.includes(guess)
        
            if (isUnique && isGoodGuess) {
                this.guessedLetters.push(guess)
            }
        
            if (isUnique && isBadGuess) {
                this.remainingGuesses--
            }
        }
    }

    get puzzle() {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            }else{
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    getMessage(game) {
        let message = ''
        let puzzle = game.puzzle
        if (!puzzle.includes('*')) {
            message = `Great Work! You guessed the word.`
        } else if (game.remainingGuesses < 1) {
            message = `Nice try! the word was: ${this.word.join('')}`
        } else {
            message = `Guesses left: ${game.remainingGuesses}`
        }
        return message
    }
}