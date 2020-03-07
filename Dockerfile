FROM node:12.16.1-alpine3.9

# install dependencies
RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm install --production && npm audit fix

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 80

CMD ["npm", "start"]
