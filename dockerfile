# node build command
FROM node:alpine3.16 as nodework
WORKDIR /app
COPY ./package.json /app
RUN yarn install

COPY . .
RUN npm run build
# copy ./build /app 
copy ./temp /app


# nginx command
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]