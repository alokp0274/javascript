"use strict"; // Enable strict mode for better error checking. Treat all JS code as newer version.

// alert("Hello World!"); // Show an alert dialog with the message "Hello World!"

// alert(3 + 3) // we are using nodejs, not browser, so alert won't work here.

console.log(3
    +
    3); // Code readiablity should be high maintain proper indentation and spacing.

console.log("alok");

let name = "Alok"; // Use let for variables that may change, const for constants.
let age = 25; // Use camelCase for variable names.
let isLoggedIn = false; // Use boolean values true/false without quotes.

// number => 2 to power 53
// bigint => larger than 2 to power 53
// string => sequence of characters
// boolean => true or false
// null => empty value
// undefined => value not assigned
// object => key-value pairs
// symbol => unique identifiers

console.log(typeof null); // "object" (this is a known quirk in JavaScript for historical reasons );