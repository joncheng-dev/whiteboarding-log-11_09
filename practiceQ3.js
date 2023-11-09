// Take a string with repeated characters
// Convert to "compressed" --> "aaa", becomes "3a"
// Return it

// SOLVE USING RECURSION
// SOLVE WITHOUT RECURSION

function compressedString(string) {
  let convertedString = "";
  let repeatCounter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      // if letter does repeat, then +1 to counter
      repeatCounter++;
    } else if (string[i] !== string[i + 1] && repeatCounter === 1) {
      // if letter does not repeat, just add to string
      convertedString += string[i];
      repeatCounter = 1;
    } else {
      // if letter does not repeat, add what we have so far for repeatCounter and letter
      convertedString += repeatCounter + string[i];
      repeatCounter = 1;
    }
  }
  return convertedString;
}

console.log(compressedString("aaabccdddda"));
