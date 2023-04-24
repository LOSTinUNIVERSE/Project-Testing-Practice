import { capitalize, reverse, calculator } from './index'

// console.log(capitalize);
test('1st letter should be capital', () => {
    expect(capitalize('abc')).toBe('Abc')
})

test('should be reversed', () => {
    expect(reverse('abc')).toBe('cba')
})
test('add a to b', () => {
    expect(calculator.add(1, 1)).toBe(2)
})
test('take b from a ', () => {
    expect(calculator.subtrack(4, 2)).toBe(2)
})
test('multiply a to b', () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})
test('divide a by b', () => {
    expect(calculator.divide(4, 4)).toBe(1)
})
