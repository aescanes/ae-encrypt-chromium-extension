// Import necessary functions from your popup.js file
const { base64ToBytes, bytesToBase64, hashingOrEncondingInputValue } = require('../popup/popup.js');

// Test hashingOrEncondingInputValue function
describe('hashingOrEncondingInputValue function', () => {
    const valueString = 'test-ae'
    const valueBase64 = 'dGVzdC1hZQ=='

    it('convert function with eb64', () => {
        expect(hashingOrEncondingInputValue('eb64', valueString)).toBe(valueBase64)
    })

    it('convert function with db64', () => {
        expect(hashingOrEncondingInputValue('db64', valueBase64)).toBe(valueString)
    })
});

// Test base64ToBytes function
describe('base64ToBytes function', () => {
    it('should convert base64 to Uint8Array', () => {
        const result = base64ToBytes('dGVzdC1hZQ==');
        const expectedResultValues = [
            116,
            101,
            115,
            116,
            45,
            97,
            101
        ]
        const uint8Array = new Uint8Array(expectedResultValues);

        // Expect the result to be a Uint8Array with the expected values
        expect(result).toStrictEqual(uint8Array);
    });
});

// Test bytesToBase64 function
describe('bytesToBase64 function', () => {
    it('should convert Uint8Array to base64', () => {
        const expectedResultValues = [
            116,
            101,
            115,
            116,
            45,
            97,
            101
        ]
        const result = bytesToBase64(new Uint8Array(expectedResultValues));

        // Expect the result to be the expected base64 string
        expect(result).toBe('dGVzdC1hZQ==');
    });
});
