// Given two strings, return true if they are anagrams of one another

// For example: Mary is an anagram of Army

// Logic :
// 1:If both the strings are of different lengths then they can not be permutations of each other. Hence, return false.
// 2:Sort both the strings.
// 3:Compare both the sorted strings.

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    var sortedStr1 = str1.split("").sort().join("").toLowerCase();

    var sortedStr2 = str2.split("").sort().join("").toLowerCase();

    return sortedStr1 === sortedStr2;
  }
};

console.log(anagram("Dog", "god"));
console.log(anagram("atanu", "AttainU"));
