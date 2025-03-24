/*
Exercise 1: Title Case a Sentence

Write a function that takes a sentence and 
returns it in Title Case (every word capitalized).

Hint:
	•	Use split() to break the sentence into words.
	•	Use map() to apply charAt(0).toUpperCase() to each word.

    EX:
    titleCase("hello world from javascript"); 
    returns: "Hello World From Javascript"
*/

const TitleCase = (str) => {
  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
};

console.log(TitleCase("hello world im upskilling my javascript"));
