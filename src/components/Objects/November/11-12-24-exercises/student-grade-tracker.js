/*
Object Exercise 1: Student Grades Tracker

Create a function addGrade that takes an object students and 
a new grade entry for a student.

Instructions:
	1.	students is an object where each key is a student’s name, 
    and the value is an array of their grades.

	2.	The function should take two parameters: the students object, 
    a name (string), and a grade (number).

	3.	If the student already exists, add the grade to their list of grades. 
    If they don’t exist, create a new entry with the student’s name and 
    add the grade.
*/

const students = {
  Alice: [85, 90],
  Bob: [78, 82],
};

const addGrade = (obj, name, grade) => {
  if (obj[name]) {
    return obj[name].push(grade);
  } else {
    obj[name] = [grade];
  }
};

addGrade(students, "Alice", 95);
addGrade(students, "Charlie", 88);

console.log(students);
