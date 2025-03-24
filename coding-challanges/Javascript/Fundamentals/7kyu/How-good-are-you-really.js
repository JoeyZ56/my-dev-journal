/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than 
the average student in your class.

You receive an array with your peers' test scores. 
Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = classPoints.reduce((a, b) => a + b, 0);
  let average = sum / classPoints.length;
  return yourPoints > average;
}

/*

    Approach:
    1. Calculate the sum of all the elements in the array
    2. Calculate the average of the elements in the array
    3. Compare the average with the yourPoints
    4. Return true if yourPoints is greater than the average, else false

    What I learned:
    1. reduce() function can be used to calculate the sum of all elements in an array
    2. length property can be used to get the length of an array
    3. Comparison operators can be used to compare two numbers
    4. Return statement can be used to return a value from a function

    */
