"use strict";
function getRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function numberOfguesses(count) {
    console.log("Number of guesses: " + count);
}
function game(guessedNumber, countGuesses) {
    let count = 0;
    let randomNumber = 0;
    while (guessedNumber !== randomNumber) {
        randomNumber = getRandomnumber(1, 50);
        count++;
        console.log("Wrong guess, your number was: " + guessedNumber + ". The random number was: " + randomNumber + ".");
        countGuesses(count);
        console.log("Guess again ;)\n");
    }
    console.log("!!! You win !!!");
    console.log("Your number was: " + guessedNumber + ". Which was the same number as: " + randomNumber + ". Which was the random number!");
    countGuesses(count);
}
game(3, numberOfguesses);
