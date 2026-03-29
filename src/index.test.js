import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index.js"

test("Capitalize", () => {
    expect(capitalize("nyoho")).toBe("Nyoho");
});

test("Reverse", () => {
    expect(reverseString("steel ball run")).toBe("nur llab leets");
});

test("Calculator addition", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("Calculator subtraction", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test("Calculator division", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});

test("Calculator throws error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Dividing by zero lol");
});

test("Calculator multiplication", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});

test("Shift chars", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Shift chars with case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Shift chars with punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4, 
            min: 1, 
            max: 8, 
            length: 6
        }
    );
});

