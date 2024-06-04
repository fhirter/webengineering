# Gruppenarbeit Web-Engineering "Web-Applikationen"

## Kompetenzen

Die Studierenden

- können eine einfache Single Page Applikation mit einem gängigen Framework erstellen, können die Anwendung mit
  Komponenten strukturieren und Templating anwenden.
- können Multipage Applikationen mit Routing entwickeln.
- können einfache REST Schnittstellen serverseitig implementieren und clientseitig abfragen.
- können Anwendungen mit Datenbankanbindung realisieren.
- können Anwendungen mit automatisierten Akzeptanztests testen.

## Aufgabenstellung

Es soll eine Webanwendung entwickelt werden die zwei Orte via Eingabefeldern aufnimmt und die Route zwischen diesen
Orten berechnet und anzeigt.

Die Adressfelder sollen geeignete Vorschläge zur Vervollständigung der Adressen machen.

Die häufigsten 10 Suchanfragen sollen angezeigt werden.

## Anforderungen

- Beschreibe die Funktionalität (API und User Interface) mit automatisierten Akzeptanztests und Teste sämtlichen 
  **eigenen** Code mit Unit-Tests.
- Entwickle eine REST-API (Richardson Maturity Level 2) mit zwei Endpoints. Dokumentiere diese mit Swagger:
    - `/routes`: Anhand von zwei Adressen wird eine Route aufgelöst.
    - `/addresses`: Anhand von einer (unvollständigen) Adresse werden Adress-Vorschläge zurückgegeben.
- Diskutiere, wie die implementierte API die REST Prinzipien (Client Server, Stateless, Cache, Uniform Interface,
  Layered System) umsetzt.
- Nutze folgende Karten-API Endpoints:
    - [api.openrouteservice.org/geocode/search](https://api.openrouteservice.org/geocode/search)
    - [api.openrouteservice.org/geocode/autocomplete](https://api.openrouteservice.org/geocode/autocomplete)
    - [api.openrouteservice.org/v2/directions/](https://api.openrouteservice.org/v2/directions/)
- Erstelle eine HTML-Seite mit zwei Eingabefeldern für Start- und Zielort sowie einem Button der die Routenberechnung
  startet. Lade die Route und Adressvervollständigung von der eigenen API.
- Erstelle die Anwendung als Single Page Application mit einem gängigen Frontend-Framework.
- Speichere die häufigsten Routen-Suchanfragen lokal im Browser und zeige dem Nutzer die meistgesuchten Routen.

## Bewertungsraster

- REST API (20)
    - Swagger Dokumentation
    - Diskussion REST
    - Korrekte Verwendung der HTTP-Methoden
    - Korrekte HTTP Statuscodes (success & failure)
- Frontend (20)
    - Sinnvolle Strukturierung mit Framework-Komponenten und Routing
    - Semantisch korrektes HTML
    - Keine Fehler und Warnungen auf https://validator.w3.org und https://jigsaw.w3.org/css-validator/
    - Wenige, sinnvolle Klassen und Selektoren
    - Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
- Akzeptanz- und Unit-Tests (10)
    - Vollständigkeit
    - Verständlichkeit

Total mögliche Punkte: 50

**Bewertung**: <erreichte Punkte>/<total mögliche Punkte>*5+1. Gerundet auf 0.1.