// Question - 3

// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

const check = (arr, num) => {
  for (i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      return "true";
    }
  }
  return "false";
};

let arr = [1, 2, 3, 4, 5];
let num = 0;
console.log(check(arr, num));