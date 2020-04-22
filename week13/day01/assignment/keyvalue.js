// Question - 3

// Create a function that takes an object and returns the keys and values as separate arrays.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

let keysAndValues = (obj) => {
  let keys = [];
  let values = [];
  for (key in obj) {
    keys.push(key);
    values.push(obj[key]);
  }
  return [keys, values];
};

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { a: "Apple", b: "Microsoft", c: "Google" };
let obj3 = { key1: true, key2: false, key3: undefined };

console.log(keysAndValues(obj1));
console.log(keysAndValues(obj2));
console.log(keysAndValues(obj3));
