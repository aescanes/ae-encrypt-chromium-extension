const { hex_rmd160 } = require('../scripts/ripemd160-min.js');

describe('RMD160 Functions', () => {
    test('hex_rmd160 should hash the input string correctly', () => {
        const inputString = 'abc';
        const expectedHash = '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc';

        const result = hex_rmd160(inputString);
        expect(result).toEqual(expectedHash);
    });
});
