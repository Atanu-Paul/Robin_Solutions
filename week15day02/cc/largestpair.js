//Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.

const LargestPair=(num)=>{
  let array = num.toString().split("");
  let digit = 0;
  let test = 0;
  let greatest = 0;

  for (i = 0; i < array.length - 1; i++) {
    if (parseInt(array[i]) >= digit) {
      test = parseInt(array[i] + array[i + 1]);
      if (test > greatest) {
        greatest = test;
      }
    }
  }
  return greatest;
};

let result = LargestPair(4759472);
let res1=LargestPair(65677577)
let res2=LargestPair(7658787889)
console.log(result);
console.log(res1);
console.log(res2);