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
    const result = [];
    function backtrack(start, currentCombination) {
        if (currentCombination.length > 0) {
            result.push([...currentCombination]);
        }
        for (let i = start; i < numbers.length; i++) {
            currentCombination.push(numbers[i]);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    backtrack(0, []);
    result.sort((a, b) => a.length - b.length || a.join(",") < b.join(",") ? -1 : 1);
    return result;
}
module.exports = generateCombinations;
