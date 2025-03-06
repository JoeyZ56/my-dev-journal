# 2D list
last_semester_gradebook = [["politics", 80], ["latin", 96], ["dance", 97], ["architecture", 65]]

# Lists
# Define current subjects and their respective grades
subjects = ["physics", "calculus", "poetry", "history"]
current_grades = [98, 97, 85, 88]

# Create an iterator that pairs elements from subjects and grades
gradebook = [[subject, grade] for subject, grade in zip(subjects, current_grades)]  # Fixed typo: 'currnet_grades' -> 'current_grades'

# Add new 2D lists at the end of "gradebook" with append
gradebook.append(["computer science", 100])
gradebook.append(["visual arts", 93])

# Using -1 to access the last index of the 2D list and add (+=) 5 to it
gradebook[-1][-1] += 5  # Adds 5 to the grade of 'visual arts'

# Access "gradebook" second 2D index(2) and remove the second index (grade)
gradebook[2].remove(85)

# Add "Pass" as the second index(1) to the "poetry" sublist
gradebook[2].append("Pass")  # Fixed incorrect 'appened' and assignment syntax

# Concatenate "last_semester_gradebook" + "gradebook" to a single 2D list
full_gradebook = last_semester_gradebook + gradebook

# ============================
# NOTES ON METHODS USED:
# ============================
# zip() - Pairs up elements from two lists to create a 2D list.
# list comprehension - Used to iterate through zip() and create the gradebook list.
# append() - Adds a new sublist to the end of 'gradebook'.
# [-1] index - Retrieves the last item in a list.
# += - Increases the last grade in the last sublist by 5.
# remove() - Removes a specific value from a sublist.
# append() (again) - Used to add "Pass" to the modified 'poetry' entry.
# + (concatenation) - Combines 'last_semester_gradebook' and 'gradebook' into a single list.
