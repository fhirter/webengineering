# Deployment

## Lernziele

- Die Studierenden können Applikationen automatisiert deployen.
- Die Studierenden können Applikationen containerisieren deployen.

## Fallstudie

Das Management gibt eine Software in Auftrag und fordert vom Entwicklerteam eine Schätzung, wie lange die Entwicklung
dauern wird. Es wird abgemacht, dass bestimmte Power-User einen Monat vor dem Go-Live die Applikation testen.

Die Entwicklung dauert mehrere Jahre. Ein Monat vor der Testphase kommunizieren die Entwickler:innen, dass die Testphase
nicht am gewünschten Datum starten kann.

Sechs Monate später wird die Software unter grossem Zeitdruck in Betrieb genommen. Die Entwickler:innen sind frustriert,
die User:innen sind nicht zufrieden, weil die Software nicht ihren Anforderungen entspricht.

Was läuft hier schief? Was sollte anders gemacht werden?

Diskutiert in Gruppen und haltet die Antworten in Stichworten fest!

## Statisches Hosting

Deploye eine einfache Website auf einem Hosting für statische Webseiten direkt und automatisch aus dem Git Repository.
Einmal eingerichtet sollen Änderungen automatisch deployed werden.

- Erstelle
  eine [minimale HTML-Seite](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document).
- Halte alle ausgeführten Schritte und deren Erläuterung in einem Markdown File fest. So kannst du später die Arbeit
  exakt nachvollziehen und gegebenenfalls automatisieren.
- Vergleiche die zahlreichen Anbieter und wähle ein geeignetes Produkt: Netlify, Github Pages, Gitlab Pages, Cloudflare
  Pages, Google Cloud Storage, Amazon S3, etc.
- Erstelle eine einfache Deployment-Pipeline, die die Website auf das Hosting deployed.

## Webapplikation

### Docker Container

Halte alle ausgeführten Befehle und deren Erläuterung in einem Markdown File fest. So kannst du später die Arbeit exakt
nachvollziehen und gegebenenfalls automatisieren.

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
5. Erstelle ein docker-compose file (`docker-compose.yml`):

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

5. Nun kannst du den container mit `docker-compose up` starten. Nutze `docker-compose up --build` um das Image vor dem
   Starten neu zu builden.

### Deployment

Deploye den Container auf Azure. Nutze dazu Azure CLI und halte die ausgeführten Befehle fest.

1. Erstelle eine Azure Student-Subscription.
2. [Installiere Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) und logge dich mit `az login`
   in deinen Account ein.
3. Erstelle eine Container Registry und lade den Container hoch. Folge dazu
   der [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr).
   Wähle beim ersten Schritt mit der Option `--location` eine Region in der Nähe:
   `az group create --name tekoTest --location switzerlandnorth`
4. Deploye anschliessend den Container
   gemäss [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-deploy-app).

Stelle sicher, dass du am Ende wieder alle Ressourcen gelöscht hast, damit nicht unnötig Kosten entstehen oder Guthaben
aufgebraucht wird. Der Befehl `az group delete --name myResourceGroup` löscht die gesamte resource group.
`az group list` sowie `az container list` sollten keine Ressourcen mehr anzeigen.

### Deployment Pipelines

Erstelle auf Github eine einfache Deployment-Pipeline die den oben erstellten Container auf Azure deployed.

Nutze dazu
folgende [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-github-action?tabs=userlevel)
sowie die [ausführliche Dokumentation](https://docs.github.com/en/actions),
das "[Quickstart](https://docs.github.com/en/actions/quickstart)" und die
zahlreichen [Beispielworkflows](https://github.com/actions/starter-workflows).

   

