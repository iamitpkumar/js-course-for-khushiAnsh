// String functions...

let str = "This is a long string but perhaps not that long."; // string (primitive data type)... memory allocation in stack memory
let strWithWhiteSpace = "   This is a long string but perhaps not that long.  "; // string (primitive data type)... memory allocation in stack memory

console.log(str.length); // prints the length of the string (including spaces)
console.log(strWithWhiteSpace.trim()); // removes whitespace from both ends of the string
console.log(strWithWhiteSpace.trimStart()); // removes whitespace from the start of the string
console.log(strWithWhiteSpace.trimEnd()); // removes whitespace from the end of the string
console.log(str.toUpperCase()); // converts the string to uppercase
console.log(str.toLowerCase()); // converts the string to lowercase
console.log(str.charAt(0)); // returns the character at the specified index (0 in this case)
console.log(str.charCodeAt(0)); // returns the Unicode value of the character at the specified index (Rarely used)
console.log(str.indexOf("long")); // returns the index of the first occurrence of the specified substring (long in this case)
console.log(str.lastIndexOf("long")); // returns the index of the last occurrence of the specified substring (long in this case)
console.log(str.includes("long")); // returns true if the specified substring is found in the string (long in this case)
console.log(str.startsWith("This")); // returns true if the string starts with the specified substring (This in this case)
console.log(str.endsWith("long.")); // returns true if the string ends with the specified substring (long. in this case)
console.log(str.slice(0, 4)); // returns a new string that is a portion of the original string (from index 0 to index 4)
console.log(str.substring(0, 4)); // returns a new string that is a portion of the original string (from index 0 to index 4)
console.log(str.split(" ")); // splits the string into an array of substrings (using space as the delimiter)
console.log(str.split(" ", 3)); // splits the string into an array of substrings (using space as the delimiter) and limits the number of substrings to 3
console.log(str.replace("long", "short")); // replaces the first occurrence of the specified substring (long in this case) with the specified value (short in this case)
console.log(str.replaceAll("long", "short")); // replaces all occurrences of the specified substring (long in this case) with the specified value (short in this case)
console.log(str.concat(" ", strWithWhiteSpace)); // concatenates the two strings (adds a space between them)

console.log(`${str} ${strWithWhiteSpace}`); 

console.log(strWithWhiteSpace.repeat(2)); // repeats the string the specified number of times (2 in this case)
console.log(strWithWhiteSpace.padStart(50, "*")); // pads the string with the specified character (space in this case) to the specified length (50 in this case)
console.log(strWithWhiteSpace.padEnd(50, "*")); // pads the string with the specified character (space in this case) to the specified length (50 in this case)
console.log(strWithWhiteSpace.match(/long/g)); // returns an array of all occurrences of the specified substring (long in this case) using regular expression
console.log(strWithWhiteSpace.search(/long/g)); // returns the index of the first occurrence of the specified substring (long in this case) using regular expression
