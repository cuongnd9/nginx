FROM node:10-alpine

RUN mkdir app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

EXPOSE 8100

CMD ["yarn", "start"]
