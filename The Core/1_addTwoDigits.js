// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    return (n%10) + Math.floor(n/10);
}