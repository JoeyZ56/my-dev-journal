/*
Challenge

Write a function that:
	1.	Takes in an array containing numbers, strings, and other junk.
	2.	Keeps only the numbers that are positive.
	3.	Doubles each kept number.
	4.	Returns a new array of those doubled numbers in reverse order.

Input:
[3, "hello", -1, 7, null, 4]

Output:
[8, 14, 6]

Rules for this drill:
	•	❌ No .map(), .filter(), .reduce() — must use for...of.
	•	✅ Must do steps separately (filtering, then transforming, then reversing).
	•	✅ Handle edge cases: if there are no positive numbers, return an empty array.

Process:
create function multiStepArr()
create empty array for results = []
using a for..of loop, loop through the array 
if typeof === "number" && if number is >= 0
then push to results * 2
return results.reversed()

    */

function multiStepArr(arr) {
  const positive = [];
  const results = [];

  for (pos of arr) {
    if (typeof pos === "number" && pos >= 0) positive.push(pos);
    console.log("positives:", positive);
  }

  for (num of positive) {
    const doubled = num * 2;
    console.log("doubled:", doubled);
    results.push(doubled);
  }
  console.log("results:", results);
  return results;
}

console.log(
  "Finale results:",
  multiStepArr([3, "pepper", -9, null, 4, 7, 3, -12, "pickles"])
);
