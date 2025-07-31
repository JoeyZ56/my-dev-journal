/*
Goal:
Write a function that:
	1.	Takes in a list/array of numbers (positive and negative).
	2.	Removes any negative numbers.
	3.	Returns a new list/array where the remaining numbers are doubled.

⸻

Requirements:
	•	You can only loop through the array/list once (so no .filter() then .map() separately in JS — combine the logic).
	•	Plan before you code — write your thought process, then attempt.

Process:
Create an empty array called result.
Loop through arr with a for…of loop (or .forEach() if you want functional style).
If the number is >= 0, multiply by 2 and push to result.
Return result.
input: [5, -1, 3, 7, -10, 33]
output: [10, 6, 14, 66]

*/

function cleanedAndDoubledArr(arr) {
  const results = [];
  // for of, looping through the length of arr
  for (const num of arr) {
    if (num >= 0) results.push(num * 2);
  }

  return results;
}
console.log(cleanedAndDoubledArr([5, -1, 3, 7, -10, 33]));
