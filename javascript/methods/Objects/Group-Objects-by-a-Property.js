/*
Task:

Write a function that takes an array of objects and 
groups them by a specific property. 
Return an object where each key is a property value and the value is 
an array of objects with that key.

Hints:

	•	Use reduce() to iterate over the array and group the objects.
	•	Use the role property as the key in the output object.
*/

const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
];

const groupObjects = (arr) => {
  return arr.reduce((acc, person) => {
    //If the role already exists in 'acc' push the person into it
    if (acc[person.role]) {
      acc[person.role].push(person);
    } else {
      // else create a new array with that person
      acc[person.role] = [person];
    }
    return acc;
  }, {});
};

console.log(groupObjects(people));
