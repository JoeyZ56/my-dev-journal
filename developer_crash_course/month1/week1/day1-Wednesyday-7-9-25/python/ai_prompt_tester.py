#imports
import openai
from dotenv import load_dotenv
import os
from pathlib import Path


# Load the .env from the developer_crash_course root (4 levels up)
env_path = Path(__file__).resolve().parents[4] / ".env"
load_dotenv(dotenv_path=env_path)

# Initialize OpenAI client using sacred key
client = openai.OpenAI(api_key=os.getenv("THE_SACRED_KEY"))

# Send a test message to gpt-4o-mini (your available model)
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Tell me a secret"}
    ]
)

# Print the AI’s response
print(response.choices[0].message.content)