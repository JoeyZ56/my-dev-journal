/*
 Objective: Write a function that takes a string as an input and 
 returns an object with the frequency of each character in the string 
 (ignoring spaces and treating uppercase and lowercase letters as the same).

Details:

	•	The function should be called characterFrequency.
	•	It should take one parameter: a string (e.g., "JavaScript Rocks!").
	•	The function should return an object where the keys are characters 
        (letters and numbers) and the values are the number of 
        times each character appears in the string.
 */

const characterFrequency = (string) => {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (char !== " ") {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
};

console.log(characterFrequency("This one was really freaking hard!!!"));

/*
Approach:
1. Create an empty object [obj] to store the character counts.
2. Create a for loop to iterate through each character in the string.
3. Set a variable "char" to hold the current character, converting it to lowercase to ensure the count is case-insensitive.
4. Add an if statement to check if "char" is an empty space. If it is, skip it.
5. Create an if/else statement to check if the object already has a property for the current character (obj[char]):
    - If it does, increment its count by 1.
    - If it doesn't, set its count to 1.

    note to self: stop forgetting about bracket notation dumby!
*/
