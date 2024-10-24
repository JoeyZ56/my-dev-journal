/*
Exercise 1: Reverse Words in a Sentence

Write a function that takes a sentence as input and returns the 
sentence with each word reversed, but the word order stays the same.

Example Input:

"Hello world from JavaScript"

Example Output:

"olleH dlrow morf tpircSavaJ"

Hints:

	•	Use split() to split the sentence into words.
	•	Reverse each word with split() -> reverse() -> join().
	•	Use join(" ") to rebuild the sentence.
*/

const reverseWords = (str) => {
  const lowerCaseWords = str.toLowerCase();
  const words = lowerCaseWords.split(" ");
  const reverseTheWord = words.map((word) => {
    return word.split("").reverse().join(" ");
  });
  return reverseTheWord.join(" ");
};

console.log(reverseWords("Testing reverse words"));
console.log(reverseWords("Can this work to?!"));
