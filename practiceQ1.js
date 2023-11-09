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
function replaceSpaces2(string) {
  let modifiedString = "";
  // Look at each character of string.
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) === 32) {
      modifiedString += "%20"; // If character is not charCode 32 -- a space, concatenate into new String
    } else {
      modifiedString += string[i]; // If string happens to be charCode 32 -- a space, concatenate "%20"
    }
  }
  return modifiedString; // Return this string
}

console.log(replaceSpaces2("Jasmine Ann Jones"));
