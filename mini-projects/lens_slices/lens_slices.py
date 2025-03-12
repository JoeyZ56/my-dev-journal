#List
toppings = ["pepperoni", "pineapple", "cheese", "sausage", "olives", "anchovies", "mushrooms"]

#Keep track of how much each slice costs
prices = [2, 6, 1, 3, 2, 7, 2]

#Count the number of occurrences of 2 in the prices list
num_two_dollar_slices = prices.count()

#Find the length of the toppings list
num_pizzas = len(toppings)

#concatenate
print("We sell" + " " + str(num_pizzas) + " " + "different kinds of pizza!")

#Use the existing data about the pizza toppings and prices to create a new two-dimensional list
pizza_and_prices = list(zip(prices, toppings)) #make into list first then zip the two lists together
print(pizza_and_prices)

#Sort pizza_and_prices so that the pizzas are in the order of increasing price (ascending)
pizza_and_prices.sort()
print(pizza_and_prices)

#Store the first element of pizza_and_prices in a variable
cheapest_pizza = pizza_and_prices[0]
print(cheapest_pizza)

#Get the last item of the pizza_and_prices list and store it in a variable
priciest_pizza = pizza_and_prices[-1]
print(priciest_pizza)

#Remove the last index from our pizza_and_prices list
pizza_and_prices.pop()
print(pizza_and_prices)

#Add the new peppers pizza topping to our list pizza_and_prices [2.5, "peppers"]
pizza_and_prices.insert(4, [2.5, "peppers"])
print(pizza_and_prices)

#Slice the pizza_and_prices list and store the 3 lowest cost pizzas in a list
three_cheapest = pizza_and_prices[:3]
print(three_cheapest)