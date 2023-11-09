// Array sorting
// Put the array in order of least to greatest using any sort algorithm without using the sort() method.

// Bubble Sort - compares two adjacent elements. If they're not in order, then they are swapped. This loops through the array until it is complete.
const sampleArray = [9, 2, 7, 12];
const sampleArray2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];

function bubbleSort(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
    // outer loop has -1 length because we don't want to move ahead of the other loop
    for (let j = 0; j < arrayOfNumbers.length - i - 1; j++) {
      // compare the first two adjacent elements. Is the first element greater than the second element?
      if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
        // if it is, swap places
        let temp = arrayOfNumbers[j];
        arrayOfNumbers[j] = arrayOfNumbers[j + 1];
        arrayOfNumbers[j + 1] = temp;
      }
    }
  }
  return arrayOfNumbers;
}

console.log(bubbleSort(sampleArray));

// --------------------------------------------------------------------------------------
// function sortFromLeastToGreatest(arrayOfNumbers) {
//   for (let j = 0; j < arrayOfNumbers.length; j++) {
//     // holders for the round
//     let minimum;
//     // sets the current first number to "minimum"
//     minimum = arrayOfNumbers[j];

//     // checks through all the numbers
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//       if (arrayOfNumbers[i] < minimum) {
//         // if the number we're looking at now is smaller than minimum, it is the new minimum
//         minimum = arrayOfNumbers[i];
//       }
//       let temp = arrayOfNumbers[j];
//       arrayOfNumbers[j] = array[]
//     }
//   }
//   return sortedArray;
// }
