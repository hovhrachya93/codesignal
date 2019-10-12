// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
    const chars = inputString.split('');
    const charCount = {};
    let countOdd = 0;

    for (let char of chars) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            countOdd++;
        }
    }

    return countOdd > 1 ? false : true;
}


// function palindromeRearranging(inputString) {
//     return inputString.split('').sort().join('').replace(/(\w)\1/g,'').length < 2; 
// }

