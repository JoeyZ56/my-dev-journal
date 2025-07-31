# Process:
# Create an function called cleanedAndDoubled().
# Loop through arr with a for…in list comprehensive.
# If the number is >= 0, multiply by 2 and push to result.
# Return result.
# input: [5, -1, 3, 7, -10, 33]
# output: [10, 6, 14, 66]

def cleanedAndDoubledArr(arr):
    cleanedAndDoubled = [num * 2 for num in arr if num >= 0]
    print(cleanedAndDoubled)

cleanedAndDoubledArr([5, -1, 3, 7, -10, 33])