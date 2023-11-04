const { hex_sha256 } = require('../scripts/sha256-min.js');

describe('SHA256 Functions', () => {
    test('hex_sha256 should hash the input string correctly', () => {
        const inputString = 'abc';
        const expectedHash = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad';

        const result = hex_sha256(inputString);
        expect(result).toEqual(expectedHash);
    });
});
