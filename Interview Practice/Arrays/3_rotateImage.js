//  You are given an n x n 2D matrix that represents an image.
// Rotate the image by 90 degrees (clockwise).

function rotateImage(a) {
    var temp = [],
        len = a.length;
    for (let i = 0; i < len; i++) {
        temp[i] = [];
        for (let j = 0; j < len; j++) {
            temp[i][j] = a[i][j];
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            a[i][j] = temp[len - 1 - j][i];
        }
    }
    return a;
}


// const rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())


// function rotateImage(a) {
//     for(var i = 0;i<a.length;i++){
//         for(var j = 0;j<i;j++){
//             a[i][j] ^= a[j][i]
//             a[j][i] ^= a[i][j]
//             a[i][j] ^= a[j][i]
//          }
//     }
//     for(var i in a){
//         a[i] = a[i].reverse()
//     }  
//     return a
// }
