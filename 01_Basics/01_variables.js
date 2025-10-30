// =============================================
// JavaScript Variables and Declaration Methods
// =============================================

/*
TOPICS COVERED:
1. Variable Declaration Types
   - const (constant variables)
   - let (block-scoped variables)
   - var (function-scoped variables)
   - undeclared variables
2. Variable Scoping
3. Type Checking
4. Best Practices
*/

// 1. VARIABLE DECLARATION TYPES
// ---------------------------

// 1.1 Using 'const' - For values that shouldn't change
const accountId = 123456;
// accountId = 654321; // ❌ Error: Assignment to constant variable

// 1.2 Using 'let' - Modern way to declare variables (block-scoped)
let accountEmail = "alok@google.com";
accountEmail = "hc@hc.com"; // ✅ Valid reassignment

// 1.3 Using 'var' - Old way (not recommended due to hoisting)
var accountPassword = "mySecretPassword";
accountPassword = "newPassword123"; // ✅ Valid reassignment

// 1.4 Undeclared variable (not recommended)
accountCity = "Bangalore";
accountCity = "New York"; // ✅ Valid but not recommended practice

// 1.5 Undefined variable
let accountState; // Declared but not initialized

// 2. TYPE CHECKING
// --------------
console.log("\nVariable Types:");
console.log("accountId type:", typeof accountId);        // number
console.log("accountEmail type:", typeof accountEmail);  // string
console.log("accountState type:", typeof accountState);  // undefined

// 3. DISPLAYING ALL VARIABLES
// -------------------------
console.log("\nAll Variables Summary:");
console.table({
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
});

/* 
BEST PRACTICES:
--------------
1. Always declare variables before using them
2. Use 'const' for values that shouldn't change
3. Use 'let' for variables that need to be reassigned
4. Avoid using 'var' due to hoisting and function-scoping
5. Use meaningful and descriptive variable names
6. Initialize variables when declaring them when possible
*/

// End of Variables Lecture