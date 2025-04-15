"use strict"
let ageNum = 15;
let ageString = "15";



console.table({
  age_num: typeof ageNum,
  age_string: typeof ageString
});

ageNum = ageNum.toString(); // convert number to string
ageString = Number(ageString); // convert string to number

console.table({
  age_num: typeof ageNum,
  age_string: typeof ageString
});

let chars = Number("123asdf"); // convert string to number
console.log(chars); // NaN (Not a Number) because the string contains non-numeric characters
console.log(typeof chars); // number
console.log(chars === NaN); // false (NaN is not equal to anything, including itself)
console.log(isNaN(chars)); // true (isNaN() checks if the value is NaN)

// convert to Boolean
let str = "Hello";
let num = 0;
let boolStr = Boolean(str); // true (non-empty string is truthy)
let boolNum = Boolean(num); // false (0 is falsy)
console.table({
  str: boolStr,
  num: boolNum
});

// convert to string
let num1 = 42;  // number
let bool1 = true; // boolean
let str1 = String(num1); // convert number to string
let str2 = String(bool1); // convert boolean to string  

console.table({
  num1: typeof str1,
  bool1: typeof str2
});


// Number(), String(), Boolean() are global functions in JavaScript that can be used to convert values from one type to another.
// they always starts with capital letter
// Number() converts a value to a number
// String() converts a value to a string
// and Boolean() converts a value to a boolean and so on...
// also known as constructors