# Define the function

# 1. We set a function "count_and_print" we give it a parameter pet_list
def count_and_print(pet_list):
# 2. We set a variable "pet_count" as an empty object (to store the data we will get later)
    pet_count = {}

# 3. pet is created in the loop, and takes on one value at a time from the list you passed in
    for pet in pet_list:
# 4. if a pet is in pet_count already, we add one more to it, if that pet isn't in the object yet, we set its count to 1.
        if pet in pet_count:
            pet_count[pet] += 1
        else:
            pet_count[pet] = 1

# 5. Go through each pet type in alphabetical order.
# sorted() takes a list and returns a new list in alphabetical or numerical order
# pet_count.keys() gives you just the keys: ["cat", "dog"]
    for pet in sorted(pet_count.keys()):

# 6. Print the get name and the number of pets
# The f stands for formatted string. It lets you write variables inside a string:
            print(f"{pet}: {pet_count[pet]}")

#file reader
# Open the file called pets.txt for reading, and assign the file object to the variable file. When the block ends, automatically close the file.
with open("pets.txt", "r") as file:
# .strip() removes any leading or trailing whitespace, including \n
# file.readlines()- This reads the entire file, line by line, and returns a list of strings
    pets = [pet.strip() for pet in file.readlines()]

    

# Call the function
count_and_print(pets)