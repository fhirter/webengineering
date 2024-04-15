# Deployment

## Lernziele

Die Studierenden können Applikationen containerisieren und deployen.

## Vorgehen

Stelle eine bisher erstellt statische HTML und CSS Seite öffentlich zur Verfügung.

Erstelle anschliessend einen Docker Container für die Webseite.
Später werden wir Applikationen mit serverseitigem Code und Datenbanken einfach mit Containern starten.

## Statisches Hosting

Deploye die Seite auf einem Hosting für statische Seiten.

Untersuche und vergleiche folgende Angebote:

- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Google Cloud Storage](https://cloud.google.com/storage)

Wie ist kontinuierliches Deployment möglichst einfach möglich?

Versuche, die Seite automatisiert aus dem Git Repository zu deployen.

Halte dein Vorgehen fest so dass du es in der Klasse präsentieren kannst.
Nutze dafür Markdown mit PlantUML oder Mermaid, für Diagramme.
Halte die Dokumentation im Git Repository fest.

## Docker Container

Packe die Website in einen Docker Container

1. Installiere und starte dazu zuerst [Docker Desktop](https://www.docker.com/).
2. Erstelle ein Dockerfile im Wurzelverzeichnis:

```Dockerfile
FROM nginx:latest

COPY . /usr/share/nginx/html

RUN chmod g+rx -R /usr/share/nginx/html
```

3. Erstelle und starte anschliessend das container image. Du solltest nun die Webseite auf `localhost` im Browser
   erreichen.

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

5. Nun kannst du den container mit `docker-compose up` starten. Nutze `docker-compose up --build` um das image vor dem
   Starten neu zu builden.

### Deployment

#### Azure

Deploye den Container auf Azure. Nutze dazu Azure CLI und halte die ausgeführten Befehle in einem Markdown Dokument
fest. So kannst du später die Arbeit exakt nachvollziehen und gegebenenfalls automatisieren.

1. [Installiere Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) und logge dich mit `az login`
   in deinen Account ein.
2. Deploye anschliessend den Container
   gemäss [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr).
   Wähle mit der Option `--location` eine Region in der Nähe:  `az group create --name tekoTest --location switzerlandnorth`

Stelle sicher, dass du am Ende wieder alle Ressourcen gelöscht hast, damit nicht unnötig Kosten entstehen oder Guthaben
aufgebraucht wird. Der Befehl `az group delete --name myResourceGroup` löscht die gesamte resource
group. `az group list` sowie `az container list` sollten keine Ressourcen mehr anzeigen (abgesehen von der .
   