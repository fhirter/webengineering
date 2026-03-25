---
author: "fabian hirter"
date: "2025-09-26"
---

# Transferarbeit Web-Engineering "Web-Applikationen"

Die Aufgabenstellung beinhaltet sowohl Aufgaben der Applikationsentwicklung als auch Aufgaben der Systemtechnik. Wie die
Aufgaben gelöst werden ist den Gruppen überlassen.

## Kompetenzen

Die Studierenden

- können eine einfache Single Page Applikation erstellen.
- können einfache REST Schnittstellen serverseitig implementieren und clientseitig abfragen (nur TIN/NIA).
- können Anwendungen mit Datenbankanbindung realisieren (nur TIN/NIA).
- können Anwendungen mit automatisierten Akzeptanz- und Unit-Tests testen.
- können Applikationen containerisieren und deployen (nur TIS).

## Aufgabenstellung

Es soll eine Webanwendung entwickelt werden die zwei Orte via Eingabefeldern aufnimmt und die Route zwischen diesen
Orten berechnet und anzeigt.

- Beschreibe die Funktionalität (User Interface, API) mit automatisierten Akzeptanztests und Teste sämtlichen
  **eigenen** Code mit Unit-Tests.
    - Ein Beispiel für einen Akzeptanztest ist [beiliegen](tests/assignment.test.js).
- Erstelle eine HTML-Seite mit zwei Eingabefeldern für Start- und Zielort sowie einem Button der die Routenberechnung
  startet.
- Implementiere ein einfaches aber ansprechendes Layout.
- Erstelle die Anwendung als Single Page Application mit einem gängigen Frontend-Framework oder in VanillaJS
- Die Adressfelder sollen geeignete Vorschläge zur Vervollständigung der Adressen machen.
- Speichere die häufigsten Routen-Suchanfragen lokal im Browser und zeige dem Nutzer die meistgesuchten Routen. Die
  häufigsten 10 Suchanfragen sollen angezeigt werden.
- Nutze folgende Karten-API Endpoints:
    - [api.openrouteservice.org/geocode/search](https://api.openrouteservice.org/geocode/search)
    - [api.openrouteservice.org/v2/directions/](https://api.openrouteservice.org/v2/directions/)
    - [api.openrouteservice.org/geocode/autocomplete](https://api.openrouteservice.org/geocode/autocomplete)
- Stelle sicher, dass die Applikation keine vermeidbaren Sicherheitslücken
  aufweist. Orientiere dich an den [OWASP Top Ten](https://owasp.org/www-project-top-ten/).

### Nur TIN/NIA

- Entwickle eine REST-API ([min. Richardson Maturity Level 2](https://en.wikipedia.org/wiki/Richardson_Maturity_Model))
  zum Speichern von persönlichen Routen. Dokumentiere diese mit Swagger.
- Speichere die Routen in einer Datenbank.

### Nur TIS

- Führe die Unit-Tests in einer Deployment-Pipeline aus.
- Deploye die Anwendung automatisch

## Bewertungsraster

- Frontend Applikation
    - Funktionalität (Laden und Anzeigen der Route, Autocompleter, 10 häufigsten Suchanfragen) (10)
    - Verständlichkeit des Codes (10)
    - Akzeptanz- und Unit-Tests (Vollständigkeit, Verständlichkeit) (10)
    - Mobile Friendly (5)
    - Barrierefrei (5)
- REST API
    - Funktionalität (Datenbank, REST API) (10)
    - Verständlichkeit des Codes (10)
    - Akzeptanz- und Unit-Tests (Vollständigkeit, Verständlichkeit) (10)
    - Swagger Dokumentation (5)
    - RESTfulness (min. Richardson Maturity Level 2) (5)
- Sicherheitslücken (Frontend und API) (10)
- Deployment
    - Tests werden automatisch ausgeführt (10)
    - Anwendung wird automatisch deployed (10)

**Bewertung**: `<erreichte Punkte>/<total mögliche Punkte>*5+1`. Gerundet auf 0.1.

### Punkteskala

Die Vergabe der Punkte geschieht gemäss folgender Skala:

| Punkte | Bezeichnung         |
|--------|---------------------|
| 0      | nicht vorhanden     |
| 1      | kaum vorhanden      |
| 2      | deutlich ungenügend |
| 3      | ungenügend          |
| 4      | knapp genügend      |
| 5      | genügend            |
| 6      | deutliche Mängel    |
| 7      | grössere Mängel     |
| 8      | kleine Mängel       |
| 9      | kleinste Mängel     |
| 10     | tadellos            |

Wenn das Punktemaximum einer Aufgabe nicht 10 ist werden die Punkte entsprechend skaliert.

### Abgabe

Per **E-Mail Link auf Git-Repository**. Keine Zip Anhänge, nicht auf Teams.