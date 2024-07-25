/*
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
𝑎
a, 
𝑏
b that defines the range 
[𝑎, 𝑏]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
𝑎
,
𝑏
]
[a,b] the function should output an empty list.

90, 100 --> []

*/

function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j < i.toString().length; j++) {
      sum += Math.pow(parseInt(i.toString()[j]), j + 1);
    }
    if (sum === i) {
      result.push(i);
    }
  }
  return result;
}

/*
  Approach:
    1. Create a result array.
    2. Iterate from a to b.
    3. For each number, calculate the sum of each digit raised to the power of its position.
    4. If the sum is equal to the number, push it to the result array.
    5. Return the result array.

    Learned:
    1. parseInt(): parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
    2. Math.pow(): returns the base to the exponent power, that is, baseexponent.
    3. toString(): returns a string representing the specified object.
    4. Array.push(): adds one or more elements to the end of an array and returns the new length of the array.
  */
