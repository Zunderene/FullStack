FROM node:latest

COPY ./ /app
WORKDIR /app

RUN npm install
RUN npx prisma generate

EXPOSE 4000
CMD ["node", "index.js"]
