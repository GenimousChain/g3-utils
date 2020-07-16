const assert = require('assert');
const G3Utils = require('../../src/test/index');


describe('promisify.test.js', () => {
    it('should return a promise', () => {
        const ret = G3Utils.promisify('foobar');
        assert.ok(ret instanceof Promise);
    });
    it('should not crash when undefined given', () => {
        const ret = G3Utils.promisify(undefined);
        assert.ok(ret instanceof Promise);
    });
});
