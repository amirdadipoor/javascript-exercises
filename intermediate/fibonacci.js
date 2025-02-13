/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
function fibonacci(num) {
  let a = 0; //1st
  let b = 1; //2nd
  let c; //c = a + b , a = b , b = c
  let pushedArr = [];
  pushedArr.push(a);
  pushedArr.push(b);
  for (let i = 2; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
    pushedArr.push(c);
  }
  return pushedArr;
}

module.exports = fibonacci;
