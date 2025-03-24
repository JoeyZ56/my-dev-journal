/*
Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

/*
  Approach:
    1. Check if the number is divisible by 2
    2. If the number is divisible by 2, return "Even"
    3. Otherwise, return "Odd"

    What I learned:
        - I learned to use the modulo operator to check if the number is divisible by 2
        - I learned to use the if statement to check if the number is divisible by 2
        - I learned to use the else statement to return "Odd" if the number is not divisible by 2

        "%": The remainder (%) operator returns the remainder left over 
        when one operand is divided by a second operand. 
        It always takes the sign of the dividend.
  */
