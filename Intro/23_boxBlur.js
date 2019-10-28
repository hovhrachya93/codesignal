// Last night you partied a little too hard.
// Now there's a black and white photo of you that's about to go viral!
// You can't let this ruin your reputation, so you want to apply 
// the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers.
// The algorithm distorts the input image in the following way:
// Every pixel x in the output image has a value equal to the average
// value of the pixel values from the 3 × 3 square that has its center at x, 
// including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.

function boxBlur(image) {
    var x = image[0].length - 2;
    var y = image.length - 2;
    var b = new Array(y);
    
    for(var i = 0;i < y;i++){
        b[i] = new Array(x);
        for(var j = 0;j < x;j++){
            b[i][j] = image[i][j] + image[i][j+1] + image[i][j+2] +
                      image[i+1][j] + image[i+1][j+1] + image[i+1][j+2] +
                      image[i+2][j] + image[i+2][j+1] + image[i+2][j+2];
            b[i][j] = Math.floor(b[i][j] / 9);
        }
    }
    return b;
}



// const boxBlur = I => {
//     var B = I.slice(1,-1).map(e=>e.slice(1,-1))
//     return B.map((row,i) =>
//         row.map((elem,j) => {
//             var sum = 0
//             for(var x=0;x<3;++x)
//                 for(var y=0;y<3;++y)
//                     sum += I[i+x][j+y]
//             return sum/9|0
//         })
//     )
// }

