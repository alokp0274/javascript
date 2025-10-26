const accountId = 123456;
let accountEmail = "alok@google.com";
var accountPassword = "mySecretPassword";
accountCity = "Bangalore";
let accountState; // Declared but not initialized

// accountId = 654321; // Validation Error: Assignment to constant variable.

console.log(accountId);

accountEmail = "hc@hc.com"; // Valid
console.log(accountEmail);

accountPassword = "newPassword123"; // Valid
console.log(accountPassword);   

accountCity = "New York"; // Valid
console.log(accountCity);

/*
Prefer not to use 'var' for variable declaration due to its function-scoped nature and hoisting behavior. Use 'let' and 'const' for block-scoped variables to avoid unintended side effects.
*/

console.table({accountId, accountEmail, accountPassword, accountCity, accountState});