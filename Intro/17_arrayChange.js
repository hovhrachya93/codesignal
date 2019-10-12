// You are given an array of integers. On each move you are allowed
// to increase exactly one of its element by one. Find the minimal 
// number of moves required to obtain a strictly increasing sequence
// from the input.

function arrayChange(inputArray) {
    let count = 0;
  
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] >= inputArray[i + 1]) {
        const diff = (inputArray[i] + 1) - inputArray[i + 1];
        inputArray[i + 1] = inputArray[i] + 1;
        count += diff;
      }
    }
  
    return count;
  }
  

  // function arrayChange(inputArray) {
//     return inputArray.reduce(function(x,b,i,a){
//         while(b>=a[i+1]){x++;a[i+1]++;};
//         return x;
//     },0)
// }
