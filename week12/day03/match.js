// Question - 5

// Write a function that validates whether two strings are identical. Make it case insensitive.
// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false

function match(str1, str2) {
  var first_str = str1.toLowerCase();
  var sec_str = str2.toLowerCase();

  if (first_str === sec_str) {
    return true;
  } else {
    return false;
  }
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
