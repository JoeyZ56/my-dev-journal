const { set } = require("mongoose");

const tags = ["Dinner", " dinner ", "Quick", "quick", "Healthy ", "healthy"];

/*
🧪 .filter() — Best when:
	•	You need more control over what’s considered a duplicate
(e.g., complex logic or conditions)
	•	You’re already doing other filtering at the same time
	•	You want to keep first appearances only (e.g., stable ordering)
*/

function tagCleaner() {
  const cleaned = tags.map((tag) => tag.trim().toLowerCase());

  const unique = cleaned.filter((tag, index) => cleaned.indexOf(tag) === index);

  return unique;
}

/*
🧰 Set — Best when:
	•	You just want to remove exact duplicates, fast and clean
	•	You don’t care about deduplication logic — equality is enough
	•	You want the shortest and most efficient code
*/
console.log(tagCleaner());

function tagCleaner2() {
  const cleaned1 = tags.map((tag) => tag.trim().toLowerCase());
  const unique1 = [...new Set(cleaned1)];

  return unique1;
}

console.log(tagCleaner2());

const rawInput = " Dinner, quick ,Healthy, dinner , QUICK, breakfast ";
/*
 	1.	Split the string into individual tags (by comma)
	2.	Clean whitespace + lowercase
	3.	Remove duplicates
	4.	Return a clean array of tags

 */

function tagCleaner3() {
  const splitTags = rawInput.split(",");

  const cleaned = splitTags.map((tag) => tag.trim().toLowerCase());

  /*The test() method of RegExp instances executes a 
  search with this regular expression for a 
  match between a regular expression and a specified string. 
  Returns true if there is a match; false otherwise.
  */
  const filtered = cleaned.filter((item) => /[a-z]/.test(item));

  const unique = [...new Set(filtered)];
  return unique;
}

console.log(tagCleaner3());
