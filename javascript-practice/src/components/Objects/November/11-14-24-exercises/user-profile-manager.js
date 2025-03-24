/*
Exercise: Object - User Profile Manager

You are building a user profile manager where you need to store and update a user’s profile information.
	1.	Create an object userProfile that contains:
	•	name (a string),
	•	age (a number),
	•	email (a string),
	•	isAdmin (a boolean value indicating whether the user is an admin).

	2.	Write a function updateUserProfile that accepts three parameters:
	•	A user object,
	•	A property name (string),
	•	A new value (string, number, or boolean).

The function should update the specified property of the user profile with the 
new value. If the property does not exist on the object, 
return "Property not found.".
*/

const userProfile = {
  name: "Joey Doe",
  age: 29,
  email: "joey@email.com",
  isAdmin: true,
};

const updateUserProfile = (obj, property, value) => {
  //if property exists
  if (Object.prototype.hasOwnProperty.call(obj, property)) {
    obj[property] = value;
    return obj;
  } else {
    return "Property not found";
  }
};

console.log(updateUserProfile(userProfile, "name", "Jane Doe"));
console.log(updateUserProfile(userProfile, "age", 44));
console.log(updateUserProfile(userProfile, "email", "jane@email.com"));
console.log(updateUserProfile(userProfile, "isAdmin", false));
console.log(updateUserProfile(userProfile, "address", "123 street road"));
/*
Sudo:
if statment to if value exisits update value
else if value does not exisit return string
*/
