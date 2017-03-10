'use strict';

if (typeof window === 'undefined') {
    require('../js/common.js');
    var expect = require('../bower_components/chai/chai').expect;
    var SecretWord = require('../js/secretWord.js');
}

describe("Secret Word", function() {

    const hideChar = '*';
    var s,
        word = "piriri",
        hiddenWord = hideChar.repeat(word.length).split("");
    beforeEach(function() {
        s = new SecretWord(word);
    });

    it("should proxy .toString() method", function() {
        expect(s.toString()).to.eql(hiddenWord.join(""));
    });

    it("should proxy [] operator", function() {
        expect(s[0]).to.eql(hideChar);
        expect(s[word.length - 1]).to.eql(hideChar);
        expect(s[word.length + 1]).to.eql(undefined);
    });

    it("should proxy string methods", function() {
        expect(s.charAt(0)).to.eql(hideChar);
        expect(s.split("")).to.eql(hiddenWord);
    });

    it("should proxy array methods", function() {
        expect(s.map(e => e)).to.eql(hiddenWord);
    });

    // WHY would I want these two???!
    it("should reveal one letter", function() {
        var revealed = s.reveal(1);
        expect(s[1]).to.eql(word[1]);
        expect(s.toString()).to.eql(hideChar+revealed+hideChar.repeat(word.length - 2));
    });

    it("should reveal array of letters", function() {
        var revealed = s.reveal([0, 1, 2]);
        expect(true);
    });

    // o right, to do this!
    it("should return occurrences", function() {
        var o = s.occurrences("i", s.reveal);
        expect(o).to.eql([1, 3, 5]);

        // they are revealed!!
        expect(s.indexOf("i")).to.eql(o[0]);
        expect(s.indexOf("i", 2)).to.eql(o[1]);
        expect(s.indexOf("i", 4)).to.eql(o[2]);
    });

    describe("Custom mask char", function() {
        it("should be set on constructor", function() {
            var    ss = new SecretWord("hideme", "x");
            expect(ss.toString()).to.eql("xxxxxx")
        })
    });

    it.skip("should not pass this test", function() {

        var s = new SecretWord("piriri");

        console.log(s.charAt(0));

        // all hidden
        console.log(s.toString());
        console.log(s[0]);

        // reveal one char position
        s.reveal(0);
        console.log(s[0]);

        // reveal from array of char positions
        s.reveal(s.occurrences("r"));
        // given occurrences 2nd arg callback, also works both ways! :)
        s.occurrences("i", s.reveal);

        console.log(s.toString());

        console.log(s.charAt(0));

        // console.log(s.occurrences("i"));

        // but all the other methods may crack the "security"
        // slice, split, etc
        // console.log(s.split(""));

        expect(false).to.eql(true);
    });
});
