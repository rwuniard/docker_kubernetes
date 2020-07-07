FROM node:alpine as builder # this is a builder phase
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# this means copying from the builder the /app/build folder to the nginx /usr/share/nginx/html
# the nginx folder can be found from nginx doc: https://hub.docker.com/_/nginx
COPY --from=builder /app/build /usr/share/nginx/html