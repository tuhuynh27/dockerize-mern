FROM node:10.15.3-alpine as builder

RUN apk add yarn

RUN mkdir -p /root/src/api
WORKDIR /root/src/api
ENV PATH /root/src/api/node_modules/.bin:$PATH

COPY . .

RUN yarn

EXPOSE 3000

ENTRYPOINT ["npm","run","dev"]