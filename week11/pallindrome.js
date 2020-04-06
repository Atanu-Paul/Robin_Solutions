// Write a program to check if the input is a palindrome or not, return True if it's a palindrome else false

function palindrome(str) {
  const expression = /[\W]/g;
  let lowerCase = str.toLowerCase().replace(expression, "");
  var reverseStr = lowerCase.split("").reverse().join("");
  console.log(reverseStr);
  if (reverseStr === lowerCase) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("Atanu"));
