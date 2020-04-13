// Write a simple JavaScript program to join all elements of the following        array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
let myColors = ["blue", "green", "red", "orange"];
let temp = myColors[0];
for (let i = 1; i < myColors.length; i++) {
  temp = temp.concat("+", myColors[i]);
}
console.log(temp);
