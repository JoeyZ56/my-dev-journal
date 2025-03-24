/*
Object Exercise 1: Nested Object Search

Create a function findInNestedObject that takes a nested object and 
a key as arguments and returns the value of the key if found. 
If the key doesn’t exist, return "Key not found".
*/

const littleArmy = {
  general: "little mick",
  class: "leader",
  position: "front lines",
  readyForBattle: false,
  troops: {
    littleSoldiers: {
      size: 100,
      class: "warriros",
      position: "infintry",
      readyForBattle: true,
    },
    littleMages: {
      size: 50,
      class: "mage",
      position: "ranged",
      readyForBattle: true,
    },
    littleSkyRiders: {
      size: 20,
      class: "gryphon riders",
      position: "arial",
      readyForBattle: false,
    },
  },
};

const findInNestedObject = (obj, key) => {
  //call has the property method on the object to find properties
  if (Object.hasOwnProperty.call(obj, key)) {
    //return the object and key
    return obj[key];
  }
  //loop through all the properties in the object
  for (const property in obj) {
    // check if the properties is an objects
    if (typeof obj[property] === "object" && obj[property] !== null) {
      // create a function to show results
      const result = findInNestedObject(obj[property], key);
      if (result !== "Key not found") {
        return result;
      }
    }
  }

  return "Key not found";
};

console.log(findInNestedObject(littleArmy, "general"));
console.log(findInNestedObject(littleArmy, "troops"));
console.log(findInNestedObject(littleArmy, "littleSoldiers"));
console.log(findInNestedObject(littleArmy, "position"));
console.log(findInNestedObject(littleArmy, "class"));
console.log(findInNestedObject(littleArmy, "littlePriests"));

/*
	1.	Direct Key Check:
	•	First, it checks if the current level of the object has the 
        key directly with Object.hasOwnProperty.call.

	2.	Recursive Search:
	•	If the key isn’t found at the current level, the function iterates over 
        all properties in the object. For each property:
	•	If the property is another object, the function calls itself recursively.
	•	If a match is found during recursion, it returns the value.

	3.	Default Return:
	•	If the loop completes and no match is found, the function returns 
        "Key not found".
*/
