let score = "100";

console.log(typeof score); // string

let valueInNumber = Number(score); // Convert string to number

console.log(typeof valueInNumber); // number

console.log(valueInNumber); // 100

// 333 to number is 333
// 33.33 to number is 33.33
// "Alok" to number is NaN
// true to number is 1
// false to number is 0
// null to number is 0
// undefined to number is NaN
// 33abc to number is NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert number to boolean

console.log(typeof booleanIsLoggedIn); // boolean

console.log(booleanIsLoggedIn); // true

// 1 to boolean is true
// 0 to boolean is false
// "Alok" to boolean is true
// "" to boolean is false
// null to boolean is false
// undefined to boolean is false
// NaN to boolean is false

let someNumber = 33;

let stringNumber = String(someNumber); // Convert number to string

console.log(typeof stringNumber); // string

console.log(stringNumber); // "33"

// 333 to string is "333"
// 33.33 to string is "33.33"
// true to string is "true"
// false to string is "false"
// null to string is "null"
// undefined to string is "undefined"   
// NaN to string is "NaN"   