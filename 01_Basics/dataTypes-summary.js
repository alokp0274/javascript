/**
 * @summary JavaScript Data Types — concise, tagged reference + examples
 * @tags javascript, data-types, primitives, objects, typing, typeof, equality, coercion, immutability
 *
 * This file is a compact but thorough summary of JS data types, behaviors,
 * common pitfalls, type-checking techniques, equality rules, and copying.
 *
 * Use the examples below to experiment in a REPL or Node environment.
 */

/* =========================
    PRIMITIVE TYPES (immutable)
    ========================= */

/* undefined
    - default value for uninitialized variables and missing function parameters.
    - typeof -> "undefined"
*/
let a;
console.log(a, typeof a); // undefined "undefined"

/* null
    - explicitly empty value.
    - typeof -> "object" (historical quirk) => use === null to detect.
*/
const n = null;
console.log(n, typeof n, n === null); // null "object" true

/* boolean
    - true or false.
*/
const flag = true;
console.log(flag, typeof flag); // true "boolean"

/* number
    - IEEE-754 double precision floating-point.
    - Includes NaN, +Infinity, -Infinity. Watch precision for large integers.
*/
const num = 3.14;
console.log(num, typeof num); // 3.14 "number"
console.log(0 / 0, Number.isNaN(NaN)); // NaN true

/* BigInt
    - arbitrary-precision integers. Literals end with n.
    - Different type from number; no mixed arithmetic with number.
*/
const big = 123456789012345678901234567890n;
console.log(big, typeof big); // 123...n "bigint"

/* string
    - UTF-16 sequences. Immutable.
*/
const s = "hello";
console.log(s, typeof s); // "hello" "string"

/* symbol
    - unique, immutable identifiers; often used for private keys.
*/
const sym = Symbol("id");
console.log(sym, typeof sym); // Symbol(id) "symbol"

/* =========================
    NON-PRIMITIVE: OBJECTS (mutable)
    ========================= */

/* plain object
    - key-value map. Keys are strings or symbols.
*/
const obj = { x: 1, y: 2 };
console.log(obj, typeof obj); // { x:1, y:2 } "object"

/* array
    - specialized object with numeric indices; use Array.isArray to detect.
*/
const arr = [1, 2, 3];
console.log(arr, Array.isArray(arr), typeof arr); // [1,2,3] true "object"

/* function
    - callable objects. typeof -> "function"
*/
function fn() {}
console.log(fn, typeof fn); // [Function: fn] "function"

/* built-ins
    - Date, RegExp, Map, Set, WeakMap, WeakSet, Promise, Error, Intl, etc.
    - Many are objects—use instanceof or Object.prototype.toString.call to detect.
*/
console.log(new Date() instanceof Date, /x/.test("x")); // true true

/* Typed arrays and ArrayBuffer
    - For binary data and performance-sensitive scenarios.
*/

/* =========================
    TYPE CHECKING SUMMARY
    ========================= */

/* typeof
    - Good for primitives and functions.
    - Gotcha: typeof null === "object"
*/
console.log(typeof 1, typeof "x", typeof true, typeof undefined, typeof Symbol()); // "number" "string" "boolean" "undefined" "symbol"

/* Array.isArray
    - Reliable array detection.
*/
console.log(Array.isArray([])); // true

/* instanceof
    - Checks prototype chain (works for class/constructor-created objects).
    - Not reliable across realms (iframes) or for primitives.
*/
console.log([] instanceof Array); // true

/* Object.prototype.toString.call
    - Precise internal tag: "[object Type]". Useful for detailed checks.
*/
console.log(Object.prototype.toString.call(/a/)); // "[object RegExp]"

/* =========================
    EQUALITY & COMPARISONS
    ========================= */

/* Strict equality (===)
    - No type coercion. Preferred in most cases.
*/
console.log(1 === 1, "1" === 1); // true false

/* Abstract equality (==)
    - Performs type coercion. Can be surprising; avoid unless intentional.
*/
console.log(0 == false, "" == 0, null == undefined); // true true true

/* NaN
    - NaN !== NaN. Use Number.isNaN or Object.is to detect.
*/
console.log(NaN === NaN, Number.isNaN(NaN), Object.is(NaN, NaN)); // false true true

/* Object.is
    - Like === but treats +0 and -0 as different and NaN as equal.
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
    - To "copy" primitives: assignment copies value.
    - To copy objects:
      - shallow: Object.assign({}, obj) or {...obj}
      - arrays: arr.slice(), [...arr]
      - deep: structuredClone(obj) (modern), JSON.parse(JSON.stringify(obj)) (loses functions, symbols, undefined)
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

/* =========================
    OBJECT MUTATION PATTERNS / BEST PRACTICES
    ========================= */

/* Prefer treating data as immutable where reasonable (pure functions).
    Use spread, map/filter, and immutable libs for predictable state updates.
*/

/* Use const for bindings that shouldn't be re-assigned (objects can still be mutated). */
const CONST_OBJ = { x: 1 };
CONST_OBJ.x = 2; // allowed
// CONST_OBJ = {}; // error

/* =========================
    COMMON PITFALLS & NOTES
    ========================= */

/* typeof null === "object" -> check null with === null.
    NaN !== NaN -> use Number.isNaN or Object.is.
    Beware floating point precision: 0.1 + 0.2 !== 0.3 exactly.
*/

/* JSON.stringify limitations
    - Only serializes data-compatible types (objects, arrays, numbers, strings, booleans, null).
    - Drops undefined, functions, symbols, and non-enumerable properties.
*/

/* When to use BigInt
    - When integer precision beyond Number.MAX_SAFE_INTEGER is required.
    - Note: BigInt cannot mix with Number in arithmetic; convert explicitly.
*/

/* Symbols are unique keys that avoid name collisions in object properties. */

/* Use Map/Set for keyed collections and membership checks with non-string keys and better semantics. */

/* For robust type checking across environments:
    - Prefer a combination of typeof, Array.isArray, instanceof, and Object.prototype.toString.call
      depending on the target type and cross-realm considerations.
*/

/* =========================
    QUICK REFERENCE: typeof results
    =========================
    typeof undefined -> "undefined"
    typeof null -> "object"   (quirk)
    typeof true/false -> "boolean"
    typeof 123 -> "number"
    typeof 1n -> "bigint"
    typeof "abc" -> "string"
    typeof Symbol() -> "symbol"
    typeof function(){} -> "function"
    typeof {} -> "object"
*/

/* =========================
    END
    ========================= */