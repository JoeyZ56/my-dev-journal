/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
*/

function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

/*
    Approach:
    1. Return the time since midnight in milliseconds.
    2. Multiply the hours by 3600000 to convert hours to milliseconds. there are 3600000 milliseconds in an hour.
    3. Multiply the minutes by 60000 to convert minutes to milliseconds. there are 60000 milliseconds in a minute.
    4. Multiply the seconds by 1000 to convert seconds to milliseconds. there are 1000 milliseconds in a second.
    
*/
