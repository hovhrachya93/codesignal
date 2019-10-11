// Two arrays are called similar if one can be obtained from another by
// swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar

function areSimilar(a, b) {
  if (a.toString() == b.toString()) {
    return true;
  }
  
  var c = [];
  var d = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      c.push(a[i]);
      d.push(b[i]);
    }
  }

  d = d.reverse();

  if (c.length === 2 && (c.toString() == d.toString())) {
    return true;
  }
  return false;
}






