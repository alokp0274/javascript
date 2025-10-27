console.log(3 > 2); // true
console.log(3 < 2); // false

console.log(3 >= 2); // true
console.log(3 <= 2); // false

console.log(3 == 2); // false
console.log(3 != 2); // true

console.log(3 == "3"); // true (loose equality, type coercion occurs)
console.log(3 === "3"); // false (strict equality, no type coercion)

console.log(3 != "3"); // false (loose inequality, type coercion occurs)
console.log(3 !== "3"); // true (strict inequality, no type coercion)

// Note: It's generally recommended to use strict equality (===) and strict inequality (!==) to avoid unexpected results due to type coercion.  

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log(null === 0);
console.log(null < 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined >= 0);
console.log(undefined <= 0);    