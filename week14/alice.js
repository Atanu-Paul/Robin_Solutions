"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
  stdin_input += input;
});
process.stdin.on("end", function () {
  main(stdin_input);
});
Array.prototype.peek = function () {
  return this[this.length - 1];
};
Array.prototype.getLast = function () {
  return parseInt(this[this.length - 1]);
};
Array.prototype.setLast = function (x) {
  this[this.length - 1] = x;
};
Array.prototype.toString = function () {
  return this.join(" ");
};
Array.prototype.fromLast = function (x) {
  return this[this.length - 1 - x];
};
Number.prototype.compareTo = function (x) {
  if (x === this) return 0;
  else if (x > this) return -1;
  else return 1;
};
var Scanner = (function () {
  function Scanner(input) {
    this.token = 0;
    this.input = input.split("\n");
  }
  Scanner.prototype.next = function () {
    return this.input[this.token++];
  };
  Scanner.prototype.nextInt = function () {
    return parseInt(this.input[this.token++]);
  };
  Scanner.prototype.nextIntArray = function (delimiter) {
    var ans = this.input[this.token++].split(delimiter);
    var ansInt = [];
    for (var i = 0; i < ans.length; i++) {
      ansInt.push(+ans[i]);
    }
    return ansInt;
  };
  return Scanner;
})();
function main(input) {
  new Question(input);
}
var Question = (function () {
  function Question(input) {
    this.input = input;
    this.solve();
  }
  Question.prototype.solve = function () {
    var sc = new Scanner(this.input);
    var testCase = sc.nextInt();
    while (testCase-- > 0) {
      var n = sc.nextInt();
      var dp = [];
      for (var i = 0; i < n; i++) {
        var temp = [];
        for (var j = 0; j < 3; j++) {
          temp.push(0);
        }
        dp.push(temp);
      }
      var items = sc.nextIntArray(" ");
      dp[0][0] = items[0];
      dp[0][1] = items[1];
      dp[0][2] = items[2];
      for (var i = 1; i < n; i++) {
        var items_1 = sc.nextIntArray(" ");
        for (var j = 0; j < items_1.length; j++) {
          var c1 = 0,
            c2 = 0;
          if (j == 0) {
            c1 = items_1[j] + dp[i - 1][1];
            c2 = items_1[j] + dp[i - 1][2];
          } else if (j == 1) {
            c1 = items_1[j] + dp[i - 1][0];
            c2 = items_1[j] + dp[i - 1][2];
          } else if (j == 2) {
            c1 = items_1[j] + dp[i - 1][1];
            c2 = items_1[j] + dp[i - 1][0];
          }
          dp[i][j] = Math.min(c1, c2);
        }
      }
      var ans = Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
      console.log(ans);
    }
  };
  return Question;
})();
