// =========================================
// JavaScript Objects - Comprehensive Guide
// =========================================

/*
TOPICS COVERED:
1. Object Creation and Basic Structure
2. Properties and Methods
3. Object Manipulation
4. Advanced Object Concepts
   - Nested Objects
   - Symbol Properties
   - Object Methods
5. Object Protection
*/

// 1. OBJECT CREATION AND BASIC STRUCTURE
// ----------------------------------

// 1.1 Object Literal Syntax
console.log("\n1. Basic Object Creation:");

const person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    greet() {
        return `Hello, I'm ${this.name}!`;
    }
};

// 1.2 Different Property Types
console.table({
    "String Property": person.name,
    "Number Property": person.age,
    "Boolean Property": person.isEmployed,
    "Method Call": person.greet()
});

// 2. PROPERTIES AND METHODS
// ----------------------

// 2.1 Property Access Methods
console.log("\n2. Accessing Properties:");

const user = {
    "first name": "John",
    lastName: "Doe",
    age: 25
};

console.table({
    "Dot Notation": user.lastName,
    "Bracket Notation": user["first name"],
    "Dynamic Access": user[`${"last"}Name`]
});

// 2.2 Adding and Modifying Properties
console.log("\n3. Property Manipulation:");

const car = {
    make: "Toyota",
    model: "Camry"
};

car.year = 2023;              // Adding new property
car.make = "Honda";           // Modifying existing property
delete car.model;             // Removing property

console.log("Updated Car Object:", car);

// 3. NESTED OBJECTS AND ARRAYS
// -------------------------
console.log("\n4. Complex Object Structures:");

const student = {
    name: "Bob",
    details: {
        age: 20,
        address: {
            street: "123 Learning Ave",
            city: "Edutown"
        }
    },
    courses: ["Math", "Physics", "English"],
    grades: {
        Math: 95,
        Physics: 88,
        English: 92
    }
};

// 3.1 Accessing Nested Properties
console.log("\n5. Nested Property Access:");
console.table({
    "Nested Object": student.details.address.city,
    "Array Element": student.courses[0],
    "Nested Value": student.grades.Math
});

// 4. ADVANCED OBJECT CONCEPTS
// ------------------------

// 4.1 Symbol Properties
console.log("\n6. Symbol Properties:");

const idSymbol = Symbol('id');
const userWithSymbol = {
    name: "Alice",
    [idSymbol]: "12345"
};

console.log("Symbol Property:", userWithSymbol[idSymbol]);

// 4.2 Object Methods
console.log("\n7. Object Methods:");

const book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2023
};

console.table({
    "Object.keys()": Object.keys(book),
    "Object.values()": Object.values(book),
    "Object.entries()": Object.entries(book)
});

// 5. OBJECT PROTECTION AND IMMUTABILITY
// ---------------------------------
console.log("\n8. Object Protection:");

const config = {
    apiKey: "secret123",
    server: "production"
};

// 5.1 Different Protection Levels
Object.freeze(config);    // Makes object completely immutable
const readOnlyUser = Object.seal({}); // Prevents adding/deleting properties

console.table({
    "Can Add Properties": !Object.isFrozen(config),
    "Can Modify Properties": !Object.isFrozen(config),
    "Is Sealed": Object.isSealed(readOnlyUser)
});

/* 
BEST PRACTICES:
--------------
1. Use const for object declarations
2. Use object literal syntax for object creation
3. Use meaningful property names
4. Use computed property names when needed
5. Consider using Object.freeze() for configuration objects
6. Use destructuring for accessing multiple properties
7. Use spread operator for shallow copies
8. Remember that nested objects need deep copying
*/

// End of Objects Lecture

newUser.username = 'newname'; // This will not change the username
console.log(newUser.username); // Output: alokp

// End of 02_Basics/02_objects.js


