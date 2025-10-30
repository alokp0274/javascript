// ================================================
// JavaScript Type Conversions and Operations
// ================================================

/*
TOPICS COVERED:
1. Type Conversions
   - String to Number
   - Number to String
   - Value to Boolean
2. Operations
   - Arithmetic Operations
   - String Operations
   - Boolean Operations
3. Special Cases and Edge Cases
*/

// 1. TYPE CONVERSIONS
// -----------------

// 1.1 String to Number Conversion
console.log("\n1. String to Number Conversions:");
const strScore = "100";
console.log("Original:", strScore, "Type:", typeof strScore);
const numScore = Number(strScore);
console.log("Converted:", numScore, "Type:", typeof numScore);

// Common String to Number Conversions
console.log("\nString to Number Examples:");
console.table({
    "Number('333')": Number("333"),
    "Number('33.33')": Number("33.33"),
    "Number('Alok')": Number("Alok"),
    "Number('123abc')": Number("123abc"),
    "Number('')": Number(""),
    "Number(null)": Number(null),
    "Number(undefined)": Number(undefined)
});

// 1.2 Value to Boolean Conversion
console.log("\n2. Boolean Conversions:");
const booleanExamples = {
    "Boolean(1)": Boolean(1),
    "Boolean(0)": Boolean(0),
    "Boolean('Alok')": Boolean("Alok"),
    "Boolean('')": Boolean(""),
    "Boolean(null)": Boolean(null),
    "Boolean(undefined)": Boolean(undefined),
    "Boolean(NaN)": Boolean(NaN)
};
console.table(booleanExamples);

// 1.3 Number to String Conversion
console.log("\n3. String Conversions:");
const stringExamples = {
    "String(333)": String(333),
    "String(33.33)": String(33.33),
    "String(true)": String(true),
    "String(null)": String(null),
    "String(undefined)": String(undefined),
    "String(NaN)": String(NaN)
};
console.table(stringExamples);

// 2. OPERATIONS
// -----------

// 2.1 Basic Arithmetic
console.log("\n4. Basic Operations:");
let value = 100;
console.log("Original Value:", value);
console.log("Negation (-value):", -value);
console.log("Increment (value++):", value++);
console.log("After increment:", value);

// 2.2 String Operations
console.log("\n5. String Operations:");
const str1 = "Hello";
const str2 = "World";
console.log("Concatenation:", str1 + " " + str2);
console.log("Template Literal:", `${str1} ${str2}`);

// 2.3 Mixed Type Operations
console.log("\n6. Mixed Type Operations:");
console.log({
    "String + Number": "5" + 3,      // "53" (concatenation)
    "String - Number": "5" - 3,      // 2 (numeric operation)
    "String * String": "5" * "2",    // 10 (numeric operation)
    "String / String": "10" / "2",   // 5 (numeric operation)
    "Invalid Division": "10" / "abc", // NaN
    "Unary Plus String": +"5",       // 5 (number)
    "Unary Plus Text": +"abc"        // NaN
});

// 2.4 Boolean Operations
console.log("\n7. Boolean Operations:");
console.table({
    "true": true,
    "+true": +true,
    "!true": !true,
    "!!true": !!true,
    "false": false,
    "+false": +false,
    "!false": !false,
    "!!false": !!false,
    "true + true - false": true + true - false
});

/* 
IMPORTANT NOTES:
--------------
1. Always use explicit conversions when type conversion is needed
2. Be careful with automatic type coercion in operations
3. Number() can return NaN for invalid numeric strings
4. Boolean() converts falsy values (0, "", null, undefined, NaN) to false
5. String() can convert any value to a string representation
*/

// End of Type Conversions and Operations Lecture

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

// End of 03_conversionOperation.js
