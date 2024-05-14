# Übung Server Side JavaScript

Schreibe eine einfache CRUD (Create, Read, Update, Delete) Applikation.
Nutze ein einfaches Datenschema deiner Wahl, z.B. Personaldaten oder Wetterdaten aus der vorgängigen Übung.

## Lernziele

Die Studierenden können einfache REST Schnittstellen serverseitig implementieren und gemäss der OpenAPI Spezifikation
dokumentieren.
Sie können die REST-API clientseitig ohne erneutes Laden der Seite abfragen.

Sie können die REST-API mit einer Datenbank verbinden und gegen SQL Injection absichern.

Sie können die Applikation mit Akzeptanz-, Integrations- und Unit-Tests vollständig testen und so die Grundlage für
kontinuierliches Deployment schaffen.

## Aufgabenbeschreibung

### REST API

Für viele Web-Applikationen bietet es sich an, das Frontend über eine REST-API anzubinden.
So ist die Applikation von Anfang an offen für Erweiterungen.
Die [OpenAPI Specification](https://de.wikipedia.org/wiki/OpenAPI) ist ein weit verbreiteter Standart zur Dokumentation
von REST-APIs.
Mit [SwaggerUI](https://swagger.io/tools/swagger-ui/) kann die Spezifikation intuitiv als Webseite dargestellt werden.
Mit [Swagger JS Doc](https://github.com/Surnet/swagger-jsdoc) kann die OpenAPI Spezifikation anhand des Express Code
generiert werden.
So wird sichergestellt, dass Dokumentation und Code synchron sind.

### Testing

Mit [Supertest](https://github.com/ladjs/supertest) können APIs sehr einfach getestet werden.
Supertest sollte mit `request('https://localhost')` genutzt werden, um die öffentliche Schnittstelle zu testen.

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