export default {
    testEnvironment: "jsdom",
    moduleFileExtensions: ['js'],
    testTimeout: 1,
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: ['text'],
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    testMatch: ["**/*.test.js"]
    /* default ["clover", "json", "lcov", "text"]*/
}