"use strict"; //  It helps you write cleaner, safer, and more optimized code.

//primitive data types
// 1. Number: Represents both integer and floating-point numbers.
// 2. String: Represents a sequence of characters enclosed in single or double quotes.
// 3. Boolean: Represents a logical entity and can have two values: true or false.
// 4. Null: Represents the intentional absence of any object value.
// 5. Undefined: Represents a variable that has been declared but has not yet been assigned a value.
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
// 7. BigInt: Represents integers with arbitrary precision, allowing for very large numbers.
// 8. Object: Represents a collection of properties, where each property is a key-value pair.

let age = 25; // integer
let salary = 50000.50; // float
let pi = 3.14; // float
let isEmployed = true; // boolean
let isMarried = false; // boolean
let name = "John Doe"; // string
let city = 'New York'; // string
let children = null; // null
let address; // undefined
let bigInt = BigInt(123456789012345678901234567890); // BigInt

console.table([age, salary, pi, isEmployed, isMarried, name, city, children, address, bigInt]);
// The above code defines variables of different data types and prints them in a table format using console.table().

// we use typeof operator to check the data type of each variable 
console.log(typeof "Khushi"); // string

console.log(typeof age); // number
console.log(typeof salary); // number
console.log(typeof pi); // number
console.log(typeof isEmployed); // boolean
console.log(typeof isMarried); // boolean

console.table({
  age: typeof age,
  salary: typeof salary,
  pi: typeof pi,
  isEmployed: typeof isEmployed,
  isMarried: typeof isMarried,
  name: typeof name,
  city: typeof city,
  children: typeof children,
  address: typeof address,
  bigInt: typeof bigInt
});

// The above code uses console.log() to print the data types of the variables defined earlier.

// The typeof operator is used to determine the type of a variable or expression.

// The output will show the data type of each variable in the console.

// The last part of the code uses console.table() to print the data types in a table format for better readability.

// console.table({index: here we are getting type of data type of each variable});

// primitive data types are immutable, meaning they cannot be changed once created.
// However, we can create new variables with different values or types.
// For example, we can create a new variable with a different string value:
let newName = "Jane Smith"; // new string variable
console.log(newName); // prints "Jane Smith"

// types: String, Number, Boolean, Null, Undefined, Symbol, BigInt, Object

// Non-primitive data types (also known as reference data types) are mutable, meaning they can be changed after creation.
// Non-primitive data types include objects, arrays, and functions.
// These data types can hold collections of values and more complex entities.
// Examples of non-primitive data types include:
// 1. Object: A collection of key-value pairs, where keys are strings and values can be of any type.
// 2. Array: An ordered list of values, which can be of any type. Arrays are a special type of object.
// 3. Function: A block of code that can be called and executed. Functions are also a special type of object.
// 4. Date: A built-in object that represents dates and times.
// 5. RegExp: A built-in object that represents regular expressions, used for pattern matching in strings.
// 6. Error: A built-in object that represents runtime errors in JavaScript.
// 7. Map: A collection of key-value pairs, where keys can be of any type and values can be of any type.
// 8. Set: A collection of unique values, where each value can only occur once in the collection.




