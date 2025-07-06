/*
Scenario:
You have a list of messy user-submitted names for account creation. Your app needs to turn each name into a proper username, following these rules:
	1.	Lowercase everything
	2.	Remove spaces and special characters (keep only letters and numbers)
	3.	Add a prefix "@" to the front
	4.	Remove duplicates

    Input example:
    ["Joey Zazzi", "joey_zazzi!", "ZazziJoey", "joey zazzi"]

    Output example:
    ["@joeyzazzi", "@zazzijoey"]

    🔧 Hints:
	•	Use .map() to format each name
	•	Use .replace(/[^a-z0-9]/gi, "") to remove non-alphanumerics
	•	Use Set to remove duplicates
*/
usernames = ["Joey Zazzi", "joey_zazzi!", "ZazziJoey", "joey zazzi"];

function usernameFormatter() {
  const cleaned = usernames.map((name) => {
    const lower = name.toLowerCase();
    const alphanumeric = lower.replace(/[^a-z0-9]/g, "");
    return "@" + alphanumeric; //Concatenate
  });

  const unique = [...new Set(cleaned)];

  return unique;
}

console.log("End result:", usernameFormatter());
