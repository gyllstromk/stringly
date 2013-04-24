var util = require('util');

String.prototype.format = function () {
    return util.format.apply(null,
            [ this.toString() ].concat(Array.prototype.slice.call(arguments)));
};
