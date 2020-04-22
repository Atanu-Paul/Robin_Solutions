// Question - 2

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

let arrayOfMultiples = (num, len) => {
  let arr_res = [];
  for (i = 1; i <= len; i++) {
    let res = num * i;
    arr_res.push(res);
  }
  return arr_res;
};
console.log(arrayOfMultiples(7,5))
console.log(arrayOfMultiples(12,10))
console.log(arrayOfMultiples(17,6))