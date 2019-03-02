FROM node:10.15.1-alpine AS builder

WORKDIR /web

COPY package.json .
COPY yarn.lock .
RUN yarn --pure-lockfile --non-interactive

COPY src src
COPY public public
RUN yarn build

FROM nginx:1.15.9-alpine AS web

COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /web/build /usr/share/nginx/html
