# Carly's Clippers
# You are the Data Analyst at Carly’s Clippers, the newest hair salon on the block. 
# Your job is to go through the lists of data that have been collected in the past couple of weeks. 
# You will be calculating some important metrics that Carly can use to- 
# plan out the operation of the business for the rest of the month.

# You have been provided with three lists:

# hairstyles: the names of the cuts offered at Carly’s Clippers.
# prices: the price of each hairstyle in the hairstyles list.
# last_week: the number of purchases for each hairstyle type in the last week.
# Each index in hairstyles corresponds to an associated index in prices and last_week.

# For example, The hairstyle "bouffant" has an associated price of 30 from the prices list, 
# and was purchased 2 times in the last week as shown in the last_week list. 
# Each of these elements are in the first index of their respective lists.

hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

#average of haircuts
total_price = 0

#loop through the prices & add them to total_price

for price in prices:
 total_price = total_price + price
  
print(total_price)

#divide by the number of prices to total_price
average_price = total_price / len(prices)
print(f"Average Haircut Price: {average_price}")

#Use a list comprehension to make a list called new_prices, which has each element in prices minus 5
new_prices = [i - 5 for i in prices]
print(new_prices)

#Create a variable called total_revenue and set it to 0.
total_revenue = 0

#Use a for loop to create a variable i that goes from 0 to len(hairstyles)
for i in range(len(hairstyles)):
#multiply prices[i] with last_week[i] and set it to total_revenue
 total_revenue += prices[i] * last_week[i] 

print(f"Total Revenue: {total_revenue}")

#Find the average daily revenue by dividing total_revenue by 7
average_daily_revenue = total_revenue / 7
print(average_daily_revenue)

#Use a list comprehension to create a list called cuts_under_30 that has the entry hairstyles[i] for each i for which new_prices[i] is less than 30
cuts_under_30 = [hairstyles[i] for i in range(len(new_prices)) if new_prices[i] < 30]
print(cuts_under_30)




"""
This script performs various operations related to a hair salon's data, including calculating averages, 
adjusting prices, and analyzing revenue. Below is a breakdown of the functionality:
1. **Data Initialization**:
    - `hairstyles`: A list of different haircut styles offered.
    - `prices`: A list of prices corresponding to each hairstyle.
    - `last_week`: A list of the number of each hairstyle sold last week.
2. **Average Haircut Price**:
    - Calculates the total price of all hairstyles.
    - Computes the average price by dividing the total price by the number of hairstyles.
    - Prints the average haircut price.
3. **Price Adjustment**:
    - Creates a new list, `new_prices`, where each price is reduced by 5.
    - Prints the adjusted prices.
4. **Revenue Calculation**:
    - Calculates the total revenue by multiplying the price of each hairstyle by the number sold last week.
    - Prints the total revenue.
    - Computes the average daily revenue by dividing the total revenue by 7 (days in a week).
    - Prints the average daily revenue.
5. **Filter Haircuts Under $30**:
    - Creates a list, `cuts_under_30`, containing the names of hairstyles whose adjusted price is less than $30.
    - Prints the list of hairstyles under $30.
"""
