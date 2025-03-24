/*
1. String Exercise: Capitalize Words in a Sentence

Write a function capitalizeWords that takes a sentence and 
capitalizes the first letter of each word in the sentence.
*/

/*
Sudo:
break the sentance into words with split(" ")
map the sentance
in the map find the first index with charAt(0) then uppercase it
concatinate with the rest of the sentance, removing the first letter with slice(1)
then lowercase it
return the words together with join(" ")
*/

const capitalizeWords = (str) => {
  const words = str.split(" ");
  //   console.log(words);
  const firstLetter = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  //   console.log(firstLetter);
  return firstLetter.join(" ");
};

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("a sentance of capatilzed words"));
