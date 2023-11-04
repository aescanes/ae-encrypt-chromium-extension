/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./setupTests.js'],
};

module.exports = config;