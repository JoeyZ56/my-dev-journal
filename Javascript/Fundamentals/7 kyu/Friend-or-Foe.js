/*
Make a program that filters a list of strings and returns a list 
with only your friends name in it.
If a name has exactly 4 letters in it, 
you can be sure that it has to be a friend of yours! 
Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
*/

function friend(friends) {
  //your code here
  let friendsArr = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].lengthj === 4) {
      friendsArr.push(friends[i]);
    }
  }
  return friendsArr;
}

/*
  Approach:
    - Create a new array to store the friends
    - Loop through the array
    - Check if the element has 4 letters
    - If it has 4 letters, push it to the new array
    - Return the new array  
  */

/*
    What I learned:
        - for loop
        - push method
        - length property

    What I need to work on:
    Committing to memory javascript methods and properties
*/
