// See if all characters in a string are unique

// loop through each character.
// consider the character at current index. See if the remaining string "includes" this character
// if it does, return false;
// if not, keep searching

const searchString = "hello";
const searchString2 = "copyright";
const searchString3 = "abcdefg";
const searchString4 = "987654321";
const searchString5 = "abcdefg212";

// Solution ------------------------------------------------------------------------------------------
function checkForUniqueness(someString) {
  let string = someString.toLowerCase();
  console.log(string);
  for (let i = 0; i < string.length; i++) {
    if (string.substring(i + 1).includes(string[i])) {
      return false;
    }
  }
  return true;
}
// Solution ------------------------------------------------------------------------------------------

const testString = "hello";
const testString2 = "";
// console.log(`${testString} Substring 0: ${testString.substring(0)}`);
// console.log(`${testString} Substring 1: ${testString.substring(1)}`);
// console.log(`${testString} Substring 2: ${testString.substring(2)}`);
// console.log(`${testString} Substring 3: ${testString.substring(3)}`);
console.log(checkForUniqueness(testString));
