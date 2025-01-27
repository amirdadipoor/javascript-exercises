/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here
function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();

    for (const item of arr) {
        if (seen.has(item) && !duplicates.includes(item)) {
            duplicates.push(item);
        } else {
            seen.add(item);
        }
    }
    return duplicates;
}

module.exports = findDuplicates;
