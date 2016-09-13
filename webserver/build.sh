#!/usr/bin/env bash

export NODE_ENV=production

npm run build

cp src/dashboard.html public/dashboard.html && cp src/index.html public/index.html
