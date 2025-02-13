/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

function numberToWords(num) {
    let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num < 10) {
        return ones[num];    
    } else if (num < 20) {
        return teens[num - 10]; 
    } else if (num < 100) {
        return tens[Math.floor(num / 10)] + (num % 10 === 0 ? "" : " " + ones[num % 10]);
    } else if (num < 1000) {
        return ones[Math.floor(num / 100)] + " hundred" + (num % 100 === 0 ? "" : " " + numberToWords(num % 100));
    }

    return "Number too large!";
}

module.exports = numberToWords;
