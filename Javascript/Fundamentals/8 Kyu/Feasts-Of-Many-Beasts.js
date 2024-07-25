/*
All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the 
same letters as the animal's name. For example, 
the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and 
returns true or false to indicate whether the beast is allowed to bring the dish to 
the feast.

Assume that beast and dish are always lowercase strings, 
and that each has at least two letters. 
beast and dish may contain hyphens and spaces, 
but these will not appear at the beginning or end of the string. 
They will not contain numerals.
*/

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

/*
    Approach:
    - Check if the first letter of beast is equal to the first letter of dish
    - Check if the last letter of beast is equal to the last letter of dish
    - Return true if both conditions are met
    - Return false otherwise

    Learned:
1. beast[0] === dish[0]:

beast[0] accesses the first character of the beast string.
dish[0] accesses the first character of the dish string.
The === operator checks if these two characters are the same.

2. beast[beast.length - 1] === dish[dish.length - 1]:

beast.length gives the length of the beast string.
beast.length - 1 calculates the index of the last character in the beast string.
beast[beast.length - 1] accesses the last character of the beast string.
Similarly, dish.length gives the length of the dish string.
dish.length - 1 calculates the index of the last character in the dish string.
dish[dish.length - 1] accesses the last character of the dish string.
The === operator checks if these two characters are the same.

3. && operator:

The && operator is the logical AND operator. It checks if both conditions on either side of it are true.

4. Return Statement:

The return statement returns the result of the expression.
If both conditions (the first characters are the same, and the last characters are the same) are true, the expression evaluates to true.
If either condition is false, the expression evaluates to false.
    
*/
