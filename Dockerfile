FROM node:12.16.1-alpine3.9

# install dependencies
RUN mkdir -p /app
WORKDIR /app

COPY ./package.json ./package-lock.json /app/
RUN npm install --production && npm audit fix

COPY . /app
RUN npm run build

ENV NODE_ENV production

CMD ["npm", "start"]
