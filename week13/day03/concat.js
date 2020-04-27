// Question - 1

// Create a function to concatenate two integer arrays.
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

const concat_int = (arr1, arr2) => {
  result = [];
  result.push(arr1 + "," + arr2);
  console.log(result);
};

let arr1 = [7, 8];
let arr2 = [10, 9, 1, 1, 2];

concat_int(arr1, arr2);
