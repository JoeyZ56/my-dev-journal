/*
Prompt:
Write a function that takes an array of elements (numbers or strings) and returns the element that appears most frequently.
If there’s a tie, return any one of the most frequent elements.
*/

function mostFrequent(arr) {
  //create an empty objet that will hold our future data
  const obj = {};

  //using the mapping terminology that is NOT .map! use foreach to iterate over the array
  //What am I trying to build during this loop?
  //  i want to track how often each element appears.
  //how do i do that?

  arr.forEach((ele) => {
    //checks if object[ele] is NOT undefined (its been seen before)
    if (obj[ele] !== undefined) {
      //increment the count for this element
      obj[ele] = obj[ele] + 1;
    } else {
      // If this is the first time seeing ele, set its count to 1
      obj[ele] = 1;
    }
  });

  /*
What variables do I need to track the "most" thing?
    Maybe: maxCount and mostFrequent

What am I comparing in the loop?
    Each element’s count vs the current maxCount

What do I update when I find a new max?
    Set maxCount and mostFrequent to this element's values
  */

  let maxCount = 0;
  let mostFrequent = null;

  for (let key in obj) {
    // if the object[key] is greater than the maxCount, the key is the new maxCount
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      mostFrequent = key;
    }
  }
  return typeof arr[0] === "number" ? Number(mostFrequent) : mostFrequent;
}

console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // → 1
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana"]));
/*
Approach:
working with array methods

What is the goal?
    "return the element that appears the most/ 
    if multiple elements appear the same amount return any of the most frequent"

What data structures help us count things efficiently?
    mapping (aka not map!) works well iterating over a arrays

Once we have counts, how do we find the one with the highest count?
    a loop can work counting the elements and finding the most frequent one


*/
