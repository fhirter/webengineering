FROM node:20

ARG ENVIRONMENT="development"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN mkdir src

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "test"]