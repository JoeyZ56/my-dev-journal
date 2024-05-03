/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position 
in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  return x
    .split(" ")
    .map((word) =>
      word.split("").reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0)
    )
    .reduce((acc, score, index, arr) => (score > arr[acc] ? index : acc), 0);
}

/*
Approach:
    1. Create a function that takes a string of words as an argument
    2. Find the highest scoring word
    3. Return the highest scoring word as a string
    
    What I learned:
        - I learned to use the split() method to split the string into an array of words
        - I learned to use the map() method to iterate through the array of words
        - I learned to use the reduce() method to find the sum of the scores of the letters in a word
        - I learned to use the Math.max() method to find the highest scoring word
        - I learned to use the indexOf() method to return the word that appears earliest in the original string
    
        "split()": The split() method is used to split a string into an array of substrings, and returns the new array.
        "map()": The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        "reduce()": The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
        "Math.max()": The Math.max() function returns the largest of zero or more numbers.
        "indexOf()": The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/
