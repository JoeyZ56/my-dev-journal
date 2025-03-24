/*
Jaden Smith, the son of Will Smith, is the star of films such as 
The Karate Kid (2010) and After Earth (2013). Jaden is also known 
for some of his philosophy that he delivers via Twitter. When writing
 on Twitter, he is known for almost always capitalizing every word. 
 For simplicity, you'll have to capitalize each word, check out how 
 contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not 
capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
String.prototype.toJadenCase = function () {
  //...
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/*
  Approach:
    1. Split the string by space
    2. Iterate over the array and capitalize the first character of each word
    3. Join the array with space and return the string

    What I learned:
        - I learned to use the split method to split the string by space
        - I learned to use the map method to iterate over the array and capitalize the first character of each word
        - I learned to use the join method to join the array with space
        - I learned to use the toJadenCase method to capitalize the first character of each word
        - I learned to use the prototype to add a new method to the String object

        "this": In JavaScript, the keyword this refers to the object that 
        the function is a property of. When you use this inside a method of an object, 
        it refers to the object itself. In the context of your toJadenCase function, 
        which is added as a method to the String prototype, this refers to the specific 
        string instance on which the toJadenCase method is called. 
  */
