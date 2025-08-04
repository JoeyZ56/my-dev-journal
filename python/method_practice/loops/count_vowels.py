# Count how many vowels are in a string.

"""
pseudo:

create variables
    dummy data - sentence
    vowels variable for what the checks are

create function vowel_counter()
    initialize dictionary with vowels starting at 0
    for loop the letters in text where text is lowercase
    check if letters are in vowels

    if letters are increase the count of the letters by 1
    return counts outside of the loop

"""

sentence = "How many vowels are in this string? I would love to know!"
vowels = ["a", "e", "i", "o", "u"]

def vowel_counter(text):
    # Initialize a dictionary with all vowels starting at 0
    counts = {v: 0 for v in vowels}
    
    for letter in text.lower():  # Lowercase once for consistency
        if letter in vowels:     # Membership check
            counts[letter] += 1  # Increment the right vowel key

    return counts

print(vowel_counter(sentence))