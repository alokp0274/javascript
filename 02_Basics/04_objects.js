// =========================================
// JavaScript Objects - Lecture and Examples
// =========================================

/*
TOPICS COVERED:
1. Object creation (literal and constructor)
2. Accessing properties (dot & bracket)
3. Adding, modifying, deleting properties
4. Nested objects and deep access
5. Iteration and resetting objects
6. Merging and cloning objects
7. Introspection (keys, values, entries)
8. Best practices
*/

// 1. OBJECT CREATION
// ------------------
console.log('\n1. Object Creation:');

// Literal syntax (preferred)
const tinderUser = {};

// Add properties
tinderUser.id = '12345';
tinderUser.name = 'Jane Doe';
tinderUser.isLoggedIn = false;

console.log('Initial tinderUser:', tinderUser);

// 2. ACCESSING AND MODIFYING PROPERTIES
// ------------------------------------
console.log('\n2. Accessing and Modifying Properties:');

// Modify
tinderUser.isLoggedIn = true;
// Add
tinderUser.age = 28;

console.log('After modifications:', tinderUser);

// Delete a property
delete tinderUser.age;
console.log('After deleting age:', tinderUser);

// 3. OBJECT LITERAL WITH NESTED STRUCTURES
// ---------------------------------------
console.log('\n3. Nested Objects:');

const regularUser = {
    name: 'John Smith',
    email: 'alok@gmail.com',
    isActive: true,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA',
        choicesOfStreet: {
            first: '1st Main St',
            second: '2nd Main St'
        }
    }
};

// Accessing nested property
console.log('Nested value (choicesOfStreet.second):', regularUser.address.choicesOfStreet.second);

// 4. ITERATING AND RESETTING OBJECTS
// ---------------------------------
console.log('\n4. Iteration and Resetting:');

// Reset an object by deleting all enumerable own properties
function resetObject(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            delete obj[key];
        }
    }
}

const tempUser = { a: 1, b: 2 };
console.log('Before reset tempUser:', tempUser);
resetObject(tempUser);
console.log('After reset tempUser:', tempUser);

// 5. MERGING AND CLONING OBJECTS
// ------------------------------
console.log('\n5. Merging and Cloning:');

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// shallow clone + merge using Object.assign
const merged1 = Object.assign({}, obj1, obj2);
console.log('Merged (Object.assign):', merged1);

// shallow clone + merge using spread
const merged2 = { ...obj1, ...obj2 };
console.log('Merged (spread):', merged2);

// 6. INTROSPECTION: keys, values, entries
// ---------------------------------------
console.log('\n6. Introspection:');
console.log('Object.keys(regularUser):', Object.keys(regularUser));
console.log('Object.values(regularUser):', Object.values(regularUser));
console.log('Object.entries(regularUser):', Object.entries(regularUser));

// 7. OBJECT-ARRAY CONVERSIONS
// --------------------------
console.log('\n7. Object <-> Array conversions:');
const entries = Object.entries(regularUser);
console.log('Entries (array of [key, value]):', entries);

// 8. FINAL STATE
// --------------
console.log('\nFinal tinderUser (unchanged by merging):', tinderUser);

/*
BEST PRACTICES:
- Use object literal syntax for most cases
- Prefer const for object declarations (mutating properties is fine)
- Use deep copy libraries for nested/immutable cloning needs
- Validate nested access or use optional chaining (.?) when reading deep paths
*/

