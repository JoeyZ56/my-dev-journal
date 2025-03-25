# List Comprehension (Basic)
"""
This script generates a list of squares for numbers ranging from 1 to 10 using a list comprehension.

Functions:
    None

Variables:
    number (list): A list of integers from 0 to 10.
    list_of_squares (list): A list containing the squares of integers from 1 to 10.

Output:
    Prints the list of squares: [1, 4, 9, ..., 100].
"""

# Prompt:
# Create a list of squares from 1 to 10 using a list comprehension.
# Expected: [1, 4, 9, ..., 100]

number = list(range(11))
list_of_squares = [square**2 for square in number]
print(list_of_squares)