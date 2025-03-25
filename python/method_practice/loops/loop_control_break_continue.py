# Loop Control: Break & Continue
"""
This script demonstrates the use of loop control statements `break` and `continue` 
in Python. It performs the following tasks:

1. Creates a list of numbers from 1 to 20 using the `range` function.
2. Iterates through the list using a `for` loop.
3. Skips even numbers using the `continue` statement.
4. Stops the loop if a number is greater than 15 using the `break` statement.
5. Prints the remaining numbers that are odd and less than or equal to 15.

Key Concepts:
- `continue`: Skips the current iteration of the loop and moves to the next iteration.
- `break`: Exits the loop prematurely when a specified condition is met.
"""

# Prompt:
# Loop through numbers 1–20.
# Skip even numbers (continue)
# Stop the loop if the number is greater than 15 (break)
# Print the remaining numbers

#create a range of numbers in a list 1 - 20
numbers = list(range(21))
#print(numbers)

for num in numbers:
    if not num % 2: #"not" divisible by 2
        continue
    elif num > 15:
        break
    print(num)


