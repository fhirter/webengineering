# Übung Server Side JavaScript

Schreibe eine einfache CRUD (Create, Read, Update, Delete) Applikation.
Nutze ein einfaches Datenschema deiner Wahl, z.B. Personaldaten oder Wetterdaten aus der vorgängigen Übung.

## Lernziele
Die Studierenden können einfache REST Schnittstellen serverseitig implementieren und gemäss der OpenAPI Spezifikation dokumentieren.
Sie können die REST-API clientseitig ohne erneutes Laden der Seite abfragen.

Sie können die REST-API mit einer Datenbank verbinden und gegen SQL Injection absichern.

Sie können die Applikation mit Akzeptanz-, Integrations- und Unit-Tests vollständig testen und so die Grundlage für kontinuierliches Deployment schaffen.

## Aufgabenbeschreibung
### REST API
Für viele Web-Applikationen bietet es sich an, das Frontend über eine REST-API anzubinden.
So ist die Applikation von Anfang an offen für Erweiterungen.
Die [OpenAPI Specification](https://de.wikipedia.org/wiki/OpenAPI) ist ein weit verbreiteter Standart zur Dokumentation von REST-APIs.
Mit [SwaggerUI](https://swagger.io/tools/swagger-ui/) kann die Spezifikation intuitiv als Webseite dargestellt werden.
Mit [Swagger JS Doc](https://github.com/Surnet/swagger-jsdoc) kann die OpenAPI Spezifikation anhand des Express Code generiert werden.
So wird sichergestellt, dass Dokumentation und Code synchron sind.

### Testing
Behavior-driven development ([BBD](https://en.wikipedia.org/wiki/Behavior-driven_development)) erweitert das Prinzip von Test Driven Development ([TDD](https://en.wikipedia.org/wiki/Test-driven_development)) auf die Akzeptanztests.
So werden zu Beginn die User-Stories in automatischen, ausführbaren Akzeptanztests formuliert.
Diese sind nun die Grundlage der weiteren Entwicklung.

Integrationstests testen das Zusammenspielen der verschiedenen Komponenten.
In diesem Fall ist dies die Kommunikation der Applikation mit der Datenbank

Unit-Tests testen einzelne Teile des Code, das kann eine einzelne Funktion sein oder eine REST Resource.
Mit [Supertest](https://github.com/ladjs/supertest) können APIs sehr einfach getestet werden.
Supertest sollte mit `request('https://localhost')` genutzt werden, um die öffentliche Schnittstelle zu testen.

Tests sollen Funktionalität beschreiben, die bekannt ist.
Es ist nicht sinnvoll in einem wasserfall-artigen Vorgehen die Applikation vorgängig vollständig durchzutesten.
Dies führt nur zu unverhältnismässigem Aufwand und Änderungen der Tests.

### Datenbank
Persistiere die Daten mit einer gängigen relationalen Datenbank (MySQL/MariaDB, PostgresQL).
Nutze dazu einen Container für die Datenbankinstanz.
Stelle sicher, dass die Applikation resistent gegenüber SQL-Injection Angriffe ist.

## Tech-Stack

- Backendsprache: Node.JS
- Backend-Framework: [Express.js](http://expressjs.com/)
- Unit-Test-Framework: [Jest](https://jestjs.io/)
- API-Test-Framework: [Supertest](https://www.npmjs.com/package/supertest)
- Akzeptanztests: [Gauge+Taiko](https://gauge.org/)

## Vorgehen

Folgende Punkte sollen in dieser Reihenfolge erledigt werden:
1. Beschreibe die Funktionalität mittels Akzeptanztests.
2. Schreibe Integrations-Tests für die API.
3. Setze einen Container auf, der die Node Applikation ausführt.
4. Implementiere die API bis die Tests nicht mehr fehlschlagen. Nutze dazu statische Dummy-Daten. Erstelle die 
   OpenAPI Spezifikation gleichzeitig anhand des Codes.
5. Implementiere das Swagger UI.
6. Erstelle die Datenbankanbindung.
7. Erstelle die Frontend-Applikation mit einem gängigen Framework, z.B [Svelte](https://svelte.dev/) mit [SvelteKit]
   (https://kit.svelte.dev).

Dabei müssen die Punkte nicht vollständig abgearbeitet sein, bevor der nächste Punkt bearbeitet wird.
So kann ein Akzeptanztest für einen Teil der Funktionalität geschrieben werden, anschliessend der API-Integrationstest geschrieben werden und danach die Funktionalität implementiert werden.
Es werden also die Punkte 1-7 für jedes einzelne Feature durchlaufen.

### Begründung der Reihenfolge
Unit-Tests zuerst zu schreiben zwingt uns Entwickler:innen, uns zuerst Gedanken zu machen, wie die Schnittstelle des 
Systems sinnvoll gestaltet wird. 
Das ist sinnvoll, denn damit wird vermieden, dass die Schnittstelle durch die Implementierung definiert wird.

Gleiches gilt für Akzeptanz- und Integrationstests. 
Werden Akzeptanztests vor der Implementierung formuliert dienen diese als präzise ausführbare Spezifikation, die mit 
den Kunden erarbeitet und von diesen freigeben werden können.
So können Missverständnisse bei der Formulierung der Anforderungen vermieden werden.

Die restliche Reihenfolge hat didaktische Gründe, sie folgt dem Unterrichtsprogramm.