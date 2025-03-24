/*
Exercise 3: Convert Snake Case to Camel Case

Description:
Write a function that converts a snake_case string to camelCase. 
Snake case uses underscores (_) between words, while camel case capitalizes the 
first letter of every word except the first one.

EX:
snakeToCamel("hello_world_from_javascript"); // 'helloWorldFromJavascript'

Hints:

	•	Use split('_') to break the string into words.
	•	Capitalize the first letter of each word (except the first).
	•	Use join('') to put the words back together.
*/

const snakeToCamel = (str) => {
  const words = str.split("_");

  const toCamelCase = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return toCamelCase.join(" ");
};

console.log(snakeToCamel("hello_world_from_javascript"));
