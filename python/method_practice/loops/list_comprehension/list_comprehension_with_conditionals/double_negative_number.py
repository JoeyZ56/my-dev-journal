numbers = [2, -1, 79, 33, -45]
"""
This script demonstrates the use of list comprehensions with conditionals to process a list of numbers.

Functions:
- Doubles all negative numbers in the list `numbers` and stores them in `neg_number_doubled`.
- Reverses the sign of all numbers in the list `numbers` and stores them in `reverse_neg_num`.

Variables:
- `numbers`: A list of integers containing both positive and negative values.
- `neg_number_doubled`: A list containing the doubled values of all negative numbers from `numbers`.
- `reverse_num`: A list where the sign of each number in `numbers` is reversed.

Output:
- Prints the `neg_number_doubled` list.
- Prints the `reverse_num` list.
"""

neg_number_doubled = [num * 2 for num in numbers if num < 0]
reverse_num = [num * -1 if num > 0 else num * -1 for num in numbers]

print(neg_number_doubled)
print(reverse_num)

