import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from './index'

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
function checkCaesar() {
    test('show next letter', () => {
        expect(caesarCipher('aa')).toBe('bb')
    })
    test('if z then a', () => {
        expect(caesarCipher('zz')).toBe('aa')
    })
    test('keep case', () => {
        expect(caesarCipher('ABab')).toBe('BCbc')
    })
    test('check punctuation', () => {
        expect(caesarCipher('AB.ab')).toBe('BC/bc')
    })
}
checkCaesar()
test('return object', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        'average': 4,
        'min': 1,
        'max': 8,
        'length': 6,
    })
})
