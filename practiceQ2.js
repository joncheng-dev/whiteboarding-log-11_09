const toBeFiltered = [7, 9, "hi", 12, "hi", 7, 53];
// Using Set -------------------------------------------------------------

function removeDuplicatesWSet(anArrayOfValues) {
  const duplicatesRemoved = new Set(anArrayOfValues); // Set returns an object of unique elements
  // {7, 9, "hi", 12, 53};
  return [...duplicatesRemoved]; // Spread operator converts the object results into an array
}

console.log(removeDuplicatesWSet(toBeFiltered));
// Using Filter ----------------------------------------------------------

function removeDuplicatesWFilter(anArrayOfValues) {
  // indexOf() method returns the first index at which a given element can be found in the array
  return anArrayOfValues.filter((item, index) => anArrayOfValues.indexOf(item) === index); // compares the current value with its 'indexOf'
}
// filters out all values that do not match their index.

// console.log(toBeFiltered.indexOf(7)); // 0
// console.log(toBeFiltered.indexOf("hi")); // 2

// expected results: [7, 9, "hi", 12, 53]
// console.log(removeDuplicatesWFilter(toBeFiltered));
// -------------------------------------------------------------

// Using Recursion
function removeDupesRecursive(string) {
  // termination case
  if (typeof string != "string") {
    return;
  }
  // base case
  if (string === "") {
    return "";
  } else if (string.indexOf(" ") != -1) {
    // if there IS a space
    return string.slice(0, string.indexOf(" ")) + "%20" + replaceSpaces(string.slice(string.indexOf(" ")).trim());
  } else {
    return string;
  }
}
