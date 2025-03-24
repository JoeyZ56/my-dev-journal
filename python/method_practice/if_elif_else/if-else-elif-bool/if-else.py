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