FROM alpine:latest

MAINTAINER Kevin Wang <wangkevin448@gmail.com>

WORKDIR /app

COPY production/package.json ./

RUN apk add --no-cache nodejs && apk -vv info && npm install

COPY public public

COPY production ./

EXPOSE 80 443

ENTRYPOINT ["npm", "run", "start"]
