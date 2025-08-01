/*
Goal:
Write a function that:
	1.	Takes in an array/list containing both numbers and strings.
	2.	If the item is a number and is positive, double it.
	3.	If the item is a string, convert it to uppercase.
	4.	Ignore everything else (negative numbers, booleans, None/null, etc.).
	5.	Return a new array/list with the transformed values.

    Example Input: [5, "hello", -3, "world", True, 7, None]

    Example Output: [10, "HELLO", "WORLD", 14]

    Process:
    create a function named mixedBagCleaner()
    loop through the array using forEach method. Why: to manipulate each index individually
    remove negative numbers, bools, or nulls by conditioning only positive numbers or strings to be allowed
    first if statement: if index is a number multiply by 2
    second if statement if index is a string .upperCase the string
    return 

*/

function mixedBagCleaner(arr) {
  const results = [];

  for (const items of arr) {
    if (typeof items === "number" && items >= 0) {
      //   console.log("First if:", results.push(items * 2));
      results.push(items * 2);
    } else if (typeof items === "string") {
      results.push(items.toUpperCase());
    }
  }
  console.log("Results:", results);
  return results;
}

console.log(mixedBagCleaner([9, true, -1, "false", 11]));
