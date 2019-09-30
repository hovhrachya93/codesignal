// Given an array of strings, 
// return another array containing
// all of its longest strings.

function allLongestStrings(inputArray)
{
  var largest = inputArray[0].length;

  for(var i = 1; i < inputArray.length; i++)
  {
    if (largest < inputArray[i].length)
    {
        largest = inputArray[i].length;
    }
  }

  inputArray = inputArray.filter((elmt) =>
  {
    return elmt.length === largest;
  });

  return inputArray;
}


