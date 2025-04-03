#  Function Challenge: Travel Planner

# Problem:

# Write a function called daily_spending_report that takes in:

# a list of daily spending amounts (expenses)
# and a daily budget limit

# Your function should:

# 1. Loop through the list.
# 2. Print whether each day is under, over, or exactly on budget.
# 3. At the end, return how many days were under budget.



#function
def daily_spending_report(expenses):
 
    budget = 100
    day = 1 
    days_under = 0
    days_over_budget = 0
    total_sum = sum(expenses)
    tracker = [
    "On par with budget" if i <= budget else "Over budget"
    for i in expenses
]
    
    print(f"This budget period your total budget is {budget * len(expenses)}. Each day you spent:") 
     #for loop
    for expense in expenses:
       underspend = abs(budget - expense)
       if (expense < budget):
           print(f"Day {day}: {expense} under budget by ${underspend}")
           day += 1
           days_under += 1
       elif (expense == budget):
           print(f"Perfect spending my guy!")
       else:
           print(f"Day {day}: {expense} over budget. In the red by ${underspend}")
           day +=1
           days_over_budget += 1

    
    print(f"This budget period you spent ${total_sum}. Here's the day-by-day status:")
    for i, status in enumerate(tracker, start=1):
        print(f"Day {i}: {status}")    
    return f"Days under budget: {days_under}. Days over budget {days_over_budget}!"
        

    

print(daily_spending_report([99, 25, 67, 120, 200, 41, 75, 100]))


"""
    Generates a daily spending report based on a fixed budget and a list of daily expenses.
    Args:
        expenses (list): A list of daily expenses (float or int) to evaluate against the budget.
    Returns:
        str: A summary string indicating the number of days under budget and over budget.
    Prints:
        - Total budget for the period.
        - Daily spending details, including whether the spending was under, over, or on par with the budget.
        - Total spending for the period.
        - Day-by-day status of spending relative to the budget.
"""