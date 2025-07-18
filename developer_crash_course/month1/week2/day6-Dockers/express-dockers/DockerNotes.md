## Breakdown & Notes

FROM node:18

    •	Uses the official Node.js image as the base.
    •	This image already includes Node.js and npm, so you don’t need to install them manually.
    •	You can pick a version (like node:18, node:20) for consistency.

⸻

WORKDIR /app

    •	Sets the working directory inside the container to /app.
    •	All following COPY, RUN, and CMD commands operate from this path.

⸻

COPY package\*.json ./

    •	Only copies package.json and package-lock.json first.
    •	This is done before copying the full source code to leverage Docker’s cache — if your dependencies don’t change, this layer gets reused and speeds up rebuilds.

⸻

RUN npm install

    •	Installs dependencies listed in package.json.
    •	These are installed inside the container, not on your local machine.

⸻

COPY . .

    •	Copies the rest of your project files into the container.
    •	The first . is the current directory (from your system), the second . is the WORKDIR (/app).

⸻

EXPOSE 3000

    •	Documents that your app listens on port 3000.
    •	Note: This doesn’t actually open the port — you still need to use -p in docker run to map it (like -p 3000:3000).

⸻

CMD ["node", "server.js"]

    •	This is the default command Docker will run when the container starts.
    •	Runs your server using Node.js.

---

## Docker Commands Cheat Sheet

### 1. Build Your Docker Image

    docker build -t express-docker-app .

    •	-t: Tags the image with a name.
    •	.: Tells Docker to look for a Dockerfile in the current directory.

Result: Creates an image called express-docker-app.

### 2. Run the Container

    docker run -p 3000:3000 express-docker-app

    •	-p 3000:3000: Maps your machine’s port 3000 to the container’s port 3000.
    •	express-docker-app: The name of your image.

Result: Starts a container and your app is live at localhost:3000.

### 3. Stop All Running Containers

    docker ps        # to see running containers
    docker stop <container_id>

Or stop all:

    docker stop $(docker ps -q)

### 4. Remove Containers

    docker rm <container_id>

Remove all stopped containers:

    docker container prune

### 5. List Docker Images

    docker images

### 6. Delete a Docker Image

    docker rmi express-docker-app

Or prune all unused images:

    docker image prune

### 7. View Running Containers

    docker ps

See all containers (even stopped):

    docker ps -a

### 8. Rebuild Image After Code Change

    docker build -t express-docker-app .

Re-run:

    docker run -p 3000:3000 express-docker-app

---

## What is a Multi-Stage Build?

A multi-stage build uses one image to build the app (with dev tools), and a second image to run the app (lean and clean). This way, you don’t ship extra files like node_modules, test tools, or your .env.

```py
# ------------ STAGE 1: Build ------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ------------ STAGE 2: Run ------------
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "server.js"]
```

### Why Use This?

    •	Keeps image size smaller
    •	Avoids shipping build tools
    •	Speeds up deployment
    •	Easier to maintain
