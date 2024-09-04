# README

## Project Setup
This projects boilerplate has been setup using the following commands:

### Initalization
- Create package.json using defaults: `npm init -y`
- Pin versions by default: `echo save-exact=true > .npmrc`
- Ignore node_modules in docker image: `echo node_modules > .dockerignore`

### Docker

- Copy Dockerfile `curl -o Dockerfile https://github.com/fhirter/webengineering/blob/6cec7bf94d158fe74671abe20ef78c8503b90e36/Exercises/05_ServerSideJS/Dockerfile`
- Copy docker-compose `curl -o docker-compose.yml https://github.com/fhirter/webengineering/blob/6cec7bf94d158fe74671abe20ef78c8503b90e36/Exercises/05_ServerSideJS/docker-compose.yml`

### Testing
- Install unit and api test suite: `npm install -D vitest supertest`
- Install gauge + taiko: `npm i -D @getgauge/cli taiko`
- Add manifest file for gauge: `echo "{\"Language\": \"js\"}" > manifest.json`
- Gitignore gauge settings and logs: `echo 'node_modules\n .gauge\n /logs/' >> .gitignore`
- create specs `mkdir specs && touch /specs/example.specs`
- create tests `mkdir tests && touch /tests/step_implementations.js`

### App
- Install app dependencies: `npm install express`
- Copy express hello world app from https://expressjs.com/en/starter/hello-world.html into `src/index.js`
- add scripts "serve", "test" in package.json

```json
{
  "scripts": {
    "test": "vitest",
    "serve": "node --watch src/index.js"
  }
}
```

## Run application

`docker compose up --build`

test with `curl localhost:3000`

## Run tests

- Unit Tests: `docker compose run web test`
- Acceptance Tests: `docker compose run web acceptance-tests`