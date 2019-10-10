//   You're given three integers, a, b and c. It is guaranteed
// that two of these integers are equal to each other.
// What is the value of the third integer?

function extraNumber(A, B, C) {
    if (A == B) return C;
    if (A == C) return B;
    return A;
}

// extraNumber = (a, b, c) => a == b ? c : a == c ? b : a

// function extraNumber(a, b, c) {
//     return (a ^ b) ^ c
// }