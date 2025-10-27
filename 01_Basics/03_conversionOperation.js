let score = "100";

console.log(typeof score); // string

let valueInNumber = Number(score); // Convert string to number

console.log(typeof valueInNumber); // number

console.log(valueInNumber); // 100

// 333 to number is 333
// 33.33 to number is 33.33
// "Alok" to number is NaN
// true to number is 1
// false to number is 0
// null to number is 0
// undefined to number is NaN
// 33abc to number is NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert number to boolean

console.log(typeof booleanIsLoggedIn); // boolean

console.log(booleanIsLoggedIn); // true

// 1 to boolean is true
// 0 to boolean is false
// "Alok" to boolean is true
// "" to boolean is false
// null to boolean is false
// undefined to boolean is false
// NaN to boolean is false

let someNumber = 33;

let stringNumber = String(someNumber); // Convert number to string

console.log(typeof stringNumber); // string

console.log(stringNumber); // "33"

// 333 to string is "333"
// 33.33 to string is "33.33"
// true to string is "true"
// false to string is "false"
// null to string is "null"
// undefined to string is "undefined"   
// NaN to string is "NaN"   

// Note: JavaScript also does type coercion automatically in certain situations, such as during comparisons or arithmetic operations involving mixed data types. However, it's generally a good practice to perform explicit conversions to avoid unexpected behavior.

//********************** Operation ************************//

let value = 100;
let negValue = -value; // Unary negation operator to convert positive to negative

console.log(negValue); // -100

let str = "alok";
let str2 = " is a good boy.";

let fullStr = str + str2; // Concatenation operator to combine strings

console.log(fullStr); // "alok is a good boy."

console.log("5" + 3); // "53" (number 3 is converted to string and concatenated)
console.log("5" - 3); // 2 (string "5" is converted to number and subtraction is performed)
console.log("5" * "2"); // 10 (both strings are converted to numbers and multiplication is performed)
console.log("10" / "2"); // 5 (both strings are converted to numbers and division is performed)
console.log("10" / "abc"); // NaN (string "abc" cannot be converted to number)
console.log(+"5"); // 5 (unary plus operator converts string "5" to number 5)
console.log(+"abc"); // NaN (string "abc" cannot be converted to number)
// In summary, JavaScript provides several ways to convert data types explicitly using functions like Number(), String(), and Boolean(). Additionally, certain operators can trigger implicit type conversions during operations.

console.log(true); // true
console.log(+true); // 1
console.log(false); // false
console.log(+false); // 0   
console.log(!true); // false
console.log(!false); // true    
console.log(!!true); // true
console.log(!!false); // false
console.log(true + true); // 2

let num1, num2, num3;

num1 = num2 = num3 = 25; // Chained assignment

console.log(num1, num2, num3); // 25 25 25

let gameCounter = 100;

gameCounter++; // Increment by 1

console.log(gameCounter); // 101

gameCounter--; // Decrement by 1

console.log(gameCounter); // 100

gameCounter += 50; // Add 50

console.log(gameCounter); // 150

gameCounter -= 30; // Subtract 30

console.log(gameCounter); // 120

gameCounter *= 2; // Multiply by 2

console.log(gameCounter); // 240

gameCounter /= 4; // Divide by 4

console.log(gameCounter); // 60

gameCounter %= 7; // Modulus 7

console.log(gameCounter); // 4
gameCounter **= 3; // Exponentiation (power of 3)

console.log(gameCounter); // 64
// These operations demonstrate various ways to manipulate and convert data types in JavaScript.

// Note: Be cautious when using implicit type conversions, as they can sometimes lead to unexpected results. It's often better to use explicit conversions for clarity and maintainability of your code.

// Summary of Conversion Methods:
// 1. Number(value): Converts value to a number.
// 2. String(value): Converts value to a string.
// 3. Boolean(value): Converts value to a boolean.
// 4. Unary plus (+value): Converts value to a number.
// 5. Unary negation (-value): Converts value to a number and negates it.
// 6. Concatenation (+ operator with strings): Converts numbers to strings and concatenates them.
// 7. Arithmetic operators (-, *, /): Convert strings to numbers for calculations.
// Always test and verify conversions to ensure they behave as expected in your specific use case.  

// Summary of Common Operators for Conversion:
// 1. Unary Plus (+): Converts a value to a number.
// 2. Unary Negation (-): Converts a value to a number and negates it.
// 3. Concatenation (+ with strings): Converts numbers to strings and concatenates them.
// 4. Arithmetic Operators (-, *, /): Convert strings to numbers for calculations.
// 5. Logical NOT (!): Converts a value to boolean and negates it.
// 6. Double Logical NOT (!!): Converts a value to boolean.
// Always test and verify conversions to ensure they behave as expected in your specific use case.

// Note: Be cautious when using implicit type conversions, as they can sometimes lead to unexpected results. It's often better to use explicit conversions for clarity and maintainability of your code.

