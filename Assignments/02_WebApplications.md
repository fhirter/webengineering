# Gruppenarbeit Web-Engineering "Web-Applikationen"

## Kompetenzen

Die Studierenden

- können eine einfache Single Page Applikation mit einem gängigen Framework erstellen, können die Anwendung mit
  Komponenten strukturieren und Templating anwenden.
- können einfache REST Schnittstellen serverseitig implementieren und clientseitig abfragen.
- können Anwendungen mit Datenbankanbindung realisieren.
- können Anwendungen mit automatisierten Akzeptanztests testen.

## Anforderungen Informatik Applikationsentwicklung und Systemtechnik

Es soll eine Webanwendung entwickelt werden die zwei Orte via Eingabefeldern aufnimmt und die Route zwischen diesen
Orten berechnet und anzeigt.

- Beschreibe die Funktionalität (User Interface) mit automatisierten Akzeptanztests
- Nutze folgende Karten-API Endpoints:
    - [api.openrouteservice.org/geocode/search](https://api.openrouteservice.org/geocode/search)
    - [api.openrouteservice.org/v2/directions/](https://api.openrouteservice.org/v2/directions/)
- Erstelle eine HTML-Seite mit zwei Eingabefeldern für Start- und Zielort sowie einem Button der die Routenberechnung
  startet.
- Erstelle die Anwendung als Single Page Application mit einem gängigen Frontend-Framework.
- Implementiere ein einfaches aber ansprechendes Layout.

## Zusätzlich Informatik Applikationsentwicklung

Die Frontend-Applikation soll nicht direkt mit der Karten-API kommunizieren, sondern die Daten von einer eigenen API
laden.

Die Adressfelder sollen geeignete Vorschläge zur Vervollständigung der Adressen machen.

Die häufigsten 10 Suchanfragen sollen angezeigt werden.

- Nutze zusätzlich folgenden API
  Endpoint: [api.openrouteservice.org/geocode/autocomplete](https://api.openrouteservice.org/geocode/autocomplete)
- Beschreibe die Funktionalität (API) mit automatisierten Akzeptanztests und Teste sämtlichen **eigenen** Code mit
  Unit-Tests.
- Speichere die häufigsten Routen-Suchanfragen lokal im Browser und zeige dem Nutzer die meistgesuchten Routen.
- Entwickle eine REST-API (Richardson Maturity Level 2) mit zwei Endpoints. Dokumentiere diese mit Swagger:
    - `/routes`: Anhand von zwei Adressen wird eine Route aufgelöst.
    - `/addresses`: Anhand von einer (unvollständigen) Adresse werden Adress-Vorschläge zurückgegeben.
- Nutze für die Frontend-Applikation diese API.
- Diskutiere, wie die implementierte API die REST Prinzipien (Client Server, Stateless, Cache, Uniform Interface,
  Layered System) umsetzt.

## Bewertungsraster

- Frontend Applikation (20)
    - Sinnvolle Strukturierung (Vanilla JS und Framework-Komponenten)
    - API fetch requests
- HTML und CSS (10)
    - Semantisch korrektes HTML
    - Keine Fehler und Warnungen auf https://validator.w3.org und https://jigsaw.w3.org/css-validator/
    - Wenige, sinnvolle Klassen und Selektoren
    - Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
- Akzeptanz- und Unit-Tests (10)
    - Vollständigkeit
    - Verständlichkeit
- REST API (20)
    - Swagger Dokumentation
    - Diskussion REST
    - Korrekte Verwendung der HTTP-Methoden
    - Korrekte HTTP Statuscodes (success & failure)

Total mögliche Punkte Applikationsentwicklung: 60
Total mögliche Punkte Systemtechnik: 40

**Bewertung**: `<erreichte Punkte>/<total mögliche Punkte>*5+1`. Gerundet auf 0.1.