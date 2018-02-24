const Letter = require('./letter');


const Word = function (word) {
    this.letters = [];
    word.split('').forEach(e => {
        let newLetter = new Letter(e);
        this.letters.push(newLetter);
    });

    this.toString = function () {
        let display = '\n' + '';
        this.letters.forEach(e => {
            display += e.toString() + " ";
        });
        return display;
    }

    this.checkLetter = function (c) {
        this.letters.forEach(e => {
            e.letterCheck(c);
        });
    }
}

module.exports = Word;