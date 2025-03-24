/*
Challange: List Filtering
Create a function that takes a list of non-negative integers and 
strings and returns a new list with the strings filtered out.

Example:
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  // Return a new array with the strings filtered out

  let newArr = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      newArr.push(l[i]);
    }
  }
  return newArr;
}

/*
  Approach:
    - Create a new array to store the integers
    - Loop through the array
    - Check if the element is an integer
    - If it is an integer, push it to the new array
    - Return the new array  
*/

/* 
The typeof operator is used to get the data type

    What I learned:
        - typeof operator
        - for loop
        - push method

    What I need to work on:
    Thinking more critically about the problem 
    before starting to code

*/
