const nameIt = require('./index')

test('a -b = 0', () => {
    expect(nameIt(1, -1)).toBe(0)
})
