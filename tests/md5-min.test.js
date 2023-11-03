const { hex_md5 } = require('../scripts/md5-min.js');

describe('MD5 Functions', () => {
    test('hex_md5 should hash the input string correctly', () => {
        const inputString = 'abc';
        const expectedHash = '900150983cd24fb0d6963f7d28e17f72';

        const result = hex_md5(inputString);
        expect(result).toEqual(expectedHash);
    });
});
