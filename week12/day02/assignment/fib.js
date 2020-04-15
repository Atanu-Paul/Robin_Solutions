// Write a function fib() that takes an integer n and return the nth Fibonacci number

const fib_number = (n) => {
  if (n < 2) {
    return n;
  }
  return fib_number(n - 1) + fib_number(n - 2);
};

console.log(fib_number(20));
