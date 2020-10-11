# for build
FROM node:12.16.1-alpine3.9 AS builder

WORKDIR /app
COPY . /app/
RUN npm i 
RUN npm run build

# for release
FROM node:12.16.1-alpine3.9
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY config /app/config
COPY ./package.json ./package-lock.json .sequelizerc /app/
RUN npm ci --production

ENV NODE_ENV production

CMD ["npm", "start"]
