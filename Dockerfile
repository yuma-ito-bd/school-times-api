# for build
FROM node:12.16.1-alpine3.9 AS builder

WORKDIR /app
COPY . /app/
RUN npm ci && npm run build

# for release
FROM node:12.16.1-alpine3.9
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY ./package.json ./package-lock.json /app/

RUN mkdir -p /app/db/migrations /app/db/see
COPY ./package.json ./package-lock.json /app/
RUN npm ci --production

ENV NODE_ENV production

CMD ["npm", "start"]
