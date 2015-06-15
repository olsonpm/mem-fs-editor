'use strict';

var DEFAULT_INDENTATION = 2;

module.exports = function(path, contents, replacer, space) {
    assert(
        typeof space === 'number' || typeof space === 'undefined'
        , "Argument 'space' must be typeof number"
    );
    if (typeof space === 'undefined') {
        space = DEFAULT_INDENTATION;
    }

    var jsonStr = JSON.stringify(contents, replacer || null, space);

    return this.write(path, jsonStr);
};
