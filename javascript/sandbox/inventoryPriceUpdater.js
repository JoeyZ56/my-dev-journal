/*
Write a function that:
	1.	Takes in an object where each key is an item name and each value is an object with price and quantity.
	2.	Increases the price of only items with quantity less than 5 by 20%.
	3.	Returns a new object (don’t modify the original).

Input:
    const store = {
  apple: { price: 1, quantity: 10 },
  banana: { price: 0.5, quantity: 3 },
  cherry: { price: 2, quantity: 2 }
};

Output:
{
  apple: { price: 1, quantity: 10 },
  banana: { price: 0.6, quantity: 3 },
  cherry: { price: 2.4, quantity: 2 }
}

Rules for this drill:
	•	❌ Don’t mutate the original object — must create and return a new one.
	•	✅ Use for...in to loop through object keys.
	•	✅ Must handle the case where no items meet the condition.
	•	✅ Keep prices to two decimal places.

Process:
	1.	Create function priceUpdater(store).
	2.	Create empty object updatedPrice = {}.
	3.	Use for...in to loop through store.
	4.	Get itemData = store[item].
	5.	Copy it into updatedPrice[item] = { ...itemData }.
	6.	If itemData.quantity < 5,
update updatedPrice[item].price = Number((itemData.price * 1.2).toFixed(2)).
	7.	Return updatedPrice.
*/

const store = {
  apple: { price: 1, quantity: 10 },
  banana: { price: 0.5, quantity: 3 },
  cherry: { price: 2, quantity: 2 },
};

const priceUpdater = () => {
  const updatedPrice = {};

  for (item in store) {
    //if the quantity of an item in store is less than 5
    if (store[item].quantity < 5) {
      //push name into updatedPrice and set its items price to a 20% increase
      updatedPrice[item] = {
        price: Number(store[item].price * (1.2).toFixed(2)),
        quantity: store[item].quantity,
      };
    } else {
      //Else push name and set the quality and price to name
      updatedPrice[item] = { ...store[item] };
    }
  }
  return updatedPrice;
};

console.log("Results", priceUpdater());
