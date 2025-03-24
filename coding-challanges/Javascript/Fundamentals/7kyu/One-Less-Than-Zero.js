/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

*/

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

/**
  Approach:
  1. Convert the array to a string.
  2. Convert the string to an integer using parseInt.
  3. Return the integer.
 
 */
