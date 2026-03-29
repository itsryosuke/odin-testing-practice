export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split("").reverse().join("")
}

const calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    divide(a, b) {
        if (b === 0) {
            throw new Error("Dividing by zero lol")
        }
        return a / b
    },
    multiply(a, b) {
        return a * b
    }
}

function caesarCipher(string, shift) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    function encrypt(char) {
        if (alphabet.includes(char.toLowerCase())) {
            const position = alphabet.indexOf(char.toLowerCase());
            const newPosition = (position + shift) % 26;
            if (char === char.toUpperCase()) {
                return alphabet[newPosition].toUpperCase()
            }
            else { return alphabet[newPosition] }
        }
        else { return char }
    }

    const result = string.split("").map(char => encrypt(char)).join("");

    return result

}

function analyzeArray(array) {
    const object = {};
    object.average = array.reduce((a, b) => a + b) / array.length;
    object.min = Math.min(...array);
    object.max = Math.max(...array);
    object.length = array.length;

    return object
}