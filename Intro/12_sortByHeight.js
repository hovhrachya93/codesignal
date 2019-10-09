// Some people are standing in a row in a park. 
// There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights
// in a non-descending order without moving the trees. 
// People can be very tall!

function sortByHeight(a) {
    let indexOfArray = 0;
  
    const array = a.filter((elmt) => { 
      if (elmt !== -1) {
        return elmt;
      }
    }).sort((a, b) => a - b); 
  
    for (let i = 0; i < a.length; i++) { 
      if (a[i] !== -1) {
        a[i] = array[indexOfArray];
        indexOfArray++
      }
    }
  
    return a;
  }
  


//   function sortByHeight(a) {
//     var s = a.filter(h => h > 0).sort((a, b) => a - b)
//     return a.map(p => {
//         if (p !== -1) {
//             return s.shift();
//         }   
//         return -1;
//     })
// }