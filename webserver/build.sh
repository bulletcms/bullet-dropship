#!/usr/bin/env bash

export NODE_ENV=production

if [ ! -d "public" ]; then
  mkdir public
fi


cp src/dashboard.html public/dashboard.html && cp src/index.html public/index.html && cp node_modules/bullet-tracer/lib/dashboard.js public/dashboard.js && cp node_modules/bullet-tracer/lib/dashboardstyle.css public/dashboardstyle.css && cp node_modules/bullet-tracer/lib/index.js public/index.js && cp node_modules/bullet-tracer/lib/indexstyle.css public/indexstyle.css

docker build -t bullet-sabot .
