/*
Write function bmi that calculates body mass index (bmi = weight / height2).

Examples:
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bmi = weight / (height * height);

  if (bmi <= 18.5) return "Underweight";
  if (bmi <= 25.0) return "Normal";
  if (bmi <= 30.0) return "Overweight";
  if (bmi > 30) return "Obese";

  return "Obese";
}

/*
    Approach:
        - Calculate the bmi
        - Return the bmi category
    */

/*
    what I learned:
        - if statements
        - return statement
        - bmi formula

        Felt like this one was just a simple if statement exercise
    */
