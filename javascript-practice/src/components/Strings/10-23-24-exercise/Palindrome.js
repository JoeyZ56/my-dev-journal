/*
Write a function that checks if a given string is a palindrome 
(reads the same forward and backward, ignoring spaces and capitalization).

Hint:
	•	Use toLowerCase() and replace() to clean the input.
	•	Use split(), reverse(), and join() to compare the string to 
        its reversed version.

EX:
isPalindrome("A man a plan a canal Panama"); 
true
*/

const isPalindrome = (str) => {
  const cleanInput = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedInput = cleanInput.split("").reverse().join("");

  if (reversedInput === cleanInput) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("tomatoes"));
