var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  const arr = [];
  const itArr = typeof iterable === "string" ? iterable.split("") : iterable;

  itArr.forEach((item, index) => {
    if (item !== itArr[index - 1]) {
      arr.push(item);
    }
  });
  return arr;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

/*
Approach: 
  1. create an empty array to push the new array too
  2. conver the string to an array of strings or numbers
  3. using the forEach method to iterate over the entire converted array
  4. if the new arr does not equal the index minus one, then push to the newly created array
  5. return the new array 

*/
