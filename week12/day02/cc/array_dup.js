// 1- Write a function to remove duplicates from an array.

// Sample input- [1,2,3,4,3,2,1]
// Sample output - [1,2,3,4]

const dups = (array) => {
  var arr1 = [];

  //loops through the array values
  for (i = 0; i < array.length; i++) {
    if (arr1.indexOf(array[i]) === -1) {
      console.log(arr1);
      arr1.push(array[i]);
    }
  }
  return arr1;
};
var arr = [1, 2, 3, 4, 3, 2, 1];
console.log(dups(arr));
