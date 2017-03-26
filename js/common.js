'use strict';

function occurrences(collection, item, onMatch) {
    let result = [],
        id     = -1;
    while ((id = collection.indexOf(item, id + 1)) !== -1) {
        result.push(id);
        Control.toWin++ ;
        (typeof onMatch === 'function') && onMatch(id, item);
    }
    return result;
}

if (typeof process !== 'undefined') {
    global.occurrences = occurrences;
}


function randomWord()
{
       const word = Dictionary[ Math.floor( Math.random() * ( Dictionary.length - 1 ) ) ] ;
       return word ;
}
