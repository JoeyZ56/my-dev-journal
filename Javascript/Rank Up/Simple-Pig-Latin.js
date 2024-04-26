/*
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  //Code here
  return str
    .split(" ")
    .map((word) => {
      if (word.match(/[a-zA-Z]/)) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}

/*
  Approach:
    - We can split the string into an array of words using the split() method.
    - Then, we can use the map() method to iterate over each word in the array.
    - For each word, we can check if it is a word or a punctuation mark.
    - If it is a word, we can move the first letter to the end of the word and add "ay" to the end.
    - If it is a punctuation mark, we can leave it as it is.
    - Finally, we can join the array of words back into a string using the join() method.

What is the split() method?
    - The split() method is used to split a string into an array of substrings, 
    and returns the new array.

What is the map() method?
    - The map() method creates a new array with the results of calling a provided function 
    on every element in the calling array.

What is the join() method?
    - The join() method is used to join all elements of an array into a string.
  */
