/*
Complete the function that accepts a string parameter, 
and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  // Go for it
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

/*
  Approach:
    - Split the string into an array of words
    - Loop through the array and reverse each word (mapxs)
    - Join the array back into a string
    - Return the string
  */
/*
    What I learned:
    - I learned how to use the split method to split a string into an array of words
    - I learned how to use the map method to loop through an array and apply a function to each element
    - I learned how to use the reverse method to reverse an array
    - I learned how to use the join method to join an array into a string
*/
