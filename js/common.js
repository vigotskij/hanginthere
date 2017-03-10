'use strict';

function occurrences(collection, item, onMatch) {
    let result = [],
        id     = -1;
    while ((id = collection.indexOf(item, id + 1)) !== -1) {
        result.push(id);
        (typeof onMatch === 'function') && onMatch(id, item);
    }
    return result;
}
