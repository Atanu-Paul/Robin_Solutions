//There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

const findUniq = (arr) => {
  var len_of_arr = arr.length;

  for (i = 0; i <= len_of_arr; i++) {
    for (j = 0; j <= len_of_arr; j++) {
      if (arr[i] === arr[j] && i != j) {
        break;
      }
      if (j === len_of_arr) {
        console.log("Unique NUmber is--->", arr[i]);
      }
    }
  }
};
arr = [1, 1, 1, 2, 1, 1];
findUniq(arr);
