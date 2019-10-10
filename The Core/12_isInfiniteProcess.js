//   Given integers a and b, determine whether the following
// pseudocode results in an infinite loop


function isInfiniteProcess(a, b) {
    if (a % 2 !== 0 && b % 2 === 0) return true;
    if (a % 2 === 0 && b % 2 !== 0) return true;
    if (a > b) return true;
    return false;
}


// function isInfiniteProcess(a, b) {
//     return a > b || a % 2 != b % 2;
// }

// function isInfiniteProcess(a, b) {
//     return b < a ? true : (b - a) % 2 == 1 ? true : false;
// }




