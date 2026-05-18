# Apache mit Docker ausführen

- docker installieren: https://docs.docker.com/engine/install/debian/#install-using-the-convenience-script
- public verzeichnis erstellen: `mkdir public`
- apache starten: `docker run -d -p 80:80 --name apache -v $(pwd)/public:/usr/local/apache2/htdocs/ httpd:latest`