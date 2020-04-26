// Question - 2
// A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.
// Understanding the challenge

// You can state this challenge in the following terms: write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

const anagram = (str1, str2) => {
  let str3 = str1.replace(/[^\w]/g, "").toLowerCase();
  let str4 = str2.replace(/[^\w]/g, "").toLowerCase();

  let compareSttr1 = str3.split("").sort().join("");
  let compareSttr2 = str4.split("").sort().join("");

  if (compareSttr1 === compareSttr2) {
    return true;
  } else {
    return false;
  }
};

console.log(anagram("fin@de$r", "Fr*ie%nd"));
console.log(anagram("hello", "bye"));
