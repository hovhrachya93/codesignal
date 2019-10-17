// Given an array of integers, 
// find the maximal absolute difference
// between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = Math.abs(inputArray[0] - inputArray[1]);
  
    for (var i = 1; i < inputArray.length; i++) {
      var diff = Math.abs(inputArray[i - 1] - inputArray[i]);
  
      maxDiff = (diff > maxDiff) ? diff : maxDiff;
    }
    return maxDiff;
  }


// function arrayMaximalAdjacentDifference(arr) {
//   return Math.max(...arr.slice(1).map((x,i)=>Math.abs(x-arr[i])))
// }