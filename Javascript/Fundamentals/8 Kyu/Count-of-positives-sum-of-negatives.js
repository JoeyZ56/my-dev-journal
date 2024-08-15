/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else {
      sum += input[i];
    }
  }
  return [count, sum];
}

/*
    Approach:
    1. Check if the input is null or an empty array. 
    2. Write an if statement to return an empty array if it is.
    3. Initialize two variables, count and sum, to 0.
    4. Write a for loop to iterate through the input array.
    5. Write an if statement to check if the current element is greater than 0. Increment count if it is.
    6. Write an else statement to add the current element to sum if it is less than 0.
    7. Return an array with count and sum.

    Learned:
    1. The count and sum variables are initialized to 0.
    2. The for loop iterates through the input array.
    3. The if statement checks if the current element is greater than 0. If it is, count is incremented.
    4. The else statement adds the current element to sum if it is less than 0.
    5. The function returns an array with count and sum.
  */
