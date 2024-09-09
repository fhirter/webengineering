FROM node:20

ARG ENVIRONMENT="development"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN mkdir src

RUN npm i

COPY manifest.json .
COPY specs specs
COPY tests tests

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["serve"]