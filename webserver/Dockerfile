FROM alpine:edge

MAINTAINER Kevin Wang <wangkevin448@gmail.com>

WORKDIR /app

COPY production/package.json ./

RUN apk add --no-cache libc6-compat nodejs && apk -vv info && npm set progress=false && npm install

COPY public public

COPY production ./

EXPOSE 80 443

ENTRYPOINT ["npm", "run", "start"]
