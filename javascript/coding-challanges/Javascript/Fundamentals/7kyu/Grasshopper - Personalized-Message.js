/*
Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise
*/

function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }

  // OR:  return name--- owner ? "Hello boss" : "Hello guest";
}

/*
  Approach:
    1. Check if name is equal to owner
    2. If yes, return 'Hello boss'
    3. Else, return 'Hello guest'

    What did I learn from this?
    1. Conditional statements
    2. Return statement
    3. Comparison operator
    */
