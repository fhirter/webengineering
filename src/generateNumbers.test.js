const sum = require('./generateNumbers');

test('generates random integer between 0 and 100', () => {
    let number = sum.randInt();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(100);
});