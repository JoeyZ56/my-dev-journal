/*
Object Exercise 2: Inventory Management

Write a function manageInventory that takes an inventory object and 
performs a given action on a specified item.

Instructions:
	1.	The inventory object will have item names as keys and 
        quantities as values.

	2.	manageInventory should accept three parameters: 
        the inventory object, an item (string), and an action (string).

	•	If action is “add”, increase the item’s quantity by 1.
	•	If action is “remove”, decrease the item’s quantity by 1. 
        If the quantity goes to 0 or below, remove the item from the inventory.
*/

const inventory = {
  apples: 3,
  oranges: 2,
};

const manageInventory = (obj, item, action) => {
  if (action === "add") {
    //add item if it exists and increase the quantity by one
    obj[item] = (obj[item] || 0) + 1;
  } else if (action === "remove") {
    //remove the item if it exists and is greater than 0
    if (obj[item] && obj[item] > 0) {
      obj[item] -= 1;
    }
    //if count goes to 0 or below delete it from the object
    if (obj[item] <= 0) {
      delete obj[item];
    }
  }
};

manageInventory(inventory, "apples", "add");
manageInventory(inventory, "oranges", "remove");
manageInventory(inventory, "bananas", "add");

console.log(inventory);
