FROM node:18.16.1-alpine

COPY ./ /app

WORKDIR /app

EXPOSE 80

CMD npm start