/*
Exercise 3: Find the Longest Word in a Sentence

Write a function that takes a sentence as input and 
returns the longest word.

Example Input:

"I love programming in JavaScript"

Example Output:

"programming"

Hints:

	•	Use split(" ") to break the sentence into words.
	•	Loop through the words and compare their length to find the longest one.
	•	You could also use reduce() for a more advanced solution.

*/

const longestWord = (str) => {
  let longest = "";
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};

console.log(longestWord("the longest word in this sentance is"));
