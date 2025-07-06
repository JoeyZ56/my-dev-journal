/*
Scenario:
You’re importing a list of user-submitted emails. Some have typos, uppercase letters, or accidental spaces. You need to clean them up before saving.

⸻

🧼 Requirements:
	1.	Lowercase everything
	2.	Trim whitespace
	3.	Remove any emails that are missing @ or don’t end in .com
	4.	Return a list of valid emails

    Input example:
    [
  "  Joey@Example.com",
  "user.name@domain.COM ",
  "notAnEmail.com",
  "noatsymbol.com",
  "clean@email.com"
]

Output example:
[
  "joey@example.com",
  "user.name@domain.com",
  "clean@email.com"
]

🔧 Hints:
	•	Use .map() and .trim()
	•	Use .toLowerCase()
	•	Filter with .includes("@") and .endsWith(".com")
*/

const emails = [
  "  Joey@Example.com",
  "user.name@domain.COM ",
  "notAnEmail.com",
  "noatsymbol.com",
  "clean@email.com",
];

function emailSanitizer() {
  // map the array
  const mapped = emails.map((str) => str.toLowerCase().trim());
  // Lowercase everything - Trim whitespace

  // console.log("lowercase:", lower);

  // Remove any emails that are missing @ or don’t end in .com
  const filtered = mapped.filter(
    (sym) => sym.includes("@") && sym.endsWith(".com")
  );
  console.log("Filtered:", filtered);

  // Return a list of valid emails
  return filtered;
}

console.log("result:", emailSanitizer());
