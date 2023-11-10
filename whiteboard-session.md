# Problem
Checking for Uniqueness
Write an algo. that determines if all the elements in the string 
are unique. You may not convert the string into an array or use 
array methods to solve this problem. Return a boolean.

Conditions:
No spaces
Single words in string

Example input: 
--> "hello"  --> output of false (not all chars are unique)
--> "copyright" --> output of true (all chars are unique)

Case (lowercase/uppercase)
--> "heLlo" --> output of false (not all chars are unique)

Edge cases:
--> empty string possible
--> possible to get numbers

# Planning / Pseudocode
- taking in a string (one word) as an argument
- can be empty
- can include upper/lowercase characters

1. take in string
1a. check for empty? (return)
1b. check for upper/lower? (fix that) string.toLowerCase();

2. loop through all characters individually
- check the rest of the string for duplicates
- string.includes() --> does the string have the character?
---- "hello", check "h" with rest of substring "ello"
---- "ello", check "e" with the rest of substring "llo"
---- "llo", check "l" with the rest of "lo" (false)
-- if does, I will return false
-- if it does not, I will continue looping

3. if end the loop, but no duplicates have been found, return true
because all characters have only been used once.

# Code
function checkForUniqueness(someString) {   
  if(someString === ""){                    // check if empty str.
    return;
  }
  let string = someString.toLowerCase();    // all lowercase

  for(let i = 0; i < string.length; i++){   // hello
    if(string.substring(i + 1).includes(string[i])){
      return false;
    }
  }
  return true;      // copyright (has no duplicate chars)
}
