// ===================================
// JavaScript Arrays - Fundamentals
// ===================================

/*
TOPICS COVERED:
1. Array Creation and Access
2. Basic Array Operations
3. Array Modification Methods
4. Array Utility Methods
5. Array Transformations
6. Practical Examples
*/

// 1. ARRAY CREATION AND ACCESS
// -------------------------

// 1.1 Creating Arrays
console.log("\n1. Array Creation:");
const fruits = ['Apple', 'Banana', 'Orange'];
const numbers = new Array(1, 2, 3, 4, 5);
const mixed = ['text', 42, true, null, undefined];

console.table({
    "Literal Syntax": fruits,
    "Constructor Syntax": numbers,
    "Mixed Types": mixed
});

// 1.2 Accessing Elements
console.log("\n2. Array Access:");
console.table({
    "First Element (index 0)": fruits[0],
    "Last Element": fruits[fruits.length - 1],
    "Length": fruits.length,
    "Invalid Index": fruits[10] // undefined
});

// 2. BASIC ARRAY OPERATIONS
// ----------------------

// 2.1 Adding and Removing Elements
console.log("\n3. Basic Operations:");

const basicOps = ['A', 'B', 'C'];
console.log("Original:", basicOps);

basicOps.push('D');         // Add to end
basicOps.unshift('Z');      // Add to start
const lastItem = basicOps.pop();    // Remove from end
const firstItem = basicOps.shift(); // Remove from start

console.table({
    "After push('D')": ['A', 'B', 'C', 'D'],
    "After unshift('Z')": ['Z', 'A', 'B', 'C', 'D'],
    "After pop()": ['Z', 'A', 'B', 'C'],
    "After shift()": ['A', 'B', 'C'],
    "Removed Items": { last: lastItem, first: firstItem }
});

// 3. ARRAY MODIFICATION METHODS
// -------------------------

// 3.1 Splicing Arrays
console.log("\n4. Array Modifications:");
const letters = ['A', 'B', 'C', 'D', 'E'];

// Demonstrate splice operations
console.log("Original:", letters);
letters.splice(2, 1);           // Remove 1 element at index 2
console.log("After splice(2, 1):", letters);
letters.splice(1, 0, 'X', 'Y'); // Insert elements at index 1
console.log("After splice(1, 0, 'X', 'Y'):", letters);

// 3.2 Slicing Arrays
const sliceDemo = ['A', 'B', 'C', 'D', 'E'];
console.table({
    "Original": sliceDemo,
    "slice(1, 3)": sliceDemo.slice(1, 3),
    "slice(-2)": sliceDemo.slice(-2)
});

// 4. ARRAY UTILITY METHODS
// ---------------------
console.log("\n5. Utility Methods:");

const items = ['banana', 'apple', 'orange', 'mango'];
console.table({
    "indexOf('apple')": items.indexOf('apple'),
    "includes('mango')": items.includes('mango'),
    "join(', ')": items.join(', '),
    "toString()": items.toString()
});

// 5. ARRAY TRANSFORMATIONS
// ---------------------
console.log("\n6. Array Transformations:");

// 5.1 Sorting
const unsorted = ['banana', 'apple', 'orange', 'mango'];
console.log("Sorting Arrays:");
console.table({
    "Original": unsorted,
    "Sorted": [...unsorted].sort(),
    "Reverse Sorted": [...unsorted].sort().reverse()
});

// 5.2 Concatenation
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("\n7. Array Concatenation:");
console.table({
    "Using concat()": arr1.concat(arr2),
    "Using spread": [...arr1, ...arr2]
});

/* 
BEST PRACTICES:
--------------
1. Use const for array declaration unless reassignment is needed
2. Prefer array literal syntax over Array constructor
3. Use spread operator for array copies
4. Use appropriate methods based on needs:
   - push/pop for stack operations
   - shift/unshift for queue operations
   - splice for middle modifications
5. Remember that arrays are zero-indexed
6. Consider performance implications for large arrays
*/

// End of Arrays Fundamentals Lecture