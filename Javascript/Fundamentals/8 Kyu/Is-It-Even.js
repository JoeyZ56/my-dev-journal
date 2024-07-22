/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

function testEven(n) {
  if (Number.isInteger(n) && n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
  Approach:
    1. Check if the number is an integer and if it is divisible by 2.
    2. If it is, return true, else return false.

    Learned:
    1. The Number.isInteger() method determines whether the passed value is an integer.
    2. The % operator returns the remainder of the division of the two operands.
        A. Remainder is the integer left over after dividing one integer by another.
        B. Why % 2 === 0? Because if a number is divisible by 2, it remainder is always 0 "even".
           If the number is not divisible by 2, the remainder is always 1 "odd".

*/
