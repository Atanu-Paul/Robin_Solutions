// Question - 1
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1 (which has index 0), but less than 2 (which has index 1).
// Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  console.log(arr)
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
}

var arr = [20, 3, 5];
var num = 19;
arr.sort(function (a, b) {
  return a - b;
});

console.log(getIndexToIns(arr, num));

function getIndexToIns1(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}
console.log(getIndexToIns1([20, 3, 5], 19));