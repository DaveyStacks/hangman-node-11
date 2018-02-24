const Letter = require('./letter');
const Word = require('./word');
const inquirer = require('inquirer');
const wordsAry = ['Ping', 'Titleist', 'Callaway', 'King Cobra', 'Taylor Made', 'Ben Hogan', 'Mizuno', 'Vice', 'Bettinardi', 'Cleveland', 'Bridgestone', 'Hogan', 'Nike', 'SLazenger', 'MacGregor'];
let gameWord = new Word(wordsAry[Math.floor(Math.random() * wordsAry.length)]);
const maxGuesses = 15;
let guessCount = 0;
const random = function (ary) {
    return ary[Math.floor(Math.random() * ary.length)];
}

const isSolved = function (w) {
    var isIt = true;
    w.letters.forEach(e => {
        if (!e.beenGuessed) {
            isIt = false;
        }
    });
    return isIt;
}

function checkLetter(foo) {
    gameWord.checkLetter(foo);
    console.log(gameWord.toString());

    guessCount++;

    if (isSolved(gameWord)) {
        console.log("--------------------------------------------------------------------------------");
        console.log("--------------------------------------------------------------------------------");
        console.log("\n IMPRESSIVE! YOU\'VE WON \n");
        console.log("--------------------------------------------------------------------------------");
        console.log("--------------------------------------------------------------------------------");
        startGame();

    }
    else if (guessCount >= maxGuesses) {
        console.log("--------------------------------------------------------------------------------");
        console.log("--------------------------------------------------------------------------------");
        console.log('\n THAT\'S TOO MANY GUESSES HOMIE!! \n');
        console.log("--------------------------------------------------------------------------------");
        console.log("--------------------------------------------------------------------------------");
        startGame();

    }
    else {
        console.log('\n C\'MON KEEP THE GUESSES COMING!! \n     ');
        askThem();
    }
}

function askThem() {
    inquirer.prompt({
        type: 'input',
        name: 'theLetter',
        message: "Please select a letter"
    }).then(answers => {
        checkLetter(answers.theLetter);
        console.log(` \n\n ${Math.floor(gameWord.toString().length / 2) - guessCount + 5} guesses left!!`);
    });
}

function startGame() {
    guessCount = 0;
    gameWord = new Word(wordsAry[Math.floor(Math.random() * wordsAry.length)]);
    startMessage();
    console.log(gameWord.toString());
    askThem();
}

function startMessage() {
    console.log('\n Welcome to Command Line Hangman!! \n\n Select a letter to begin! \n\nThe category is: Golf Companies \n\n REMEMBER YOU ONLY GET A FEW MORE GUESSES THAN THE LENGTH OF THE WORD!');
}


startGame();






































// let a = new Letter('a');
// console.log(a);
// a.letterCheck('b');
// console.log('' + a);
// a.letterCheck('b');
// console.log(`${ a }`);

// let b = new Word('Brent');
// console.log(b);
// b.checkLetter('b');
// console.log(b.toString());
