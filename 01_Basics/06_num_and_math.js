// ========================================
// JavaScript Numbers and Math Object Guide
// ========================================

/*
TOPICS COVERED:
1. Number Types and Creation
2. Number Methods
3. The Math Object
   - Constants
   - Basic Operations
   - Advanced Mathematical Functions
4. Memory Management
5. Practical Examples
*/

// 1. NUMBER TYPES AND CREATION
// -------------------------

// 1.1 Number Creation Methods
console.log("\n1. Number Creation:");
const primitiveNumber = 100;
const numberObject = new Number(5000);

console.table({
    "Primitive Type": typeof primitiveNumber,
    "Object Type": typeof numberObject
});

// 1.2 Number Methods
console.log("\n2. Number Methods:");
const price = 99.95;
console.table({
    "toString()": price.toString(),
    "toFixed(2)": price.toFixed(2),
    "toPrecision(4)": price.toPrecision(4),
    "toExponential()": price.toExponential()
});

// 2. THE MATH OBJECT
// ----------------

// 2.1 Mathematical Constants
console.log("\n3. Math Constants:");
console.table({
    "π (PI)": Math.PI,
    "e (Euler's number)": Math.E,
    "Square root of 2": Math.SQRT2,
    "Natural log of 2": Math.LN2,
    "Log base 10 of e": Math.LOG10E
});

// 2.2 Basic Mathematical Operations
console.log("\n4. Basic Math Operations:");

const numbers = [2, 3, -4, 5.6, 7.8];
console.table({
    "Round": Math.round(5.7),
    "Floor": Math.floor(5.7),
    "Ceil": Math.ceil(5.2),
    "Absolute": Math.abs(-5),
    "Maximum": Math.max(...numbers),
    "Minimum": Math.min(...numbers),
    "Power": Math.pow(2, 3),
    "Square Root": Math.sqrt(16)
});

// 2.3 Trigonometric Functions
console.log("\n5. Trigonometric Functions:");
console.table({
    "sin(π/2)": Math.sin(Math.PI/2),
    "cos(0)": Math.cos(0),
    "tan(π/4)": Math.tan(Math.PI/4),
    "asin(1)": Math.asin(1),
    "acos(1)": Math.acos(0),
    "atan(1)": Math.atan(1)
});

// 2.4 Logarithmic Functions
console.log("\n6. Logarithmic and Exponential Functions:");
console.table({
    "Natural Log (ln)": Math.log(Math.E),
    "Log base 10": Math.log10(100),
    "Log base 2": Math.log2(8),
    "Exponential (e^x)": Math.exp(1)
});

// 3. PRACTICAL EXAMPLES
// ------------------

// 3.1 Random Number Generation
console.log("\n7. Random Number Generation:");

// Random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.table({
    "Random 0-1": Math.random(),
    "Random 1-6 (dice)": getRandomInt(1, 6),
    "Random 1-100": getRandomInt(1, 100)
});

// 3.2 Financial Calculations
console.log("\n8. Financial Calculations:");

const amount = 99.99;
const tax = 0.075;
const total = amount * (1 + tax);

console.table({
    "Original Amount": amount,
    "With Tax": total,
    "Rounded": Math.round(total * 100) / 100,
    "Formatted": total.toFixed(2)
});

/* 
BEST PRACTICES:
--------------
1. Use Number methods for precise decimal calculations
2. Always use Math.floor() or Math.ceil() with Math.random()
3. Use toFixed() for financial calculations
4. Remember that JavaScript numbers are always 64-bit floating-point
5. Use parseInt() or parseFloat() for string to number conversion
6. Be careful with floating-point arithmetic (use libraries for precise calculations)
*/

// End of Numbers and Math Lecture


