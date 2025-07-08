/*
Scenario:
You’ve got a list of items in a shopping cart. 
Each item has a name, price, and quantity. 
Your job is to calculate the total cost of all items in the cart.

Input example:
[
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "bread", price: 2.5, quantity: 2 },
  { name: "milk", price: 3, quantity: 1 }
]

Output example:
Total: 9.0

🔧 Requirements:
	•	Multiply each item’s price × quantity
	•	Add it to a running total
	•	Round to 2 decimal places if needed

⸻

💡 Hints:
	•	Use .reduce() for the total
	•	You can round with .toFixed(2) (but that returns a string, so be careful)
*/

const data = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "bread", price: 2.5, quantity: 2 },
  { name: "milk", price: 3, quantity: 1 },
];

function totaler() {
  const total = data.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity; //Adds each item’s price × quantity to the accumulator
  }, 0);
  return Number(total.toFixed(2)); //makes it a number and defaults to 0 decimal places
}

console.log("Total:", totaler(2));
