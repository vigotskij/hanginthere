'use strict';

function occurrences(input, word, onMatch) {
    let result = [],
        idx = -1;
    while ((idx = word.indexOf(input, idx + 1)) !== -1) {
        result.push(idx);
        (typeof fn === 'function') && onMatch(idx, input);
    }
    return result;
}
