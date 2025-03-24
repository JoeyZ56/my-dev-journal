/*
Exercise 2: Count Vowels and Consonants

Write a function that takes a string and returns an object with the 
count of vowels and consonants.

Example Input:

"JavaScript"

Example Output:
    { vowels: 3, consonants: 7 }

	•	Use regex to match vowels: /[aeiou]/i.
	•	Use regex to match consonants: /[a-z]/i (ignoring vowels).
	•	Loop through the string and increment the counts.
*/

const counter = (str) => {
  const obj = { vowels: 0, consonants: 0 };
  const vowelRegex = /[aeiou]/i;
  const consonantRegex = /[a-z]/i;

  const splitStr = str.split("");

  //for loop
  for (let i = 0; i < splitStr.length; i++) {
    let char = splitStr[i];

    if (vowelRegex.test(char)) {
      obj.vowels += 1;
    } else if (consonantRegex.test(char)) {
      obj.consonants += 1;
    }
  }
  return obj;
};

console.log(counter("JavaScript")); // { vowels: 3, consonants: 7 }
console.log(counter("Hello World!")); // { vowels: 3, consonants: 7 }
console.log(counter("123 !")); // { vowels: 0, consonants: 0 }
