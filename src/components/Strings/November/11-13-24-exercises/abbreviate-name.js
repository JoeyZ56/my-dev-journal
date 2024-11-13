/*
Exercise 1: String - Abbreviate a Name

Create a function abbreviateName that takes a full name 
(a string with a first and last name) and 
returns the initials in uppercase with a period between them.

	•	Example Input: "john doe"
	•	Example Output: "J.D"

Solution Outline:
	1.	Split the name into two words.
	2.	Extract the first character of each word and convert to uppercase.
	3.	Return the initials separated by a period.
*/

const abbreviateName = (str) => {
  //split the string into words
  const words = str.split(" ");
  //map the words array to create new array
  const mappedWords = words.map((word) => word[0].toUpperCase());
  return mappedWords.join(".");
};

console.log(abbreviateName("John Doe"));
console.log(abbreviateName("marry jane"));
