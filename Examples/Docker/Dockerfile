FROM node:20

ARG ENVIRONMENT="development"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN npm ci

EXPOSE 8080

#CMD tail -f /dev/null

CMD ./setup.sh