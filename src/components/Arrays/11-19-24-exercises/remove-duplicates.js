/*
Array Exercise: Remove Duplicates

Write a function that takes an array as input and returns a 
new array with duplicate elements removed.
*/

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
console.log(removeDuplicates(["apple", "apple", "orange", "grape", "grape"]));

/*
pseudo:

dealing with Arrays
Output: remove duplates in a given array

Set(): A Set is a built-in JavaScript object that stores unique values, 
ensuring no duplicate entries. It can store values of any type, 
whether primitive values (like numbers or strings) or object references.

1. Create a function and set its parameter to "arr".
2. Use the "Set" object to remove duplicates from "arr".
3. Convert the "Set" back into an array using the spread operator ([...]).
4. Return the resulting array with duplicates removed.
*/
