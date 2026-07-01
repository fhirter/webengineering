export default {
    testEnvironment: "jsdom",
    moduleFileExtensions: ['js'],
    testTimeout: 1,
    collectCoverage: true,
    coverageReporters: ['text'],
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    collectCoverageFrom: [
        "!**/node_modules/**",
        "!jest.config.js"
    ],
    testMatch: ["**/*.test.js"]
    /* default ["clover", "json", "lcov", "text"]*/
}
