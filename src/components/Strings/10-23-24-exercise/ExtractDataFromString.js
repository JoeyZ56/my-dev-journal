/*
Write a function that extracts numbers from a string of mixed characters.

Hints:

	•	Use split() and filter() to find digits.
	•	Alternatively, challenge yourself with regular expressions.

EX.
extractNumbers("abc123def456"); 
"123456"
*/

const extractNumbers = (str) => {
  const splitStr = str.split("");
  const filterNumbers = splitStr.filter((num) => !isNaN(num));
  return filterNumbers.join("");
};

console.log(extractNumbers("abc123def456"));
