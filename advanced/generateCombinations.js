/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
function generateCombinations(numbers) {
    const combinations = [];
    function generate(currentCombination, index) {
      if (currentCombination.length > 0) {
        combinations.push([...currentCombination]);
      }
      for (let i = index; i < numbers.length; i++) {
        currentCombination.push(numbers[i]);
        generate(currentCombination, i + 1);
        currentCombination.pop();
      }
    }
    generate([], 0);
    return combinations.sort((a, b) => a.length - b.length || a[0] - b[0]);
  }
module.exports = generateCombinations;
