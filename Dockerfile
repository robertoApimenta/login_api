FROM node:16-alpine AS login_backend

WORKDIR /app

COPY . .

EXPOSE 3001