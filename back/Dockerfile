FROM node:latest

COPY ./ /app
WORKDIR /app

RUN npm install

ENV HOST ""
ENV USER ""
ENV PASS ""
ENV DB ""

EXPOSE 4000
CMD ["node", "index.js"]
