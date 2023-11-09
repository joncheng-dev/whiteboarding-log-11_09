// -------------------------------------------------------------
const toBeFiltered = [7, 9, "hi", 12, "hi", 7, 53];

// const filtered = toBeFiltered.filter((element) => );
// -------------------------------------------------------------
// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(anArrayOfValues) {
  // indexOf() method returns the first index at which a given element can be found in the array
  return anArrayOfValues.filter((item, index) => anArrayOfValues.indexOf(item) === index); // compares the current value with its 'indexOf'
}
// filters out all values that do not match their index.

console.log(toBeFiltered.indexOf(7)); // 0
console.log(toBeFiltered.indexOf("hi")); // 2

// expected results: [7, 9, "hi", 12, 53]
console.log(removeDuplicates(toBeFiltered));
