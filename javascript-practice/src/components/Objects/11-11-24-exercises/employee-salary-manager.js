/*
Exercise 2: Employee Salary Manager

Create an object named company with a method to manage employee salaries.

Instructions:
	1.	company should have a property called employees, 
    which is an array of employee objects. 
    Each employee object should contain name and salary.
	2.	Add a method updateSalary(name, amount) that finds an 
    employee by name and updates their salary by the specified amount. 
    If the employee isn’t found, log a message saying they don’t exist.
*/

const company = {
  employees: [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 55000 },
  ],

  updateSalary(name, amount) {
    // Implement the logic here
    const employee = this.employees.find((emp) => emp.name === name);

    if (employee) {
      employee.salary += amount;
      console.log(`${name}'s new salary is ${employee.salary}`);
    } else {
      console.log("employee not found");
    }
  },
};

company.updateSalary("Alice", 5000); // Alice's salary becomes 55000
company.updateSalary("David", 4000); // Logs "Employee not found"
