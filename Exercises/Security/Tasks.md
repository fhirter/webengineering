# Übung Security im Web

## Lernziele

Die Studierenden

- kennen Bedrohungen von Web-Applikationen und wissen, wie sie diesen begegnen können.
- wissen, wie Ressourcen vor unerlaubtem Zugriff geschützt werden können.
- kennen Anwendung und Nutzen von Oauth, OIDC und JWT.
- wissen, wie XSS und SQL Injection wirkungsvoll vermieden werden kann.

### Aufgaben zum Erreichen der Lernziele

- Führe einen SQL Injection Angriff aus.
- Führe einen XSS Angriff aus.
- Untersuche die von der Applikation verwendeten JSON Web Tokens (JWT).
- Untersuche, wie die Applikation die Authentifizierung implementiert.

## OWASP Juice Shop

Der [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) ist eine Applikation, die absichtlich
Sicherheitslücken aufweist.

Versuche die Applikation unter Ausnutzung der in den [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
beschriebenen Sicherheitslücken anzugreifen. Die Beschreibung zu den einzelnen Themen gibt dir viele Anhaltspunkte für
einen möglichen Angriff:

- [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
- [Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)
- [Injection](https://owasp.org/Top10/A03_2021-Injection/)
- [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
- [Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
- [Vulnerabel and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)
- [Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)
- [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)
- [Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)
- [Server-Side Request Forgery (SSRF)](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

Nutze dazu ein ingenieur-wissenschaftliches Vorgehen (vgl. "Systems Engineering", S.70):

1. Zielsuche: Analyse, Recherche und Zielformulierung
2. Lösungssuche: Untersuchen der Sicherheitslücke
3. Bewertung: Festhalten, ob das gewünschte Ergebnis eingetroffen ist.

Halte deine Gedanken bei jedem Schritt schriftlich fest. Dieser Zyklus kann sehr kurz sein, ein erstes Ziel kann z.B.
sein die Applikation zu installieren. Der Zyklus wird also im Verlauf dieser Übung mehrmals durchlaufen.

Präsentiere am Schluss deine Ergebnisse mit einer Flipchart.

### [Setup](https://hub.docker.com/r/bkimminich/juice-shop#setup):

- Install Docker
- Run `docker pull bkimminich/juice-shop`
- Run `docker run --rm -p 3000:3000 bkimminich/juice-shop`
- Browse to http://localhost:3000
  (on macOS and Windows browse to http://192.168.99.100:3000 if you are using docker-machine instead of the native
  docker installation)

## Security Header

Setze für ein statisches Hosting passende Security Header. Wähle die Header so, dass sie möglichst restriktive sind,
ohne die Funktion zu beeinträchtigen.

## Quellen

- "Systems Engineering": Habenfeller Reinhard, de Weck Oliver, Fricke Ernst, Vössner Siegfried, Systems Engineering,
  2018, Orell Füssli