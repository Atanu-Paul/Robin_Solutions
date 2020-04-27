// Question - 2

// Create a function that takes an array and a string as arguments and return the index of the string.
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

const findIndex = (arr, str) => {
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }
  return "Element not present";
};

let arr = ["a", "g", "y", "d"];
let str = "d";

console.log(findIndex(arr, str));
