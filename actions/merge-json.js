'use strict';

var _ = require('lodash');

var DEFAULT_INDENTATION = 2;

module.exports = function(path, contents, replacer, space) {
    assert(
        typeof space === 'number' || typeof space === 'undefined'
        , "Argument 'space' must be typeof number"
    );
    assert(
        typeof contents === 'object' || typeof contents === 'string'
        , "Argument 'contents' must either be typeof object or string"
    );

    if (typeof space === 'undefined') {
        space = DEFAULT_INDENTATION;
    }
    if (typeof contents === 'string') {
        contents = JSON.parse(contents);
    }

    var dest = this.readJSON(path, {});
    var res = _.merge(dest, contents);
    var jsonStr = JSON.stringify(res, replacer || null, space);

    return this.write(path, jsonStr);
};
