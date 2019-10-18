//  Given an array a that contains only numbers in the range from 1 to a.length,
// find the first duplicate number for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers, for which the second
// occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.

function firstDuplicate(a) {
  for (var i = 0; i < a.length; i++) {
    var num = a[i];
    if (a[Math.abs(num) - 1] > 0) {
      a[Math.abs(num) - 1] = -1 * a[Math.abs(num) - 1];
    } else {
      return Math.abs(num);
    }
  }

  return -1;
}


// firstDuplicate = a => {
//   r = new Set()
//   for (e of a)
//       if (r.has(e))
//           return e
//       else
//           r.add(e)
//   return -1
// }
