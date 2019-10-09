// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first
// half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    n = n.toString();
    let divide = n.length / 2;
    let firstHalf = n.substring(0, divide)
        .split("")
        .reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        });
    let secondHalf = n.substring(divide, n.length)
        .split("")
        .reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        });
    return firstHalf === secondHalf;
}
