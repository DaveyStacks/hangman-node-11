
var letter = require('./letter.js');
var word = require('./word.js')


myLetter = new letter('a')
console.log(myLetter);
console.log(myLetter.letter);
var myWord = new word('sergio');
console.log(myWord);
for (var i = 0; i < myWord.word.length; i++) {
    console.log(myWord.letts[i].letter);
}