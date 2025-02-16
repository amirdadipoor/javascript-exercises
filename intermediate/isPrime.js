/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here
const isPrime = (number ) => {
    if(number === 2 || number === 3){
        return true
    }else if (number % 2 === 0 || number % 3 === 0 || number === 1 || number === 0){
        return false
    }else{
        return true
    }
}
module.exports = isPrime;
