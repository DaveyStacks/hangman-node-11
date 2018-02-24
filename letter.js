const Letter = function (char) {
    // let self = this;
    this.char = char;
    this.beenGuessed = false;

    if (this.char == " ") {
        this.beenGuessed = true;
    }

    this.toString = function () {
        if (this.beenGuessed) {
            return this.char;
        }
        else if (this.char == " ") {
            return " ";
        }
        else {
            return "-";
        }
    }
    this.letterCheck = function (c) {
        if (c.toLowerCase() === this.char.toLowerCase()) {
            this.beenGuessed = true;
        }
    }
}

module.exports = Letter;