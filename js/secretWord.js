'use strict';

function SecretWord(word) {
    this.revealedIds = [];
    this.revealedWord = '*'.repeat(word.length).split("");
    this.text = word;
    return new Proxy({}, {
        get: (function(target, propertyKey, receiver) {
            this.revealedIds.forEach(function(id) {
                this.revealedWord[id] = word[id];
            }, this);
            if (propertyKey === 'toString') {
                return this.revealedWord.join.bind(this.revealedWord, "");
            }
            if (propertyKey === 'text') return this.revealedWord.join("");

            if (propertyKey in SecretWord.prototype) {
                return SecretWord.prototype[propertyKey].bind(this);
            }

            if (propertyKey in String.prototype) {
                return String.prototype[propertyKey].bind(this.revealedWord.join(""));
            }

            if (propertyKey in Array.prototype) {
                return Array.prototype[propertyKey].bind(this.revealedWord.join(""));
            }

            return this.revealedWord[propertyKey];
        }).bind(this)
    });
}
SecretWord.prototype = /*Object.assign(String.prototype,*/ {
    reveal: function(pos) {
        if (pos instanceof Array) {
            return pos.map(this.reveal, this);
        }
        this.revealedIds.push(pos);
        return this.text[pos];
    },
    occurrences: function(letter, fn) {
        return occurrences(this.text, letter, fn);
    }
};