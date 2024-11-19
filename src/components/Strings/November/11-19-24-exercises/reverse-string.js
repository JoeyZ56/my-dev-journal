/*
String Exercise: Reverse a String

Write a function that takes a string as input and returns the string reversed.
*/

const reversedString = (str) => {
  const words = str.split(" "); //split into words
  const mappedWords = words.map((word) => {
    return word.split("").reverse().join(""); //split the words into letters then reverse the letters, then join the words back together
  });
  return mappedWords.join(" "); //return the letters reveresed and joined back together
};

console.log(reversedString("reversed words"));

/*
pseudo:

input: Working with strings 
Output: i need to reverse the given string

problem:
1. create a function "reverseString" set its param to "str"
2. create a varable, and split the stirng into words
3. create another variable, that holds the "map method" to create a new array
4. in the map method, split the words into individual letters then
    reverse their index position, then join the letters back together
5. return the map variable with the words joined
*/
