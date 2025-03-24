/*
Exercise 3: Objects - Merge Employee Information

Create two objects personalInfo and jobInfo for an employee.
Write a function mergeEmployeeInfo that merges the two objects into a 
single object containing all properties, with no duplicate keys.
*/

const personalInfo = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const jobInfo = {
  position: "Developer",
  salary: 80000,
  city: "San Francisco",
};

const mergeEmployeeInfo = (info1, info2) => {
  // return the parameters with the spread opporator to
  //copy the objects into a combined one
  return { ...info1, ...info2 };
};

/*
  Sudo:
  create an empty object to merge the two objects into

  */

console.log(mergeEmployeeInfo(personalInfo, jobInfo));
// Expected output: { name: 'Alice', age: 30, city: 'San Francisco', position: 'Developer', salary: 80000 }
