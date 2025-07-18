✅ What Docker is & why it’s powerful
✅ Images vs Containers (what’s really happening)
✅ Create a Dockerfile for your Express API
✅ Run your app with docker build and docker run
✅ Intro to docker-compose (bonus if we have time)

⸻

🧠 Quick Primer: What is Docker?

Think of Docker as a shipping container for your app. It lets you:

    •	Package your code + runtime + dependencies into a single image
    •	Run it anywhere — same behavior across Mac, Linux, prod servers
    •	Avoid “it works on my machine” bugs
    •	Simplify deployment (like to Railway, AWS, etc.)

---

🔧 Part 1: Your Express app in a Docker container

We’ll start by writing a Dockerfile for your existing CRUD Express server.

Confirm this before we start:

    1.	Your basic Express app (server.js or similar) works locally on localhost:3000
    2.	It doesn’t need a database yet (just using in-memory arrays for recipes is fine for now)
    3.	You’re running this on macOS with Docker Desktop installed
