/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but 
exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, 
return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
}

/*
        Approach:
        1. Check if the length of the pin is 4 or 6.
        2. Check if the pin contains only digits.
        3. Return the result.

        Learned:
        1.  The expression ^\d+$ is a regular expression (regex) used for 
            pattern matching in strings. Let's break down what each part means:
            ^: Asserts the position at the start of the string. 
                This means that whatever follows must start at the very beginning of the string.
            \d: Matches any digit (0-9).
            +: Quantifier that matches one or more of the preceding element (in this case, a digit). 
                So \d+ matches one or more digits.
            $: Asserts the position at the end of the string. 
                This means that whatever precedes must end at the very end of the string.
            Putting it all together, 
                /^\d+$/ ensures that the entire string consists solely of one or more digits, 
                with no other characters allowed before or after. 
                This regex pattern is used to verify that a string contains only numeric digits and nothing else.

        2.  The test() method in JavaScript is used to test for a match in a string.
      */
