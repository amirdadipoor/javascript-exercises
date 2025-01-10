/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here
function factorial(num) {
  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp = temp * i;
  }
  return temp;
}
module.exports = factorial;
