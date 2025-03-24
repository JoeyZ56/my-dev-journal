/*
In a factory a printer prints labels for boxes. 
For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that 
the printer used three times color a, four times color b, one time color h then 
one time color a...

Sometimes there are problems: lack of colors, 
technical malfunction and a "bad" control string is produced e.g. 
aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will 
return the error rate of the printer as a string representing a rational 
whose numerator is the number of errors and the denominator the length of 
the control string. Don't reduce this fraction to a simpler expression.
*/

function printerError(s) {
  // your code
  let error = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] < "a" || s[i] > "m") {
      error++;
    }
  }
  return error + "/" + s.length;
}

/*
Approach:
1. Initialize a variable errors to 0
2. Iterate through the string
3. If the character is not between a to m, increment errors
4. Return errors and length of the string separated by /
5. Don't reduce the fraction
6. Return the result as a string

What I learned:
1. Comparison operators can be used to compare two characters
2. + operator can be used to concatenate strings
3. length property can be used to get the length of a string
4. Return statement can be used to return a value from a function
*/
