// Array sorting
// Put the array in order of least to greatest using any sort algorithm without using the sort() method.

function sortFromLeastToGreatest(arrayOfNumbers) {
  let minimum;
  let temp;
  minimum = arrayOfNumbers[j];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i + 1] < minimum) {
      minimum = arrayOfNumbers[i + 1];
    }
  }

  return sortedArray;
}
