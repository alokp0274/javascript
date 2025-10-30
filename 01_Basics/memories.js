// Stack (Permitive Memory), Heap (Non-Permitive Memory), Static Memory, Code/ Text Segment

let myYoutubeName = "Codevolution"; // String Literal stored in Static Memory
let anotherName = myYoutubeName; // Copying the value from Static Memory to Stack Memory

anotherName = "Codevolution Channel"; // Changing the value of anotherName in Stack Memory

console.log(myYoutubeName); // Output: Codevolution
console.log(anotherName); // Output: Codevolution Channel

// In the above example, myYoutubeName and anotherName are stored in Stack Memory. Changing anotherName does not affect myYoutubeName because they are separate copies.

// Now let's see how objects work in Heap Memory
let userOne = {
  name: "Alice",
  age: 25,
}; // Object stored in Heap Memory

let userTwo = userOne; // Copying the reference (address) of the object from Stack to Stack

userTwo.age = 30; // Modifying the object via userTwo reference

console.log(userOne.age); // Output: 30
console.log(userTwo.age); // Output: 30

// In this example, userOne and userTwo both reference the same object in Heap Memory. Changing the age property via userTwo also affects userOne because they point to the same object.

// To create a true copy of an object, we can use methods like Object.assign or spread operator
let userThree = { ...userOne }; // Creating a shallow copy of userOne

userThree.age = 35; // Modifying the age property of userThree

console.log(userOne.age); // Output: 30
console.log(userThree.age); // Output: 35

// Here, userThree is a separate object in Heap Memory, so changes to it do not affect userOne.

/* =========================
    ADDITIONAL NOTES
    ========================= */

/* Object.is vs ===
    - Object.is handles +0 and -0 as different, and NaN as equal to NaN.
*/
console.log(Object.is(+0, -0), +0 === -0); // false true

/* =========================
    TYPE CONVERSION / COERCION
    ========================= */
    
/* To string */
console.log(String(123), 123 + ""); // "123" "123"  
/* To number */
console.log(Number("42"), +"42", parseInt("42", 10)); // 42 42 42

/* To boolean (truthy/falsy)
    - Falsy: false, 0, -0, 0n, "", null, undefined, NaN
*/
console.log(Boolean(""), !!1); // false true

/* =========================
    MUTABILITY & COPYING
    ========================= */
    
/* Primitives are immutable; objects are mutable.
    - To "copy"
        - shallow: Object.assign({}, obj) or {...obj}
        - deep: JSON.parse(JSON.stringify(obj)) or structuredClone(obj) (modern browsers)
*/
const original = { a: { b: 2 } };
const shallow = { ...original };
shallow.a.b = 99;
console.log(original.a.b); // 99 -> nested object still shared (shallow copy)

/* For deep cloning (when available)
    - structuredClone handles most types correctly.
    - Fallbacks may be needed for older environments.
*/
// const deep = structuredClone(original); // Node 17+/modern browsers

/* ========================= */ 

/* Memory Management
    - JavaScript uses automatic garbage collection.
    - Unreferenced objects are cleaned up to free memory.
*/
let tempObject = { data: "temporary" };
tempObject = null; // Dereferencing the object, making it eligible for garbage collection

/* ========================= */

/* Closures and Memory
    - Closures can retain references to outer scope variables, affecting memory usage.
*/
function outerFunction() {
  let outerVariable = "I'm outside!";
  
  return function innerFunction() {
    console.log(outerVariable);
  };
}

const myClosure = outerFunction();
myClosure(); // Output: I'm outside!

/* The innerFunction retains a reference to outerVariable, preventing it from being garbage collected until myClosure is no longer referenced. */   
/* ========================= */

/* =========================
    ADDITIONAL NOTES
    ========================= */
    
/* Object.is vs ===
    - Object.is handles +0 and -0 as different, and NaN as equal to NaN.
*/
console.log(Object.is(+0, -0), +0 === -0); // false true

