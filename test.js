require('./stringly');

var assert = require('assert');

describe('stringly', function () {
    it('Make string with format', function () {
        assert.equal('%s is %s'.format('stringly', 'fun'), 'stringly is fun');
    });

    it('Make string with too few args', function () {
        assert.equal('%s is %s'.format('stringly'), 'stringly is %s');
    });

    it('Make string with too many args', function () {
        assert.equal('%s is %s'.format('stringly', 'fun', 'too'),
            'stringly is fun too');
    });
});
