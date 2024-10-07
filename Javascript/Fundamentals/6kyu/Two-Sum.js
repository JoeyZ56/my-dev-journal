/*
Write a function that takes an array of numbers (integers for the tests) and 
a target number. It should find two different items in the array that, 
when added together, give the target value. The indices of 
these items should then be returned in a tuple / 
list (depending on your language) like so: (index1, index2).

EX.
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

/*
    Approach:
    Create a loop for the first number in the array.
        -"i" is equal to the 0 index of the array.
        -"i" is less than the length if the array
        -Increment "i" by 1.
    Nest a second loop for the second number in the array.
        -"j" is equal to "i" plus 1.
        -"j" is less than the length of the array.
        -Increment "j" by 1.
    Create an if statement 
        - if numbers[i] "index 0" + numbers[j] "index 1" is equal to the target
    Return the index of the two numbers.
        -Return the index of the first number "i", and the index of the second number "j".
    Return null if there is no match.
*/
