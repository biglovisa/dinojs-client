# base image
FROM node:latest

# create folder and set working directory
RUN mkdir -p /usr/src/dinojs/client
WORKDIR /usr/src/dinojs/client

# add node_modules to the $PATH
ENV PATH /usr/src/dinojs/client/node_modules/.bin:$PATH

# indicate port to be listened to
EXPOSE 3000

# add source code and install dependencies
COPY . /usr/src/dinojs/client
RUN npm install --silent

# start the app
CMD ["npm", "start"]
