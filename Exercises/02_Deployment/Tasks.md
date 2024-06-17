# Deployment

## Lernziele

Die Studierenden können Applikationen containerisieren und automatisiert deployen.

Die Studierenden kennen die Struktur und Aufgaben einer Deployment-Pipeline und können selber eine einfache
Deployment-Pipeline erstellen.

Die Studierenden verstehen, wieso automatisierte Tests Grundlage für kontinuierliches Deployment sind.

## Vorgehen

Als Grundlage für spätere Übungen erstellen und deployen wir einen containerisierten Webserver.

Erstelle dazu eine [einfache HTML-Seite](https://www.w3schools.com/html/html_basic.asp) oder nutze die Seite aus der
vorgängigen Übung.

Halte alle ausgeführten Befehle und deren Erläuterung in einem Markdown File fest.
So kannst du später die Arbeit exakt nachvollziehen und gegebenenfalls automatisieren.

## Fallstudie

Das Management gibt eine Software in Auftrag und fordert vom Entwicklerteam eine Schätzung, wie lange die Entwicklung
dauern wird.
Ein Monat vor der Deadline kommunizieren die Entwickler:innen, dass der Release nicht am gewünschten Datum sein
wird. Drei Monate später wird die Software unter grossem Zeitdruck released.
Die Entwickler:innen sind frustriert, 
Die User:innen sind nicht zufrieden, weil die Software nicht ihren Anforderungen entspricht.

Was läuft hier schief? Was sollte anders gemacht werden?

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

## Deployment

Deploye den Container auf Azure. Nutze dazu Azure CLI und halte die ausgeführten Befehle fest.

1. Erstelle eine Azure Student-Subscription.
2. [Installiere Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) und logge dich mit `az login`
   in deinen Account ein.
2. Erstelle eine Container Registry und lade den Container hoch. Folge dazu der [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-acr).
   Wähle beim ersten Schritt mit der Option `--location` eine Region in der
   Nähe:  `az group create --name tekoTest --location switzerlandnorth`
3. Deploye anschliessend den Container gemäss [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-deploy-app).

Stelle sicher, dass du am Ende wieder alle Ressourcen gelöscht hast, damit nicht unnötig Kosten entstehen oder Guthaben
aufgebraucht wird. Der Befehl `az group delete --name myResourceGroup` löscht die gesamte resource
group. `az group list` sowie `az container list` sollten keine Ressourcen mehr anzeigen.

## Deployment Pipelines

### Gitlab CI

Untersuche die gegebene [Gitlab Deployment Pipeline](gitlab-ci-example.yml).

![img.png](pipeline.png)

- Welche Stufen sind definiert?
- Welche Schritte haben die einzelnen Stufen?
- Welche Abhängigkeiten existieren?
- Wann werden die einzelnen Schritte ausgeführt?
- Welche Schritte erzeugen ein Resultat? Welches?
- Welche Punkte aus [Dave Farleys Video](https://youtu.be/x9l6yw1PFbs?feature=shared) werden umgesetzt? Welche nicht?

### Github Actions

Erstelle auf Github eine einfache Deployment-Pipeline die den oben erstellten Container auf Azure deployed.

Nutze dazu folgende [Anleitung](https://learn.microsoft.com/en-us/azure/container-instances/container-instances-github-action?tabs=userlevel)
sowie  die [ausführliche Dokumentation](https://docs.github.com/en/actions),
das "[Quickstart](https://docs.github.com/en/actions/quickstart)" und die
zahlreichen [Beispielworkflows](https://github.com/actions/starter-workflows).

   

