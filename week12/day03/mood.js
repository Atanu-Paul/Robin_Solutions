// Question - 2

// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Examples
// moodToday("happy") ➞ "Today, I am feeling happy"

// moodToday("sad") ➞ "Today, I am feeling sad"

// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(moods = "netural") {
  console.log(`Today, I am feeling ${moods}`);
}

moodToday("sad");

// function moodToday(moods) {
//     mood = `neutral`;
//     // console.log(arguments.length);
//     if (arguments.length == 0) {
//       console.log(`Today, I am feeling ${mood}`);
//     } else {
//       console.log(`Today, I am feeling ${moods}`);
//     }
//   }

//   moodToday("sad");
