# README

## Project Setup
This projects boilerplate has been setup using the following commands:

### Initalization
- Create package.json using defaults: `npm init -y`
- Pin versions by default: `echo save-exact=true > .npmrc`
- Ignore node_modules in docker image: `echo node_modules > .dockerignore`

### Testing
- Install unit test suite: `npm install -D vitest`
- Install gauge + taiko: `npm i -D @getgauge/cli taiko `
- Add manifest file for gauge: `echo "{\"Language\": \"js\"}" > manifest.json`
- Gitignore gauge settings and logs: `echo '.gauge \n logs' >> .gitignore `

### App
- Install app dependencies: `npm install express`
- Copy express hello world app from https://expressjs.com/en/starter/hello-world.html into `src/index.js`

## Run application

`docker compose up --build`

test with `curl localhost:3000`

## Run tests

- Unit Tests: `docker compose run web test`
- Acceptance Tests: `docker compose run web acceptance-tests`