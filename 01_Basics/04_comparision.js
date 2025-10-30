// =============================================
// JavaScript Comparisons and Logical Operators
// =============================================

/*
TOPICS COVERED:
1. Comparison Operators
   - Basic Comparisons (>, <, >=, <=)
   - Equality Comparisons (==, ===)
   - Inequality Comparisons (!=, !==)
2. Special Value Comparisons
   - null comparisons
   - undefined comparisons
3. Logical Operators
   - AND (&&)
   - OR (||)
   - NOT (!)
4. Real-world Examples
*/

// 1. COMPARISON OPERATORS
// ---------------------

// 1.1 Basic Numeric Comparisons
console.log("\n1. Basic Numeric Comparisons:");
console.table({
    "3 > 2": 3 > 2,
    "3 < 2": 3 < 2,
    "3 >= 2": 3 >= 2,
    "3 <= 2": 3 <= 2
});

// 1.2 Equality Comparisons
console.log("\n2. Equality Comparisons:");
console.table({
    // Loose Equality (with type coercion)
    "3 == 3": 3 == 3,
    '3 == "3"': 3 == "3",
    // Strict Equality (no type coercion)
    "3 === 3": 3 === 3,
    '3 === "3"': 3 === "3"
});

// 1.3 Inequality Comparisons
console.log("\n3. Inequality Comparisons:");
console.table({
    // Loose Inequality
    "3 != 2": 3 != 2,
    '3 != "3"': 3 != "3",
    // Strict Inequality
    "3 !== 2": 3 !== 2,
    '3 !== "3"': 3 !== "3"
});

// 2. SPECIAL VALUE COMPARISONS
// --------------------------

// 2.1 null Comparisons
console.log("\n4. null Comparisons:");
console.table({
    "null > 0": null > 0,
    "null >= 0": null >= 0,
    "null == 0": null == 0,
    "null === 0": null === 0,
    "null < 0": null < 0,
    "null <= 0": null <= 0
});

// 2.2 undefined Comparisons
console.log("\n5. undefined Comparisons:");
console.table({
    "undefined > 0": undefined > 0,
    "undefined < 0": undefined < 0,
    "undefined == 0": undefined == 0,
    "undefined === 0": undefined === 0,
    "undefined >= 0": undefined >= 0,
    "undefined <= 0": undefined <= 0
});

// 3. LOGICAL OPERATORS
// ------------------

// 3.1 Basic Logical Operations
console.log("\n6. Logical Operators:");
console.table({
    "true && true": true && true,
    "true && false": true && false,
    "true || false": true || false,
    "false || false": false || false,
    "!true": !true,
    "!!true": !!true
});

// 4. REAL-WORLD EXAMPLES
// --------------------
const num1 = 5, num2 = 10, num3 = 15;

console.log("\n7. Practical Examples:");
console.table({
    "Check if num2 is between num1 and num3": 
        (num1 < num2) && (num2 < num3),
    "Check if num1 is largest OR num3 is largest": 
        (num1 > num2 && num1 > num3) || (num3 > num1 && num3 > num2),
    "Check if numbers are not equal": 
        !(num1 === num2)
});

/* 
BEST PRACTICES:
--------------
1. Always use strict equality (===) and inequality (!==)
2. Be careful with null/undefined comparisons
3. Use parentheses for complex logical expressions
4. Remember that null == undefined is true
5. Avoid implicit type coercion in comparisons
*/

// End of Comparisons and Logical Operators Lecture