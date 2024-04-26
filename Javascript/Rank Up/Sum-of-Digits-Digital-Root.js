/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

const { defineRoute } = require("expree");

function digitalRoot(n) {
  return n < 10 ? n : digitalRoot([...n.toString()].reduce((a, b) => +a + +b));
}

/*
  Approach:
    - We can convert the number n to a string, then split it into an array of digits.
    - We can use the reduce() method to sum all the digits in the array.
    - If the sum is a single-digit number, we can return it.
    - Otherwise, we can recursively call the digitalRoot() function with the sum as the argument.

What is the reduce() method?
    - The reduce() method executes a reducer function (that you provide) on each element of the array, 
    resulting in a single output value.

What is the spread operator (...)?
    - The spread operator (...) allows an expression to be expanded in places where multiple arguments 
    (for function calls) or multiple elements (for array literals) are expected.

What is the ternary operator (?:)?
    - The ternary operator is a conditional operator that returns one of two values based on a condition.
    - It is often used as a shorthand for if-else statements.
  */
