// Question - 3
// Find the Vowels
// This is probably one of the less challenging challenges (no pun intended) — in terms of difficulty — but that doesn’t detract from the fact that you could come across it during a job interview. It goes like this.
// Understanding the challenge
// You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.
// The vowels are “a”, “e”, “i”, “o”, “u”.
// Examples:
// findVowels('hello') // --> 2
// findVowels('why') // --> 0

const findVowels = (str) => {
  let str1 = str.replace(/[^\w]/g, "").toLowerCase();
  let vowel_list = "aeiou";
  let count = 0;

  for (i = 0; i < str1.length; i++) {
    if (vowel_list.indexOf(str1[i]) !== -1) {
      count++;
    }
  }
  return count;
};

console.log(findVowels("hello"));
console.log(findVowels("why"));
console.log(findVowels("A@T#A%N*U"));
