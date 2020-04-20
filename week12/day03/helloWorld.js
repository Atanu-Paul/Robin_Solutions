// Question - 4

// Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
// helloWorld(3) ➞ "Hello"

// helloWorld(5) ➞ "World"

// helloWorld(15) ➞ "Hello World"

function helloWorld(a) {
  if (a % 3 === 0 && a % 5 === 0) {
    return "Hello World";
  }
  if (a % 3 === 0) {
    return "Hello";
  }
  if (a % 5 === 0) {
    return "World";
  } else {
    return "unfulfilled condition";
  }
}
console.log(helloWorld(3));
console.log(helloWorld(5));
console.log(helloWorld(15));
console.log(helloWorld(89));
