# Nested Loops
"""
This script generates and prints a multiplication table for numbers ranging from 1 to 3 
using nested loops. The outer loop iterates through the numbers, while the inner loop 
calculates the product of the current number with all numbers in the range. The results 
are stored in a list (row) and printed as a row of the multiplication table.

Functions:
    None

Variables:
    numbers (list): A list of integers from 0 to 3, representing the range of numbers 
                    for the multiplication table.
    row (list): A temporary list used to store the products for the current row of the 
                multiplication table.

Output:
    Prints the multiplication table as a list of lists, where each inner list represents 
    a row of the table.
"""

# Prompt:
# Print a multiplication table from 1 to 3:

numbers = list(range(4))

for num in numbers:
    #print(num)
    row = []
    for i in numbers:
      row.append(num * i)
    print(row)