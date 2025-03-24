/*
String Exercise: Word Reverser

Write a function reverseWords that takes a string sentence and 
returns a new string with each word reversed, but the order of 
words should remain the same.

Instructions:
	1.	Split the sentence into words.
	2.	Reverse each word individually.
	3.	Join the words back together with spaces in between.
*/

const reverseWords = (str) => {
  return str
    .split(" ") //splits the sentance into words
    .map((word) => word.split("").reverse().join("")) //reverses each words
    .join(" "); //joins them back together into a sentance
};

console.log(reverseWords("Reversing this sentance"));
