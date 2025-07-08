/*
🧠 Challenge: Number Type Sorter

Scenario:
You’re given a mixed array of numbers. You need to:
	1.	Separate even and odd numbers
	2.	Return an object with two arrays: one for even, one for odd
	3.	Sort each array in ascending order

    Input example:
[3, 12, 7, 4, 10, 5, 2, 9]
    Output example:
{
  even: [2, 4, 10, 12],
  odd: [3, 5, 7, 9]
}

🔧 Hints:
	•	Use .filter() to separate even/odd
	•	Use .sort() with a compare function
	•	Return { even: [...], odd: [...] }
*/

function numberTypeSorter(arr) {
  const obj = {};
  //attempting to filter through the array and push even numbers to the even array and odd numbers to the odd array
  const even = arr.filter((num) => num % 2 === 0); //finds the even numbers
  const odd = arr.filter((num) => num % 2 !== 0); //finds the odd numbers
  //sorting the numbers from least to greatest
  const sortEven = even.sort((a, b) => a - b); //sorted even numbers
  const sortOdd = odd.sort((a, b) => a - b); //sorted odd numbers

  obj.even = sortEven; //creates even parameter in obj and sets sortedEven to it
  obj.odd = sortOdd; // creates odd parameter in obj and sets sortedOdd to it

  return obj;
}

console.log("Results:", numberTypeSorter([3, 12, 7, 4, 10, 5, 2, 9]));
