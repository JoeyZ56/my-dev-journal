/*
String Exercise: Reverse Each Word in a Sentence

Write a function reverseEachWord that takes a string as input and 
reverses each word individually, while keeping their original order in 
the sentence.
*/

const reverseEachWord = (str) => {
  // split the string into words
  const words = str.split(" ");
  // map the word in a new array
  const mapWord = words.map((word) => {
    //split the word into letters, reverse them, then join the words back together
    return word.split("").reverse().join("");
  });
  //return the words joined in a sentance
  return mapWord.join(" ");
};

console.log(reverseEachWord("reversing each word in a sentence"));

/*

	1.	Split the Sentence:
	•	str.split(" ") breaks the sentence into an array of words based on spaces.
	•	Example: "reversing each word in a sentence" 
        becomes ["reversing", "each", "word", "in", "a", "sentence"].

	2.	Reverse Each Word:
	•	.map() is used to transform each word in the array.
	•	word.split("").reverse().join(""):
	•	Splits the word into an array of letters.
	•	Reverses the array of letters.
	•	Joins the reversed letters back into a string.

	3.	Rejoin the Words:
	•	mapWord.join(" ") combines the reversed words back into a 
        single string with spaces between them.*/
