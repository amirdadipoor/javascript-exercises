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
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    ];

    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
    ];

    const hundreds = [
        '', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',
    ];

    if (num === 0) return 'zero';

    let word = '';

    const hundred = Math.floor(num / 100);
    if (hundred > 0) {
        word += hundreds[hundred] + ' ';
        num %= 100;
    }

    if (num >= 20) {
        const ten = Math.floor(num / 10);
        word += tens[ten] + ' ';
        num %= 10;
    }

    if (num >= 10) {
        word += teens[num - 10];
    } else if (num > 0) {
        word += ones[num];
    }

    return word.trim();
}
module.exports = numberToWords;
