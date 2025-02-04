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

function fibonacci(n) {
    let sequence = [0, 1];
    let i = 2;

    while (i < n) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
        i++;
    }

    return sequence.slice(0, n);
}
module.exports = fibonacci;
