"use strict";

// here we will be discussing about operations in javascript
// operations are performed on data types and variables in javascript
// operations are performed using operators
// operators are symbols that perform operations on operands (values or variables)
// there are different types of operators in javascript

// 1. Arithmetic operators: used to perform arithmetic operations like addition, subtraction, multiplication, division, etc.

let num1 = 10;
let num2 = 5;

let sum = num1 + num2; // addition
let difference = num1 - num2; // subtraction
let product = num1 * num2; // multiplication
let quotient = num1 / num2; // division
let remainder = num1 % num2; // modulus (remainder of division)
let exponent = num1 ** num2; // exponentiation (num1 raised to the power of num2)
let increment = ++num1; // increment prefix(Increases num1 by 1)
let incrementPostfix = num1++; // increment postfix (Increases num1 by 1 after using it)

let decrement = --num2; // decrement (decreases num2 by 1)
let decrementPostfix = num2--; // decrement postfix (decreases num2 by 1 after using it)

let squareRoot = Math.sqrt(num1); // square root (calculates the square root of num1)
let power = Math.pow(num1, num2); // power (calculates num1 raised to the power of num2)
let random = Math.random(); // generates a random number between 0 and 1

let negation = -num1; // negation (changes the sign of num1)
let absolute = Math.abs(num1); // absolute value (removes the sign of num1)

console.table({
  sum,
  difference,
  product,
  quotient,
  remainder,
  exponent,
  increment,
  decrement,
  squareRoot,
  power,
  random,
  negation,
  absolute
});


// 2. Assignment operators: used to assign values to variables

let x = 10; // assignment operator (=)
let y = 5; // assignment operator (=)

let z = x + y; // addition assignment operator (+=)

x += y; // equivalent to x = x + y
// x is now 15
y -= x; // equivalent to y = y - x
// y is now -10
x *= y; // equivalent to x = x * y
// x is now -150
y /= x; // equivalent to y = y / x
// y is now 0.06666666666666667


// 3. Comparison operators: used to compare two values and return a boolean value (true or false)
let a = 10;
let b = 5;


console.log(a > b);     // true   → 10 is greater than 5
console.log(a < b);     // false  → 10 is not less than 5
console.log(a >= b);    // true   → 10 is greater than or equal to 5
console.log(a <= b);    // false  → 10 is not less than or equal to 5
console.log(a == b);    // false  → 10 is not equal to 5 (loose equality)
console.log(a != b);    // true   → 10 is not equal to 5
console.log(a === b);   // false  → strict equality (also checks type)
console.log(a !== b);   // true   → strict inequality
console.log(a == "10"); // true   → loose equality (type coercion )
console.log(a === "10"); // false  → strict equality (no type coercion)

//Coercion is JavaScript's way of automatically converting one data type to another when needed
// like turning a string into a number, or a number into a boolean.



// 4. Logical operators: used to perform logical operations like AND, OR, NOT

let age = 25;
let hasID = true;

console.log(age >= 18 && hasID); // true → both conditions are true
console.log(age >= 18 && hasID === false); // false → one is false
console.log(age >= 18 || hasID); // true → at least one condition is true
console.log(age < 18 || hasID); // false → both conditions are false
console.log(!hasID); // false → NOT operator (negates the value of hasID)
console.log(!(age >= 18)); // false → NOT operator (negates the value of the condition)



// 5. Bitwise operators: used to perform bitwise operations on binary numbers
let numA = 5; // binary: 0101
let numB = 3; // binary: 0011

// 6. Ternary operator: used to perform a conditional operation in a single line
let ageCheck = (age >= 18) ? "Adult" : "Minor"; // if age is greater than or equal to 18, return "Adult", else return "Minor"
console.log(ageCheck); // "Adult"

// 7. Type operators: used to check the type of a variable or value
console.log(typeof age); // "number" → checks the type of age variable
console.log(typeof hasID); // "boolean" → checks the type of hasID variable

// 8. Unary operators: used to perform operations on a single operand
let unaryNum = 5;
let unaryNegation = -unaryNum; // negation (changes the sign of unaryNum)

// 9. Binary operators: used to perform operations on two operands
let binaryNum1 = 10;
let binaryNum2 = 5;
let binarySum = binaryNum1 + binaryNum2; // addition (binary operator as it takes two operands binaryNum1 and binaryNum2)

// 10. Relational operators: used to compare two values and return a boolean value (true or false)
let relationalNum1 = 10;
let relationalNum2 = 5;
console.log(relationalNum1 > relationalNum2); // true → 10 is greater than 5

// 11. Instanceof operator: used to check if an object is an instance of a particular class or constructor function
let obj = new Date(); // creating a new Date object
console.log(obj instanceof Date); // true → obj is an instance of Date class
console.log(obj instanceof Object); // true → obj is also an instance of Object class
console.log(obj instanceof Array); // false → obj is not an instance of Array class

// 12. Spread operator: used to expand an iterable (like an array) into its individual elements
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // spreads the elements of arr and adds 4 and 5
console.log(newArr); // [1, 2, 3, 4, 5]

// 13. Rest operator: used to collect multiple elements into a single array

// 14. Delete operator: used to delete a property from an object
// 15. In operator: used to check if a property exists in an object or array
// 16. Void operator: used to evaluate an expression without returning a value
// 17. Comma operator: used to evaluate multiple expressions and return the value of the last expression
// 18. With operator: used to extend the scope chain for a statement
// 19. New operator: used to create a new instance of an object
// 20. This operator: used to refer to the current object in a method or function
// 21. Super operator: used to call the constructor of a parent class in a subclass
// 22. Yield operator: used to pause and resume a generator function
// 23. Await operator: used to wait for a promise to resolve in an async function
// 24. Import operator: used to import modules in ES6
// 25. Export operator: used to export modules in ES6
// 26. Default operator: used to export a default module in ES6
// 27. As operator: used to rename a module or import in ES6
// 28. From operator: used to specify the source of a module in ES6

// ES6 is a major update to JavaScript that includes new syntax and features, such as arrow functions, classes, template literals, destructuring, and more. 
// It was released in 2015 and is also known as ECMAScript 2015. 
// ES6 introduced many new features that make JavaScript more powerful and easier to use, such as: 
// - Arrow functions: a shorter syntax for writing function expressions
// - Classes: a new syntax for creating objects and inheritance
// - Template literals: a new way to create strings with embedded expressions
// - Destructuring: a new syntax for extracting values from arrays and objects
// - Promises: a new way to handle asynchronous operations
// - Modules: a new way to organize and share code
// - Spread and rest operators: new syntax for working with arrays and objects
// - Default parameters: a new way to set default values for function parameters
// - Let and const: new keywords for declaring variables with block scope
// - Symbol: a new primitive data type for creating unique identifiers
// - Map and Set: new data structures for storing collections of values