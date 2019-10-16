var bands = ["nirvana", "soundgarden", "garbage", "sublime", "oasis", "everclear", "weezer", "tool", "bush",];
var band;
var bandImg;
var GuessedArray;
var blanks;
var wins = 0;
var losses = 0;
var guesses = 0;
var j = 0;
var finishedWord = false;

randomize();

function randomize() {
    bands.sort(function (a, b) { return 0.5 - Math.random() })
}

function newGame() {
    $("#start").hide();
    $("#over").hide();
    $("#over1").hide();
    this.band = bands[j];
    console.log(j)
    bandImg = $("<img src='assets/images/" + band + ".jpg" + "' alt='" + band + "'>");
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

function winModal() {
    if (j === 8) { gameOverModal() }
    else {
        setTimeout(function () {
            var winModal = document.getElementById("youWin");
            $("#band-image").append(bandImg);
            winModal.style.display = "block";
            j++
            wins++;
            newGame();
            var contBtn = document.getElementById("continue");
            contBtn.onclick = function () {
                winModal.style.display = "none";
                $("#band-image").empty();
                finishedWord = true;
            }

            window.onclick = function (event) {
                if (event.target === winModal) {
                    winModal.style.display = "none";
                    $("#band-image").empty();
                    finishedWord = true;
                }
            }

            window.onkeyup = function (event) {
                if ((event.keyCode === 13) || (event.keyCode === 32)) {
                    winModal.style.display = "none";
                    $("#band-image").empty();
                    finishedWord = true;
                }
            }
        }, 300);
    }
}

function loseModal() {
    if (j === 8) { gameOverModal() }
    else {
        setTimeout(function () {
            var loseModal = document.getElementById("youLose");
            $("#band-image2").append(bandImg);
            var contBtn = document.getElementById("cont");
            loseModal.style.display = "block";
            $("#answer").html("The answer was " + band);
            j++
            losses++;
            newGame();
            contBtn.onclick = function () {
                loseModal.style.display = "none";
                $("#band-image2").empty();
                finishedWord = true;
            }

            window.onclick = function (event) {
                if (event.target === loseModal) {
                    loseModal.style.display = "none";
                    $("#band-image2").empty();
                    finishedWord = true;
                }
            }

            window.onkeyup = function (event) {
                if ((event.keyCode === 13) || (event.keyCode === 32)) {
                    loseModal.style.display = "none";
                    $("#band-image2").empty();
                    finishedWord = true;
                }
            }
        }, 300);
    }
}

function gameOverModal() {
    setTimeout(function () {
        if (blanks.indexOf("_ ") === -1) {
            $("#winOrLose").text("You win!");
        }
        else if (guesses <= 0) {
            $("#winOrLose").text("You lose!");
            $("#answer2").html("The answer was " + band);
        }
        var overModal = document.getElementById("game-over");
        $("#band-image3").append(bandImg);
        var overBtn = document.getElementById("ok");
        var span = document.getElementsByClassName("close")[0];
        overModal.style.display = "block";
        overBtn.onclick = function () {
            overModal.style.display = "none";
            $("#currentWord-text").hide();
            $("#blanks-text").hide();
            $("#start").show();
            $("#GuessedArray-text").text("Final Score:");
            $("#start").on("click", run);
        }

        span.onclick = function () {
            overModal.style.display = "none";
            $("#currentWord-text").hide();
            $("#blanks-text").hide();
            $("#start").show();
            $("#GuessedArray-text").text("Final Score:");
            $("#start").on("click", run);
        }

        window.onclick = function (event) {
            if (event.target == overModal) {
                overModal.style.display = "none";
                $("#currentWord-text").hide();
                $("#blanks-text").hide();
                $("#start").show();
                $("#GuessedArray-text").text("Final Score:");
                $("#start").on("click", run);
            }
        }
    }, 300);
}


function run() {
    j = 0;
    wins = 0;
    losses = 0;
    guesses = 0;
    finishedWord = false;
    $("#currentWord-text").show();
    $("#blanks-text").show();
    $("#start").hide();
    randomize();
    newGame();
}

function checkWin() {
    if (blanks.indexOf("_ ") === -1) {
        winModal();
    }

};
function checkLoss() {
    if (guesses <= 0) {
        loseModal();
    }
};

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
        $("#Directions-text").hide();
        evaluateLetter(event.key.toLowerCase());
        updateDisplay();
        checkWin();
        checkLoss();
    }
}