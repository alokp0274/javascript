// =======================================
// JavaScript Strings - A Comprehensive Guide
// =======================================

/*
TOPICS COVERED:
1. String Creation and Concatenation
2. Template Literals
3. String Methods
4. String Immutability
5. String Comparison
6. Memory Management
*/

// 1. STRING CREATION AND CONCATENATION
// --------------------------------

// 1.1 Basic String Creation
console.log("\n1. String Creation:");
const name = "JavaScript";
const repoCount = 42;

// 1.2 String Concatenation Methods
console.log("\n2. String Concatenation:");
console.table({
    "Using +": "Hey " + name + ", you have " + repoCount + " repos",
    "Template Literal": `Hello ${name}, you have ${repoCount} repos`
});

// 2. TEMPLATE LITERALS
// -----------------

// 2.1 Multi-line Strings
console.log("\n3. Multi-line Template Literals:");
const multiLineString = `
First Line
Second Line
Third Line
`.trim();
console.log(multiLineString);

// 2.2 Expression Interpolation
console.log("\n4. Template Literal with Expressions:");
const price = 29.99;
const quantity = 3;
console.log(`Total Cost: $${(price * quantity).toFixed(2)}`);

// 3. STRING METHODS
// --------------
console.log("\n5. Common String Methods:");

// 3.1 Basic String Operations
const sampleString = "  Hello, JavaScript World!  ";
console.log("Original String:", sampleString);

console.table({
    "Length": sampleString.length,
    "Trimmed": sampleString.trim(),
    "Uppercase": sampleString.toUpperCase(),
    "Lowercase": sampleString.toLowerCase()
});

// 3.2 Search and Extraction Methods
console.log("\n6. Search and Extraction:");
console.table({
    "includes('JavaScript')": sampleString.includes("JavaScript"),
    "indexOf('JavaScript')": sampleString.indexOf("JavaScript"),
    "slice(2, 7)": sampleString.slice(2, 7),
    "replace('JavaScript', 'JS')": sampleString.replace("JavaScript", "JS")
});

// 4. STRING IMMUTABILITY
// -------------------
console.log("\n7. String Immutability:");

// 4.1 Demonstrating Immutability
let immutableString = "Hello";
immutableString[0] = "h"; // This has no effect
console.log("After trying to modify directly:", immutableString);

// 4.2 Proper Way to Modify Strings
const imodifiedString = "h" + immutableString.slice(1);
console.log("Created new string:", imodifiedString);

// 5. STRING COMPARISON
// -----------------
console.log("\n8. String Comparison:");
const str1 = "apple";
const str2 = "banana";

console.table({
    "str1 === str2": str1 === str2,
    "str1 < str2": str1 < str2,
    "str1.localeCompare(str2)": str1.localeCompare(str2)
});

// 6. PRACTICAL EXAMPLES
// ------------------
console.log("\n9. Practical Examples:");

// 6.1 Shopping Cart Message
const user = "Bob";
const items = 3;
const pricePerItem = 20;

const cartMessage = `
Dear ${user},
Your Cart Summary:
- Items: ${items}
- Price per item: $${pricePerItem}
- Total: $${items * pricePerItem}
Thank you for shopping with us!
`.trim();

console.log(cartMessage);

/* 
BEST PRACTICES:
--------------
1. Use template literals for string interpolation
2. Remember strings are immutable - create new strings for modifications
3. Use appropriate string methods for manipulations
4. Consider memory usage with large string operations
5. Use meaningful variable names for string values
6. Always trim user input to remove unwanted whitespace
*/

// End of Strings Lecture

// strA remains unchanged, demonstrating string immutability and memory allocation. 
/* ========================= */ 
/* Memory Management
    - JavaScript uses automatic garbage collection.
    - Unreferenced strings are cleaned up to free memory.
*/  
// Example of garbage collection with strings
let tempString = "This is a temporary string.";
tempString = null; // Now eligible for garbage collection   

/* ========================= */
/* Summary
    - Strings are immutable and stored in Heap Memory.
    - Template literals provide enhanced string capabilities.
    - Common string methods facilitate manipulation and inspection.
    - Memory management is automatic, with unreferenced strings being collected.
*/  

/* ========================= */ 

/* Example demonstrating string immutability and memory allocation */
let originalString = "Immutable String";
let modifiedString = originalString;

modifiedString = "Modified String"; // Creates a new string in memory

console.log(originalString); // Output: "Immutable String"
console.log(modifiedString); // Output: "Modified String"

// originalString remains unchanged, showing that strings are immutable and modifications create new strings in memory.

/* ========================= */ 

/* Example demonstrating string interning */
let stringOne = "Interned String";
let stringTwo = "Interned String";

console.log(stringOne === stringTwo); // true, both reference the same interned string in memory

// Changing one creates a new string
stringTwo = "Changed String";

console.log(stringOne); // Output: "Interned String"
console.log(stringTwo); // Output: "Changed String"

// stringOne remains unchanged, demonstrating that strings are interned and modifications create new strings in memory.             
/* ========================= */

/* TYPE CONVERSIONS
    - Strings can be converted to/from other types.
*/

/* To string */
console.log(String(123), 123 + ""); // "123" "123"  
/* To number */
console.log(Number("42"), +"42", parseInt("42", 10)); // 42 42 42

/* To boolean (truthy/falsy)
    - Falsy: false, 0, -0, 0n, "", null, undefined, NaN
*/
console.log(Boolean(""), !!1); // false true    
/* ========================= */ 
/* Memory Management for Type Conversions
    - Temporary strings created during conversions are stored in Heap Memory.
    - These temporary strings are eligible for garbage collection once they go out of scope.
*/  
let num = 100;
let strNum = String(num); // Temporary string created

console.log(strNum); // Output: "100"

strNum = null; // Dereferencing the string, making it eligible for garbage collection
/* ========================= */ 
/* Summary      
    - Strings can be converted to/from numbers and booleans.
    - Temporary strings created during conversions are managed by JavaScript's garbage collector.
*/  
/* ========================= */

// End of 01_Basics/05_strings.js
