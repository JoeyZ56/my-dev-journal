/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of 
the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a 
new string with all vowels removed.

For example, the string "This website is for losers LOL!" 
would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let newStr = str.replace(/[aeiou]/gi, "");
  return newStr;
}

/*
    Approach:
    - Use the replace method to remove all vowels from the string.
    - The first parameter is a regular expression that matches all vowels.
    - The second parameter is an empty string.
    - The 'g' flag is used to replace all occurrences of the vowels.
    - The 'i' flag is used to make the regular expression case-insensitive.
    - Return the new string.
*/
