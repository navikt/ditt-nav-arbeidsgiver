FROM node:11-slim

WORKDIR /usr/src/app

RUN npm install -g express

COPY src/ src/
COPY public/ public/
COPY server.js server.js
COPY package.json package.json

RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT node server.js