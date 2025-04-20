"use strict";

// as we know datatypes are of 2 types premitive and non primitive
//premitive data types are saved in stack memory eg. string, number, boolean, null, undefined, symbol, BigInt
// non primitive data types are saved in heap memory eg. array, object, function, etc.

// stack memory is used for static memory allocation and heap memory is used for dynamic memory allocation
// stack memory is faster than heap memory

//stack by grammatical definition is a collection of objects that are neatly arranged in a pile or stack
// heap is a large pool of memory that is used for dynamic memory allocation

//accessing stack memory is faster than accessing heap memory
// because stack memory is organized in a specific order, while heap memory is not organized in any specific order
// this means that accessing stack memory is faster than accessing heap memory

// size of stack memory is limited, while size of heap memory is not limited
// this means that stack memory is faster than heap memory, but heap memory is more flexible than stack memory


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

// stack memory never change original value of variable instead it creates a copy of value and then changes the value of copy variable
// heap memory is used for dynamic memory allocation, which means that the size or value of the memory can change at runtime

let person1 = 40;
let person2 = person1; // copy of value (stack memory)
console.log(person1); // prints 40

person2 = 50; // changing the value of person2
console.log(person1); // prints 40 (original value remains unchanged)
console.log(person2); // prints 50 (new value of person2)

// but in heap memory, if we change the value of person2, it will also change the value of person1

let person3 = { name: 'Khushi', age: 40 }; // object (non-primitive data type)
let person4 = person3; // reference to the same object (heap memory)
console.log(person3); // prints { name: 'Khushi', age: 40 }
console.log(person4); // prints { name: 'Khushi', age: 40 }

person4.age = 80; 
console.log(person3); // prints { name: 'Khushi', age: 80 } (original value is changed)
console.log(person4); // prints { name: 'Khushi', age: 80 } (new value of person4)