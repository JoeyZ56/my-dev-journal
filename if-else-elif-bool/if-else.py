# Single line comment

'''
Multi-line comment
'''

'''
Boolean expressions are statements that can be either True or False
A boolean variable is a variable that is set to either True or False.
We can create boolean expressions using relational operators:
==: Equals
!=: Not equals
>: Greater than
>=: Greater than or equal to
<: Less than
<=: Less than or equal to
if statements can be used to create control flow in your code.
else statements can be used to execute code when the conditions of an if statement are not met.
elif statements can be used to build additional checks into your if statements
'''

# Example 1
magic = True
elf = True
human = True
dwarf = True
preform_blood_magic = True

if magic:
    print("You are a mage!")

if elf and magic:
    print("You are an elf mage!")

if human or not magic:
    print("You are just a normal human!")

if dwarf or not magic:
    print("You are just short!")

if elf and magic and preform_blood_magic:
    print("You're a Demon Lord!")

if not elf or not magic or preform_blood_magic:
    print("You're just a serial killer!")