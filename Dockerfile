FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn tsc

EXPOSE 3000
CMD ["yarn", "start"]