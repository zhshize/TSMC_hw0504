const price = require('./price');

test('basic', () => {
    expect(price([])).toBe(0);
    expect(price([0])).toBe(8);
    expect(price([1])).toBe(8);
    expect(price([2])).toBe(8);
    expect(price([3])).toBe(8);
    expect(price([4])).toBe(8);
    expect(price([1, 1, 1])).toBe(8 * 3);
});
