const { hex_sha512 } = require('../scripts/sha512-min.js');

describe('SHA512 Functions', () => {
    test('hex_sha512 should hash the input string correctly', () => {
        const inputString = 'abc';
        const expectedHash = 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f';

        const result = hex_sha512(inputString);
        expect(result).toEqual(expectedHash);
    });
});
