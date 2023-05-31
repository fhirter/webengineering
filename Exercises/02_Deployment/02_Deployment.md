# Deployment
## Lernziele
Die Studierenden können Applikationen containerisieren und deployen.

## Vorgehen
Stelle eine bisher erstellt statische HTML und CSS Seite öffentlich zur Verfügung.

Erstelle anschliessend einen Docker Container für die Webseite. 
Später werden wir Applikationen mit serverseitigem Code und Datenbanken einfach mit Containern starten.

## Statisches Hosting
Deploye die Seite auf einem Hosting für statische Seiten:
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Google Cloud Storage](https://cloud.google.com/storage)

Halte dein Vorgehen fest!

## Docker Container
Packe die Website in einen Docker Container

1. Installiere und starte dazu zuerst [Docker Desktop](https://www.docker.com/).
2. Erstelle ein Dockerfile im Wurzelverzeichnis:
```Dockerfile
FROM nginx:latest

COPY . /usr/share/nginx/html

RUN chmod g+rx -R /usr/share/nginx/html
```
3. Erstelle und starte anschliessend das container image. Du solltest nun die Webseite auf `localhost` im Browser erreichen.

```shell
docker build . --tag webengineering
docker run --name webengineering --detach --publish 80:80 webengineering 
```

4. Stoppe den Container mit `docker stop webengineering` und lösche ihn mit `docker rm webengineering`
5. Erstelle ein docker-compose file:
```yaml
version: "1"
services:
  web:
    build: .
    container_name: webengineering
    restart: always
    ports:
      - "80:80"
```
5. Nun kannst du den container mit `docker-compose up` starten. Nutze `docker-compose up --build` um das image vor dem Starten neu zu builden.
6. Für Fortgeschrittene: Deploye den Container mit auf einem Container Hosting deiner Wahl, z.B. [Google Cloud Run](https://cloud.google.com/run), [Fly.io](https://fly.io/)