# Objective:
# The program picks a random number between 1 and 20.
# The user has to guess the number.
# The program gives hints: "Too high!" or "Too low!"
# The game continues until the user guesses correctly.

# Requirements:
# Use a while loop to keep the game running until the user guesses correctly.
# Use a for loop to allow a maximum of 5 attempts before the game ends.

# Bonus Challenge (Optional):
# After 5 incorrect guesses, the program should reveal the correct number and exit.
import random

#open variables
guesses = 0
game_running = True
bot_number = random.randint(1,20)


#While Loop
while game_running:
    #Get player input
    player_guess = int(input("Guess a number between 1 and 20: "))
    guesses += 1

    # Check if the guess is correct
    if player_guess == bot_number:
        print(f"You guessed correctly! {player_guess} is the number!")
        game_running = False #Stops loop
    elif player_guess < bot_number:
        print("Too low! Try again!")
    else:
        print("Too high! Try again!")
    
    #End game after 5 incorrect guesses 
    if guesses >= 5:
        print(f"Game over! You Lose! The correct number was {bot_number}.")
        game_running = False
    
