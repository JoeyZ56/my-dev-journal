/*
Exercise 2: Check if Two Strings are Anagrams

Description:
Write a function that checks if two strings are anagrams 
(contain the same characters in the same frequency, 
but potentially in a different order).

EX:
areAnagrams("listen", "silent"); //True

	•	Use split(), sort(), and join() to rearrange the strings.
	•	Compare the two rearranged strings to see if they are identical.
*/

const areAnagrams = (str1, str2) => {
  const words1 = str1.split("").sort().join("");
  const words2 = str2.split("").sort().join("");

  return words1 === words2;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("happy", "sad"));
