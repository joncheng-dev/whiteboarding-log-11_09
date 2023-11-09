// Everytime there is a space, remove it, and add %20 instead.

// Ex Input: "Jasmine Ann Jones";
// Ex Output "Jasmine%20Ann%20Jones"

// Recursive Approach-------------------------------------------------------------
function replaceSpaces(string) {
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

// console.log(replaceSpaces("Jasmine Ann Jones"));

// Non-Recursive Approach-------------------------------------------------------------
