# ------------ STAGE 1: Build ------------
# Base image
FROM node:20-alpine AS builder

## Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# ------------ STAGE 2: Run ------------
FROM node:20-alpine 

WORKDIR /app

COPY --from=builder /app ./

# Expose the port your app runs on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]