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
function caesarCipher(string) {
    string = Array.from(string)
    // string = string.split('')
    // at this point we deleted type module from package json so webpack works fine 
    console.log(string);
    string.forEach(item => {
        const index = string.indexOf(item)
        console.log(index);
        // const numbers = item.charCodeAt() - 64;
        // item = String.fromCharCode(65 + numbers)
        // string[index] = item
    });
    // return string
}
const result = caesarCipher('bb cc dd')
// console.log(result);
