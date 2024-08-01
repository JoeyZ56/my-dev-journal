/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2.
*/

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

/*
    Approach:
    1. Combine the two strings s1 and s2.
    2. Convert the combined string to a set to remove duplicates.
    3. Convert the set back to an array and sort it.
    4. Join the array and return the result.


    Learned:
    1. Set is a collection of unique values.
    2. Set is used to remove duplicates from an array.
    3. Set can be converted to an array using Array.from() method.
    4. Set can be converted to an array using spread operator [...set].
  */
