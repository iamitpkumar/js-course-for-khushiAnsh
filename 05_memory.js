"use strict";

// as we know datatypes are of 2 types premitive and non primitive
//premitive data types are saved in stack memory
// non primitive data types are saved in heap memory
// stack memory is used for static memory allocation and heap memory is used for dynamic memory allocation
// stack memory is faster than heap memory

let name = "Khushi"; // string (primitive data type)
let age = 15; // number (primitive data type)
let isStudent = true; // boolean (primitive data type)
let hobbies = ["reading", "writing", "coding"]; // array (non-primitive data type)
let address = { city: "New York", state: "NY" }; // object (non-primitive data type)
let nullValue = null; // null (primitive data type)
let undefinedValue; // undefined (primitive data type)

console.table({
  name: typeof name,
  age: typeof age,
  isStudent: typeof isStudent,
  hobbies: typeof hobbies,
  address: typeof address,
  nullValue: typeof nullValue,
  undefinedValue: typeof undefinedValue
});

console.log(hobbies); // prints the array of hobbies
