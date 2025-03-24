/*
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

function addBinary(a, b) {
  const sum = a + b;
  return sum, toString(2);
}

/*
    Approach:
    1. Add the two numbers
    2. Convert the sum to binary
    3. Return the binary sum

    Learned:    
    1. The toString() method is used to convert a number to a string.
        A. The toString method in JavaScript can take an optional parameter called the "radix." 
        This parameter specifies the base (or radix) of the numeral system to be used for the 
        string representation of the number. 
        B. The radix parameter can be any integer between 2 and 36. If the radix parameter is omitted,
        JavaScript assumes the following:
            i. If the string begins with "0x", the radix is 16 (hexadecimal)
            ii. If the string begins with "0", the radix is 8 (octal)
            iii. If the string begins with any other value, the radix is 10 (decimal)
            
        C. Why the radix is important:
            i. The radix parameter is important because it determines how the number is converted to a string. 
            ii. For example, if the radix is 2, the number is converted to a binary string. 
            iii. If the radix is 16, the number is converted to a hexadecimal string.
            iv. If the radix is 10, the number is converted to a decimal string.
            v. If the radix is 8, the number is converted to an octal string.
        D. Why the "toString Method" supports only 36 character:
            The toString method in JavaScript supports bases up to 36 because it uses alphanumeric characters 
            (0-9 and A-Z) to represent numbers.

*/
