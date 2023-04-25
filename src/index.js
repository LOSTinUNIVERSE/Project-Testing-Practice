export function capitalize(string) {
    let firstLetter = string.charAt(0)
    firstLetter = firstLetter.toUpperCase()
    const theRestOfWord = string.slice(1)
    const capitalized = firstLetter + theRestOfWord
    return capitalized
}
export function reverse(string) {
    string = string.split('')
    string = string.reverse()
    string = string.join('')
    console.log(string);
    return string
}
export const calculator = {
    add(a, b) {
        return a + b
    },
    subtrack(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    }
}
export function caesarCipher(string) {
    string = string.toLowerCase()
    string = Array.from(string)
    //! at this point we deleted type module from package json so webpack works fine 
    let indexLike = 0
    string.forEach(item => {
        const numbers = item.charCodeAt() - 64;
        item = String.fromCharCode(65 + numbers)
        if (item == '{') item = 'a'
        if (item != '!') string[indexLike] = item
        indexLike++
    });
    string = string.join('')
    return string
}