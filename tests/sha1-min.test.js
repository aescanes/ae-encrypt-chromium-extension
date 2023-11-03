const { hex_sha1 } = require('../scripts/sha1-min.js');

describe('SHA1 Functions', () => {
    test('hex_sha1 should hash the input string correctly', () => {
        const inputString = 'abc';
        const expectedHash = 'a9993e364706816aba3e25717850c26c9cd0d89d';

        const result = hex_sha1(inputString);
        expect(result).toEqual(expectedHash);
    });
});
