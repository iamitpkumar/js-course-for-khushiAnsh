// In js string is a primitive data type, which means that it is immutable (cannot be changed) and is stored in stack memory.
// // string is a sequence of characters, which can be letters, numbers, symbols, or spaces

let str = "Hello, World!"; // old way of creating a string
let str2 = new String("Hello, World!"); // new way of creating a string (not recommended)
let str3 = String("Hello, World!"); // new way of creating a string (not recommended)
let strOld = "So here is your " + str; // old way of creating a string (concatenation)
let strNew = `So here is your ${str}`; // template literals (backticks) are used to create a string that can contain variables and expressions
// template literals are enclosed in backticks (`) instead of single or double quotes

console.table({
  str: str,
  str3: str3,
  strOld: strOld,
  strNew: strNew
});
