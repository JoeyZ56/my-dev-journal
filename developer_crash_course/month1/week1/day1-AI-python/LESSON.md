🥇 PART 1 — Prompt Engineering Warm-up (30 min)

Goal: Get comfortable crafting prompts that control tone, format, and behavior.

Exercise:
Open chat.openai.com in another window and try this: 1. Ask ChatGPT to roleplay as a grumpy but brilliant chef helping you debug a recipe app. 2. Then rephrase and ask it to be a friendly teacher explaining step-by-step how arrays work in Python. 3. Lastly, tell it to act like a hiring manager reviewing your GitHub.

Take note of:
• What tone shifts when you change the prompt?
• What prompt structures work best?

📓 Write down your top 3 takeaways from this.

---

🧪 PART 2 — Python Core Drill (1 hr)

Focus: Functions, lists, file reading

Challenge: Write a mini tool in Python: “Pet Sorter”

You have a file called pets.txt with the following lines:
dog
cat
parrot
lizard
dog
cat
dog

Task: 1. Read the file. 2. Count how many of each pet there are. 3. Print the result, sorted alphabetically.

Example output:
cat: 2
dog: 3
lizard: 1
parrot: 1

---

🤖 PART 3 — Intro to OpenAI SDK (1 hr)

Goal: Build your first tiny AI tool using OpenAI’s Python SDK (locally or in Replit)

Steps: 1. Install the SDK:
pip install openai

2. Set up a Python script and import it:
   import openai
   openai.api_key = "your-api-key"

3. Prompt test:
   response = openai.ChatCompletion.create(
   model="gpt-4",
   messages=[{"role": "user", "content": "Tell me a joke about cats"}]
   )

print(response['choices'][0]['message']['content'])

Once that works, challenge yourself:
• Make it a reusable function
• Ask it to explain code, summarize text, or act as a tutor

---

🎒 Wrap-Up (10 min)
• What did you learn today?
• What tripped you up?
• What would you teach someone else based on this?

🗒️ Journal
Today I learned how to read a file in Python, how to use openai's api to talk with a bot, and important Python methods such as [.sorted(), .keys(), and f].

What tripped me up the most was getting the file path correct, in order to get the api key from openai in my .env, which was a valuable lesson in understanding the levels of file structures.

What I would teach someone else about all this, is that error messages are easier to understand if you read them a few times, they do a good job telling you exactly what is going wrong!
