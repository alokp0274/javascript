"use strict"; // Treat all JS code as newer version

// =========================================
// JavaScript Data Types and Type System
// =========================================

/*
TOPICS COVERED:
1. Primitive Data Types
   - String, Number, BigInt
   - Boolean, null, undefined
   - Symbol
2. Reference Type
   - Object
3. Type Checking
4. Dynamic Typing
5. Complex Data Structures
*/

// 1. PRIMITIVE DATA TYPES
// ---------------------

// 1.1 String
const myString = "Hello, World!";
console.log("\nString Example:");
console.log("Value:", myString);
console.log("Type:", typeof myString);

// 1.2 Number
const myNumber = 42;
const pi = 3.14159;
console.log("\nNumber Examples:");
console.log("Integer:", myNumber, "Type:", typeof myNumber);
console.log("Float:", pi, "Type:", typeof pi);

// 1.3 BigInt
const myBigInt = 9007199254741991n;
console.log("\nBigInt Example:");
console.log("Value:", myBigInt);
console.log("Type:", typeof myBigInt);

// 1.4 Boolean
const myBoolean = true;
console.log("\nBoolean Example:");
console.log("Value:", myBoolean);
console.log("Type:", typeof myBoolean);

// 1.5 null and undefined
const myNull = null;
let myUndefined;
console.log("\nNull and Undefined:");
console.log("null value:", myNull, "Type:", typeof myNull); // Object (JavaScript quirk)
console.log("undefined value:", myUndefined, "Type:", typeof myUndefined);

// 1.6 Symbol
const mySymbol = Symbol("uniqueID");
console.log("\nSymbol Example:");
console.log("Type:", typeof mySymbol);

// 2. REFERENCE TYPE - OBJECT
// ------------------------
console.log("\nComplex Data Types:");

// 2.1 Simple Object
const person = {
    name: "John",
    age: 28,
    isEmployed: true
};

// 2.2 Complex Object with Nested Structures
const employee = {
    id: 1001,
    details: {
        name: "Alice",
        department: "Engineering",
        address: {
            street: "123 Tech Lane",
            city: "Silicon Valley"
        }
    },
    skills: ["JavaScript", "Python", "React"]
};

// 3. DEMONSTRATING DYNAMIC TYPING
// ----------------------------
console.log("\nDynamic Typing Demonstration:");
let dynamicVar = "I am a string";
console.log("Initial -", "Value:", dynamicVar, "Type:", typeof dynamicVar);

dynamicVar = 100;
console.log("After number assignment -", "Value:", dynamicVar, "Type:", typeof dynamicVar);

dynamicVar = false;
console.log("After boolean assignment -", "Value:", dynamicVar, "Type:", typeof dynamicVar);

// 4. SUMMARY TABLE OF ALL TYPES
// --------------------------
console.log("\nSummary of All Variables:");
console.table({
    string: { value: myString, type: typeof myString },
    number: { value: myNumber, type: typeof myNumber },
    bigint: { value: myBigInt.toString(), type: typeof myBigInt },
    boolean: { value: myBoolean, type: typeof myBoolean },
    null: { value: myNull, type: typeof myNull },
    undefined: { value: myUndefined, type: typeof myUndefined },
    symbol: { value: "Symbol('uniqueID')", type: typeof mySymbol },
    object: { value: "person object", type: typeof person }
});

/* 
IMPORTANT NOTES:
---------------
1. JavaScript is dynamically typed - variables can hold different types
2. typeof null returns "object" - this is a known JavaScript quirk
3. Use typeof operator to check variable types
4. Objects are reference types - they store references, not values
5. Primitive types are immutable
*/

// End of Data Types Lecture