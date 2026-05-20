# Übung Webserver

Installiere mit Docker den Apache-Webserver lokal oder auf einem Raspberry-PI und veröffentliche folgende HTML-Datei:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titel</title>
  </head>
  <body>
    Test erfolgreich!
  </body>
</html>
```

## Anleitung

- docker installieren: https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script
- public verzeichnis erstellen: `mkdir public`
- apache starten: `docker run -d -p 80:80 --name apache -v $(pwd)/public:/usr/local/apache2/htdocs/ httpd:latest`
