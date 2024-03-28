FROM node:21-alpine3.18

COPY package.json /app/
COPY src /app/src

WORKDIR /app

RUN npm install 

CMD ["node", "server.js"]