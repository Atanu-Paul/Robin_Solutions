//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

const fizz = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      console.log("number is:" + "--->" + i + "--->" + "RED-ALERT");
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("number is:" + "--->" + i + "--->" + "FIZZBUZZ");
    }
    if (i % 3 === 0) {
      console.log("number is:" + "--->" + i + "--->" + "FIZZ");
    }
    if (i % 5 === 0) {
      console.log("number is:" + "--->" + i + "--->" + "BUZZ");
    }
  }
};

fizz();


