/*
Object Exercise: Count Properties

Write a function that takes an object as input and returns the 
number of properties (key-value pairs) it contains.
*/

const myObj = {
  sentance: "Hello world!",
  type: "object",
  num: 3,
};

const countProperties = (obj) => {
  return Object.keys(obj).length;
};

console.log(countProperties(myObj));

/*
pesudo:

working with objects
Output: return the NUMBER of key value pairs in the object

keys(): The keys() method of Array instances returns a 
        new array iterator object that contains the keys for 
        each index in the array.

Solution:
1. Create a function named "countProperties" and set its parameter to "obj".
2. Use the "Object.keys()" method on "obj" to retrieve an array of its keys.
3. Use the "length" property of the resulting array to get the count of keys.
4. Return the count.
*/
