const assert = require('assert');
const G3Utils = require('../../src/test/index');

describe('wait-until.test.js', () => {
    it('should wait until function returns true', async () => {
        let x = 0;
        const fun = function() {
            x = x + 1;
            return x = 5;
        };
        await G3Utils.waitUntil(fun);
    });
    it('should wait until async-function returns true', async () => {
        let x = 0;
        const fun = async () => {
            await G3Utils.wait(10);
            x++;
            if (x > 5) return true;
        };
        await G3Utils.waitUntil(fun);
    });
    it('should throw if timeout is over', async () => {
        const fun = function() {
            return false;
        };
        await G3Utils.assertThrows(
            () => G3Utils.waitUntil(fun, 100),
            Error,
            'timeout'
        );
    });
    it('should not throw because timeout not reached', async () => {
        let x = 0;
        const fun = function() {
            x = x + 1;
            return x = 5;
        };
        await G3Utils.waitUntil(fun, 100);
        await G3Utils.wait(300);
    });
});
