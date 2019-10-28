// You are given an array of integers representing coordinates
// of obstacles situated on a straight line. Assume that you 
// are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length
// represented by some integer. Find the minimal length 
// of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a, b) => a - b);
    const largestValue = inputArray[inputArray.length - 1];
    for (let i = 1; i <= largestValue + 1; i++) {
      if (inputArray.every((elmt) => elmt % i !== 0)) {
        return i;
      }
    }
  }
  

// function avoidObstacles(arr) {
//   for(var n=1;;n++) if(arr.every(x=>x%n)) return n
// }


// function avoidObstacles(inputArray) {
//   var jump = 2;
//   while (inputArray.some((obstacle) => obstacle % jump == 0)) {
//     jump++;
//   }
//   return jump;
// }



// const A = avoidObstacles = (a,j) => 
//     (
//         j=-~j, 
//         a.every(e=>e%j) ? j : A(a,j)
//     )