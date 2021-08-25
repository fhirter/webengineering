const sum = require('./generateNumbers');

test('generates random integer between 0 and 100', () => {
    for (let i = 0; i < 1000; i++) {
        let number = sum.randInt();
        expect(number).toBeGreaterThanOrEqual(0);
        expect(number).toBeLessThanOrEqual(100);
    }
});