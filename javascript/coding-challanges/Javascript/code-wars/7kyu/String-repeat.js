/*
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

function repeatStr(n, s) {
  return s.repeat(n);
}

/*
  Approach:
    - We can use the repeat() method of the string object 
    to repeat the string n times.

What is the repeat() method?
    - The repeat() method constructs and returns a new string which 
    contains the specified number of copies of the string on which it was called, 
    concatenated together.
  */
