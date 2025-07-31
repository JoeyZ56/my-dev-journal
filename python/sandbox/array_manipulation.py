
#Goal: Write a function that:
#	1.	Takes in an array of numbers.
#	2.	Returns a new array where each number is doubled.

# Thoughts:
#   Create a function - doubledArray()
#   using list comprehensive for in loop i can loop through the array and double each index
#   return list comprehensive and print the function with dummy data

print("test") #to test im in the right folder in the terminal

def doubledArray(arr):
    doubled = [num * 2 for num in arr]
    return doubled

print(doubledArray([2,5,9,12]))