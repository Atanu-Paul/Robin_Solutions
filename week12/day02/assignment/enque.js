// implement stacks using plain arrays with push and pop functions
var stack1 = [];
var stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  stack1.push(element);
  return stack1;
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2

function Dequeue() {
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      return "Cannot dequeue because queue is empty";
    }
    while (stack1.length > 0) {
      var popping = stack1.pop();
      console.log("---->" + popping);
      stack2.push(popping);
    }
  }
  console.log(stack2);
  return stack2.pop();
}

console.log(Enqueue("a"));
console.log(Enqueue("b"));
console.log(Enqueue("c"));
console.log(Dequeue());
