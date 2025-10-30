// js_01.js
// Basic JavaScript quiz data — an array of question objects.
// Each object: id, topic, question, options (optional), answer, hint.

const questions = [
    {
        id: 1,
        topic: "Variables & Declarations",
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and hoisted; let and const are block-scoped; const cannot be reassigned.",
        hint: "Consider scope and reassignment."
    },
    {
        id: 2,
        topic: "Data Types",
        question: "Name the primitive data types in JavaScript.",
        answer: "string, number, boolean, null, undefined, symbol, bigint.",
        hint: "There are 7 primitives in modern JS."
    },
    {
        id: 3,
        topic: "typeof",
        question: "What does typeof null return and why is it considered a historical bug?",
        answer: "typeof null returns 'object' due to legacy implementation bug.",
        hint: "null is not an object logically, but typeof reports 'object'."
    },
    {
        id: 4,
        topic: "Equality",
        question: "What's the difference between == and === ?",
        answer: "== performs type coercion before comparison; === compares without coercion (strict equality).",
        hint: "Prefer === to avoid implicit conversions."
    },
    {
        id: 5,
        topic: "Operators",
        question: "What will 0 || 'default' evaluate to and why?",
        options: ["0", "'default'", "false", "undefined"],
        answer: "'default' because || returns the first truthy operand.",
        hint: "|| returns operand, not just boolean."
    },
    {
        id: 6,
        topic: "Control Flow",
        question: "How do you write a for loop that iterates an array arr?",
        answer: "for (let i = 0; i < arr.length; i++) { /* use arr[i] */ } or for (const item of arr) { /* use item */ }",
        hint: "Consider both index-based and for...of loops."
    },
    {
        id: 7,
        topic: "Functions",
        question: "What's the difference between function declaration and function expression?",
        answer: "Declarations are hoisted (can be called before definition); expressions (including arrow functions) are not hoisted in the same way.",
        hint: "Think hoisting and when the function name is available."
    },
    {
        id: 8,
        topic: "Arrow Functions",
        question: "How does this behavior differ in arrow functions compared to regular functions?",
        answer: "Arrow functions inherit the surrounding this (lexical this) and do not have their own arguments object.",
        hint: "Arrow functions are useful when you want to preserve this."
    },
    {
        id: 9,
        topic: "Default Params",
        question: "How can you set a default value for a function parameter?",
        answer: "function f(a = 1) { /* a is 1 if omitted */ }",
        hint: "Default values are set in the parameter list."
    },
    {
        id: 10,
        topic: "Rest & Spread",
        question: "What's the difference between rest and spread syntax?",
        answer: "Rest (...) collects multiple elements into an array (function params); spread expands an iterable into individual elements (calls/arrays/objects).",
        hint: "Both use ... but appear in different contexts."
    },
    {
        id: 11,
        topic: "Arrays",
        question: "What do map, filter, and reduce do?",
        answer: "map transforms each element, filter keeps elements matching a predicate, reduce accumulates values into single result.",
        hint: "map -> same length, filter -> ≤ length, reduce -> single value."
    },
    {
        id: 12,
        topic: "Destructuring",
        question: "How do you extract properties a and b from obj = {a:1,b:2} using destructuring?",
        answer: "const { a, b } = obj;",
        hint: "Use curly braces for object destructuring."
    },
    {
        id: 13,
        topic: "Template Literals",
        question: "How do you interpolate a variable name into a string?",
        answer: "Use backticks and ${variable}, e.g. `Hello ${name}`.",
        hint: "Backticks ` not single quotes '."
    },
    {
        id: 14,
        topic: "Objects",
        question: "How do you add a new property to an object obj with key 'k' and value 'v'?",
        answer: "obj.k = 'v'; or obj['k'] = 'v';",
        hint: "Bracket notation works for dynamic keys."
    },
    {
        id: 15,
        topic: "Prototypes & Classes",
        question: "How does prototypal inheritance relate to ES6 classes?",
        answer: "Classes are syntactic sugar over prototype-based inheritance; methods defined in class go on the prototype.",
        hint: "Instances share methods via the prototype chain."
    },
    {
        id: 16,
        topic: "Hoisting",
        question: "Which declarations are hoisted and what is the temporal dead zone?",
        answer: "var declarations are hoisted and initialized to undefined; let/const are hoisted but uninitialized and accessing them before declaration causes a ReferenceError (TDZ).",
        hint: "TDZ applies to let/const."
    },
    {
        id: 17,
        topic: "Scope & Closure",
        question: "What is a closure?",
        answer: "A function that retains access to variables from its lexical scope even when executed outside that scope.",
        hint: "Closures allow private state."
    },
    {
        id: 18,
        topic: "Event Loop",
        question: "What is the difference between macrotasks and microtasks (e.g., setTimeout vs Promise.then)?",
        answer: "Microtasks (Promise.then, process.nextTick) run after current script and before next macrotask; macrotasks (setTimeout, I/O) run on the task queue.",
        hint: "Promises resolve before setTimeout callbacks."
    },
    {
        id: 19,
        topic: "Asynchronous JS",
        question: "How do you convert a Promise-based function into async/await usage?",
        answer: "Use async function and await: async function f(){ const res = await promiseFn(); }",
        hint: "await can only be used inside async functions."
    },
    {
        id: 20,
        topic: "Promises",
        question: "What are the three states of a Promise?",
        answer: "pending, fulfilled (resolved), and rejected.",
        hint: "A settled promise is fulfilled or rejected."
    },
    {
        id: 21,
        topic: "Error Handling",
        question: "How do you handle errors in async/await code?",
        answer: "Use try { await ... } catch (err) { /* handle */ } or catch on the returned Promise.",
        hint: "try/catch works with await."
    },
    {
        id: 22,
        topic: "Modules",
        question: "How do you export and import a default export in ES modules?",
        answer: "export default function foo(){}; import foo from './file.js';",
        hint: "Default export imported without braces."
    },
    {
        id: 23,
        topic: "DOM (Basics)",
        question: "How do you select an element with id 'app' and add a click listener?",
        answer: "const el = document.getElementById('app'); el.addEventListener('click', () => { /*...*/ });",
        hint: "Use addEventListener instead of inline onclick."
    },
    {
        id: 24,
        topic: "Timers",
        question: "What does setTimeout(fn, 0) do?",
        answer: "Schedules fn to run after the current call stack completes as a macrotask (not immediately).",
        hint: "It defers execution to the task queue."
    },
    {
        id: 25,
        topic: "Best Practices",
        question: "Why prefer immutable patterns and pure functions when possible?",
        answer: "They reduce side effects, make code easier to reason about, and improve testability.",
        hint: "Pure functions return same output for same input."
    }
];

// Utility exports for use in exercises or quizzes.
function getAll() {
    return questions;
}

function getById(id) {
    return questions.find(q => q.id === id) || null;
}

function getRandom(n = 1) {
    const shuffled = questions.slice().sort(() => 0.5 - Math.random());
    return n === 1 ? shuffled[0] : shuffled.slice(0, n);
}

module.exports = {
    questions,
    getAll,
    getById,
    getRandom
};