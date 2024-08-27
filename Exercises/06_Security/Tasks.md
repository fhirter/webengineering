# Übung Security im Web

Untersuche den OWASP Juices Shop auf Sicherheitslücken.

## Lernziele

Die Studierenden

- Kennen Bedrohungen von Web-Applikationen und wissen, wie sie diesen begegnen können.
- Wissen, wie Ressourcen vor unerlaubtem Zugriff geschützt werden können.
- kennen Anwendung und Nutzen von Oauth, OIDC und JWT.
- Wissen, wie XSS und SQL Injection wirkungsvoll vermieden werden kann.

## Aufgabenbeschreibung

Der [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) ist eine Applikation, die absichtlich
Sicherheitslücken aufweist.

Versuche die Applikation unter Ausnutzung der in den [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
beschriebenen Sicherheitslücken anzugreifen.

Nutze dazu ein wissenschaftliches Vorgehen:
- Formuliere eine These, die du überprüfen willst.
- Beschaffe dir die benötigten Informationen.
- Überprüfe die These.
- Halte fest, ob du die These bestätigen oder widerlegen konntest.

Halte These, Informationen, Vorgehen und Schlussfolgerungen bei jedem Schritt schriftlich fest.

## [Setup](https://hub.docker.com/r/bkimminich/juice-shop#setup):

- Install Docker
- Run `docker pull bkimminich/juice-shop`
- Run `docker run --rm -p 3000:3000 bkimminich/juice-shop`
- Browse to http://localhost:3000
  (on macOS and Windows browse to http://192.168.99.100:3000 if you are using docker-machine instead of the native
  docker installation)

### Aufgaben zum Erreichen der Lernziele

- Führe einen SQL Injection Angriff aus.
- Führe einen XSS Angriff aus.
- Untersuche, die von der Applikation verwendeten Json Web Tokens (JWT).
- Untersuche, wie die Applikation die Authentifizierung implementiert.