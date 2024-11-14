/*
Object Exercise: Product Discount Calculator

Create an object products where each product has properties price and 
discount (in percentage). 

Write a function "applyDiscount" that takes a 
product name and calculates the discounted price based on the price and 
discount values. If the product doesn’t exist, log “Product not found.”
*/

/*
Sudo:
create three perameters obj, item, discount
write an if statement if item exists and is discounted show discounted price
*/

const product = {
  sword: { price: 200, discount: 10 },
  shield: { price: 150, discount: 25 },
  bow: { price: 80, discount: 15 },
};

const applyDiscount = (obj, name) => {
  //checks if item exists
  if (obj[name]) {
    //deconstruct to not pass as arguments
    const { price, discount } = obj[name];
    //math equation to turn discount into %
    const discountedPrice = price - price * (discount / 100);
    return discountedPrice;
  } else {
    return "Product not found.";
  }
};

console.log(applyDiscount(product, "sword"));
console.log(applyDiscount(product, "shield"));
console.log(applyDiscount(product, "bow"));

/*
Explanation:

	1.	Destructuring: We use destructuring to pull price and discount directly 
        from obj[name], so we don’t need to pass them as arguments.

	2.	Discount Calculation: price - (price * (discount / 100)) calculates the 
        price after discount, where (discount / 100) converts the discount to a 
        percentage.
*/
