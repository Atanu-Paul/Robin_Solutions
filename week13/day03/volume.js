// Question - 4

// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

const volumeOfBox = (obj) => {
  let result = obj.width * obj.height * obj.length;
  return result;
};

let obj = { width: 2, length: 5, height: 1 };
console.log(volumeOfBox(obj));
