FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Aquí eliminamos cualquier .env interno que pueda existir
RUN rm -f .env

EXPOSE 8080

CMD ["node", "server/index.js"]
