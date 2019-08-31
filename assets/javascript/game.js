var bands = ["nirvana", "soundgarden", "garbage", "sublime", "oasis", "everclear"];
var band;
var GuessedArray;
var blanks;
var wins = 0;
var losses = 0;
var guesses = 0;
var finishedWord = false;

// what we need for page load
function newGame() {
    band = bands[Math.floor(Math.random() * bands.length)];
    blanks = [];
    for (var i = 0; i < band.length; i++) { blanks.push("_ "); }
    GuessedArray = [];
    updateGuessCount();
    updateDisplay();
};
function updateGuessCount() {
    guesses = band.length + 5;
    guessesRemaining = guesses;
};
// where updates take place
function updateDisplay() {
    var blanksText = " ";
    for (var i = 0; i < blanks.length; i++) { blanksText += blanks[i] };
    document.getElementById("blanks-text").textContent = blanksText;
    var GuessedArrayText = document.getElementById("GuessedArray-text");
    GuessedArrayText.textContent = "Letters already guessed: " + GuessedArray;
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "Guesses remaining: " + guesses;
};
function evaluateLetter(letter) {
    var letterPositions = [];
    for (var i = 0; i < band.length; i++) {
        if (band[i] === letter) {
            letterPositions.push(i);
        }
    }
    if (letterPositions.length <= 0) {
        guessLetter(letter);
    } else {
        for (var i = 0; i < letterPositions.length; i++) {
            blanks[letterPositions[i]] = letter;
        }
    }
};
function checkWin() {
    if (blanks.indexOf("_ ") === -1) {
        setTimeout(function () {
            alert("You win!");
            wins++;
            finishedWord = true;
            playAgain();
        }, 500);
    }
};
function checkLoss() {
    if (guesses <= 0) {
        setTimeout(function () {
            alert("You lose!");
            losses++;
            finishedWord = true;
            playAgain();
        }, 500);
    }
};
// asks player if they want a new word
function playAgain() {
    var restart = confirm("Would you like to play again?");
    if (restart == true) {
        newGame();
    } else {
    }
}
// creates the guessed letters section
function guessLetter(letter) {
    if (guessesRemaining > 0) {
        if (GuessedArray.indexOf(" " + letter) === -1) {
            GuessedArray.push(" " + letter);
            guesses--;
            evaluateLetter(letter);
        }
    }
}
// gets everything rolling
newGame();
document.onkeyup = function (event) {
    if (event.keyCode >= 49 && event.keyCode <= 90) {
        console.log(blanks);
        evaluateLetter(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
}