FROM node:16-alpine AS login_api

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001