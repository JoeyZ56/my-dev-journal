/*
Summation
Write a program that finds the summation of every number 
from 1 to num. The number will always be a positive integer 
greater than 0. Your function only needs to return the result,
what is shown between parentheses in the example below is how 
you reach that result and it's not part of it, see the sample tests.

Example:
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
  // Code here
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += i + 1;
  }
  return sum;
};

/*
    Approach:
        - Create a variable to store the sum
        - Loop through the numbers from 1 to num
        - Add the numbers to the sum
        - Return the sum
    */
/*
   what I learned:
         - for loop (looping through the numbers from 1 to num)
         - += (addition assignment operator)

    What I need to work on:
    Committing to memory javascript methods and properties
   */
