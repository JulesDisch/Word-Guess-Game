var bands = ["nirvana", "soundgarden", "garbage", "sublime", "oasis", "everclear"];
var band;
const maxTries = 15;
var lettersGuessed = [];
var blanks = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 0;
var finishedWord = false;

function newGame() {
    guessesRemaining = maxTries;
    band = Math.floor(Math.random() * bands.length);
    blanks = [];
    lettersGuessed = [];
    for (var i = 0; i < bands[band].length; i++) {
        blanks.push("_");
    }
    updateDisplay();
};

function updateDisplay() {
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var blanksText = "";
    for (var i=0; i < blanks.length; i++) {blanksText += blanks[i];}
    blanksText = document.getElementById("blanks-text");
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    // blankText.textContent = blank;
};

function evaluateLetter (letter) {
    var letterPostions = [];
    for (var i = 0; i < bands[band].length; i++) {
        if(bands[band][i] === letter) {
            letterPostions.push(i);
        }
    }
    if (letterPositions.length <=0){
        guessesRemaining--;
    } else {
        for(var i = 0; i < letterPositions.length; i++) {
            band[letterPositions[i]] = letter;
        }
    }
}; 
   function checkWin() {
       if (blanks.indexOf("_") === -1) {
        wins++;
        finishedWord = true;
   } 
};

function checkLoss ()
{
    if (guessesRemaining <=0) {
     losses++;
     finishedWord = true;   
    }
}
function guessLetter (letter) {
    if (guessesRemaining > 0) {
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateLetter(letter);
        }
    }
};


    



var lettersGuessed = [];
// for (var k = 0; k < 15; k++) {
//     lettersGuessed[k] = "";}

var letterGuessed = lettersGuessed.join(" ");

var directionsText = document.getElementById("directions-text");
console.log(directionsText);
var userChoiceText = document.getElementById("userchoice-text");
console.log(userChoiceText);

console.log(bandText);

console.log(lossesText);

console.log(blankText);
console.log(band.charAt(i));
var guessesRemainingText = document.getElementById("guessesRemaining-text");
console.log(guessesRemaining);
var lettersGuessedText = document.getElementById("lettersGuessed-text");
lettersGuessedText.textContent = "Letters already guessed: " + lettersGuessed;
console.log(lettersGuessed);
guessesRemainingText.textContent = "Number of guesses remaining: " + guessesRemaining;


var remainingLetters = band.length;
console.log(remainingLetters);
console.log(blank.charAt(0))
document.onkeyup = function (event) {
    while (remainingLetters > 0 && guessesRemaining > 0) {
        //     // //      // Determines which key was pressed.
        var letterGuess = event.key;
        guessesRemaining = maxTries;
        if (letterGuess === null) {
            break;
        } else if (letterGuess.length !== 1) {
            alert("don't do that");
        } else {
            for (var j = 0; j < band.length; j++) {
                if (band[j] === letterGuess) {
                    blanks[j] = letterGuess;
                    remainingLetters--;
                    // alert("you did it")
                    // console.log(blanks[j]); console.log(blank);
                    // } else if (band[j] !== letterGuess) {
                    //     letterGuess = lettersGuessed;
                    //     guessesRemaining--;
                    // }
                }
                if (band[j] !== letterGuess) {
                    ;
                }
            }
            // else {letterGuess = lettersGuessed;
            // }
            //     blankText.textContent = blanks[j] + blank;
            lettersGuessed.push(letterGuess);
            lettersGuessedText.textContent = "Letters already guessed: " + lettersGuessed;
            alert(blanks.join(" "));
            alert(lettersGuessed);
        }
    }
    alert(blanks.join(" "));
    alert("yay!")
}

        //  var computerGuess = band.charAt(i);
        //  console.log(letterGuess) ;
        //  console.log(band.charAt(i));
        //  if (letterGuess === band.charAt(i)) {alert("you got one!")}
        //  var letterChange = {
        //      letter: "",
        //      charAt (j)}

        //      var blanks = [];
        //      for (var i = 0; i < band.length; i++) {
        //          blanks[i] = "_"; 
        //          // if (remainingLetters > 0) {    
        //          //     blanks.join(" ")};
        //      };

        //  for (var j = 0; j < band.length; j++) 
        //  console.log(j);{ 
        //      if (letterGuess === band[j]) {alert("you got one!")}
            //  char = band.charAt(j);


            //  if (band.charAt(0) === letterGuess) {console.log(blank.charAt(0)); letterChange = letterGuess} if (band.charAt(1) === letterGuess) {blanks.charAt(1) = letterGuess} if(band.charAt(2) === letterGuess) {blanks.charAt(2) = letterGuess} if (band.charAt(3) === letterGuess) {blanks.charAt(3) = letterGuess} if (band.charAt(4) === letterGuess) {blanks.charAt(4) = letterGuess} if (band.charAt(5) === letterGuess) {blanks.charAt(5) = letterGuess} if(band.charAt(6) === letterGuess) {blanks.charAt(6) = letterGuess} if (band.charAt(7) === letterGuess) {blanks.charAt(7) = letterGuess} if (band.charAt(8) === letterGuess) {blanks.charAt(8) = letterGuess} if (band.charAt(9) === letterGuess) {blanks.charAt(9) = letterGuess} if (band.charAt(10) === letterGuess) {blanks.charAt(10) = letterGuess} if (band.charAt(11) === letterGuess) {blanks.charAt(11) = letterGuess} if(band.charAt(12) === letterGuess)
            //  {blanks.charAt(12) = letterGuess} if (band.charAt(13) === letterGuess)
            //  {blanks.charAt(13) = letterGuess} if (band.charAt(14) === letterGuess)
            //  {blanks.charAt(14) = letterGuess} if (band.charAt(15) === letterGuess) {blanks.charAt(15) = letterGuess}  
            //  { 
            //         remainingLetters--;

            //       }


//                 guessesRemainingText.textContent ="Number of guesses remaining: " + guessesRemaining;



//                 winsText.textContent = "wins: " + wins;
//                 lossesText.textContent = "losses: " + losses;
//         }



// function newFunction(j, letterGuess) {
//     console.log(band.charAt(j));
//     console.log(blanks[j]);
//     console.log(band[j]);
//     console.log(letterGuess);
// }
//             }
//         } 
//     }






//    var band = bands[Math.floor(Math.random() * bands.length)];



// //   var remainingLetters = band.length;
// //   while (remainingLetters > 0) {
// //     // Show the player their progress 

// //     alert(answerArray.join(" "));

// //     // Get a guess from the player

// //     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
// //     if (guess === null) {
// //     // Exit the game loop
// //     break;
// //     } else if (guess.length !== 1) {
// //     alert("Please enter a single letter.");
// //     } else {
// //     // Update the game state with the guess

// //     for (var j = 0; j < word.length; j++) {
// //       if (word[j] === guess) {
// //         answerArray[j] = guess; remainingLetters--;
// //       }
// //     }
// //     }

// //     // The end of the game loop
// //     }

// //     // Show the answer and congratulate the player

// //     alert(answerArray.join(" "));
// //     alert("Good job! The answer was " + word);

// //     // Write your functions here

// //     var word = pickWord();
// //     var answerArray = setupAnswerArray(word);
// //     var remainingLetters = word.length;
// //     var pickWord = function () {
// //     // Return a random word
// //     };

// //     var setupAnswerArray = function (word) {
// //     // Return the answer array
// //     };
// //     var showPlayerProgress = functin (answerArray)
// //     {
// //     //Use alert to show the player their progress
// //     };

// //     var getGuess = function () {
// //     // Use prompt to get a guess
// //     };

// //     var updateGameState = function (guess, word, answerArray) {
// //     // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
// //     };

// //     var showAnswerAndCongratulatePlayer = function (answerArray) {
// //     // Use alert to show the answer and congratulate the player
// //     };
// //     while (remainingLetters > 0) {
// //     showPlayerProgress(answerArray);
// //     var guess = getGuess();
// //     if (guess === null) {
// //     break;
// //     } else if (guess.length !== 1) {
// //     alert("Please enter a single letter.");
// //     } else {
// //     var correctGuesses = updateGameState(guess, word, answerArray);
// //     remainingLetters -= correctGuesses;
// //     }
// //     }

// //     showAnswerAndCongratulatePlayer(answerArray);

// //    // This function is run whenever the user presses a key.
//    document.onkeyup = function(event) {

// //      // Determines which key was pressed.
//      var letterGuess = event.key;

// //      // Randomly chooses a choice from the options array. This is the Computer's guess.
//       var band = bands[Math.floor(Math.random() * bands.length)];

// //      // Reworked our code from last step to use "else if" instead of lots of if statements.

// //      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
// //      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

// //        if ((userGuess === "r" && computerGuess === "s") ||
// //          (userGuess === "s" && computerGuess === "p") || 
// //          (userGuess === "p" && computerGuess === "r")) {
// //          wins++;
// //        } else if (userGuess === computerGuess) {
// //          ties++;
// //        } else {
// //          losses++;
// //        }

// //        // Hide the directions
// //        directionsText.textContent = "";

// //        // Display the user and computer guesses, and wins/losses/ties.
// //        userChoiceText.textContent = "You chose: " + userGuess;
// //        computerChoiceText.textContent = "The computer chose: " + computerGuess;
// //        winsText.textContent = "wins: " + wins;
// //        lossesText.textContent = "losses: " + losses;
// //        tiesText.textContent = "ties: " + ties;
// //      }
// //    };


//    // Create an array of words
//    var bands = ["Third Eye Blind", "Counting Crows", "Pearl Jam", "Goo Goo Dolls", "Oasis", "Blind Melon"];
//     // Pick a random word
//     var band = bands[Math.floor(Math.random() * bands.length)];
//     // Set up the answer array
//     var answerArray = [];
//     for (var i = 0; i < band.length; i++) {
//     answerArray[i] = "_";
//     }
//     var remainingLetters = band.length;
//     // The game loop
//     while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//     // Exit the game loop
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     for (var j = 0; j < band.length; j++) {
//     if (band[j] === guess) {
//     answerArray[j] = guess;
//     remainingLetters--;
//     }
//     }
//     }

//     // The end of the game loop
//     }
//     // Show the answer and congratulate the player
//     alert(answerArray.join(" "));
//     alert("Good job! The answer was " + band)