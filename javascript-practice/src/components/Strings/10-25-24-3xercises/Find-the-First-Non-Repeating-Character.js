/*
Exercise 1: Find the First Non-Repeating Character

Description:
Write a function that takes a string as input and returns the 
first non-repeating character. If all characters are repeated, return null.

EX:
firstNonRepeating("abacabad");

	•	Use a for loop to iterate over the string.
	•	You can use indexOf() and lastIndexOf() to find repeating characters.
*/

const NonRepeatingCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
};

console.log(NonRepeatingCharacter("aabbcabbcfggtddq"));

/*
Sudo:
split the string into an array of individual strings


*/
