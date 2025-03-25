# Loop Control: Break & Continue

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

# Notes:
# Create a dynamic list with range
# Use a for loop to loop through the list
# If a number in the list is even, skip it (use continue)
# If a number is greater than 15, stop the loop (use break)
