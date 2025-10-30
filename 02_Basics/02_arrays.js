// =============================
// JavaScript Arrays - Advanced Concepts
// =============================

/* 
TOPICS COVERED:
1. Array Declaration
2. Array Combination Methods
   - Using concat()
   - Using Spread Operator
3. Array Manipulation
   - push() for nested arrays
   - splice() for specific insertions
4. Accessing Nested Arrays
*/

// 1. ARRAY DECLARATION
// -------------------
const marvel_heros = ["thor", "spiderman", "ironman"];
const dc_heros = ["batman", "superman", "flash"];
console.log("Original Arrays:");
console.log("Marvel Heroes:", marvel_heros);
console.log("DC Heroes:", dc_heros);

// 2. ARRAY COMBINATION METHODS
// --------------------------

// Method 1: Using concat()
console.log("\nCombining Arrays - concat() method:");
const all_heros = marvel_heros.concat(dc_heros);
console.log("Combined using concat():", all_heros);

// Method 2: Using Spread Operator
console.log("\nCombining Arrays - spread operator with sorting:");
const all_heros_sorted = [...marvel_heros, ...dc_heros].sort();
console.log("Combined and sorted:", all_heros_sorted);

// 3. ARRAY MANIPULATION
// -------------------

// Adding nested array using push()
console.log("\nNested Arrays:");
marvel_heros.push(dc_heros);
console.log("After pushing dc_heros into marvel_heros:", marvel_heros);

// Adding element at specific index using splice()
marvel_heros.splice(1, 0, 'hulk');
console.log("\nAfter adding 'hulk' at index 1:", marvel_heros);

// 4. ACCESSING NESTED ARRAYS
// ------------------------
console.log("\nAccessing Nested Array Elements:");
console.log("Element at marvel_heros[3][1]:", marvel_heros[3][1]);

// 5. ARRAY UTILITY METHODS
// ------------------------
console.log("\n5. Array Utility Methods:");

// 5.1 Array.isArray() - Checking if something is an array
console.log("\nChecking if values are arrays:");
console.log("Is 'alokprajapati' an array?:", Array.isArray("alokprajapati")); // false
console.log("Is marvel_heros an array?:", Array.isArray(marvel_heros)); // true

// 5.2 Array.from() - Creating array from array-like objects
console.log("\nCreating arrays using Array.from():");
// Converting string to array of characters
const stringToArray = Array.from("alokprajapati");
console.log("String 'alokprajapati' converted to array:", stringToArray);

// Creating array from other iterables
console.log("\nMore Array.from() examples:");
// Creating array from Set
const setToArray = Array.from(new Set(['a', 'b', 'c']));
console.log("Array from Set:", setToArray);

// Creating array with mapping function
const numbersArray = Array.from('123', num => Number(num));
console.log("Array from string with mapping:", numbersArray); // [1, 2, 3]

let score1 = 10;
let score2 = 20;
let score3 = 15;

// Creating array from multiple values using Array.of()
const scores = Array.of(score1, score2, score3);
console.log("Array created using Array.of():", scores); // [10, 20, 15] 

/* 
SUMMARY OF ARRAY OPERATIONS:
---------------------------
1. concat(): Merges two or more arrays into a new array
2. [...spread]: Alternative way to combine arrays
3. push(): Adds elements to the end of an array (can create nested arrays)
4. splice(index, deleteCount, item): Adds/removes elements at specific position
5. Nested arrays can be accessed using multiple square brackets [outer][inner]
*/