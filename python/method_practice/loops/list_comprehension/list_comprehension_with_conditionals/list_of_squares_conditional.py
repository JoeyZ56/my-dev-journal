# List Comprehension with Conditionals
"""
This script generates a list of squares of even numbers from 1 to 20 using list comprehension with conditionals.

The process involves:
1. Creating a range of numbers from 0 to 20.
2. Using a list comprehension to filter even numbers and compute their squares.
3. Printing the resulting list of squares.

Output:
A list of squares of even numbers within the specified range.
"""

# Prompt:
# Create a list of squares of even numbers from 1 to 20.
# Only include even numbers from 1–20
# Square them
# Put the results into a list

numbers = list(range(21))
list_of_squares = [num**2 for num in numbers if not num % 2]
print(list_of_squares)




