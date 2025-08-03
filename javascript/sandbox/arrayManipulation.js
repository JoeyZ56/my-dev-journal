/*
Goal: Write a function that:
	1.	Takes in an array of numbers.
	2.	Returns a new array where each number is doubled.

    Thoughts:
    create a function numbersDoubled()
    focusing on array methods and Math double the each number in the array. 
    methods that can do that .map will allow me to create a new array with each index being able to be manipulated.
    in the map function i can multiply the map variable by 2 then return the map in a log to display the array doubled in a new array.

*/

function numberDoubled(arr) {
  const doubledArr = arr.map((doubled) => doubled * 2);

  return doubledArr;
}

console.log(numberDoubled([2, 4, 5, 8, 10]));
