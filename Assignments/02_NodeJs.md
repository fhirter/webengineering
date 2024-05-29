# Gruppenarbeit Web-Engineering "Node.JS"

## Kompetenzen

Die Studierenden

- können die HTML Grundelemente korrekt anwenden und können damit einfache Seiten komplett erstellen.
- können einfache Stylesheets erstellen und einbinden und dabei Selektoren, Farben, Einheiten korrekt verwenden.
- können mit Flexbox und Grid einfache Mehrspaltenlayouts erstellen.
- können eine einfache Single Page Applikation mit einem gängigen Framework erstellen.
- können einfache REST Schnittstellen serverseitig implementieren und clientseitig abfragen.
- können Anwendungen mit Datenbankanbindung realisieren.
- können Applikationen containerisieren und deployen.
- können Anwendungen mit automatisierten Akzeptanztests testen.
- können Applikationen mit Deployment-Pipelines kontinuierlich integrieren und deployen.

- können mit Websockets eine bidirektionale Client-Server Kommunikation realisieren.
- Können JWT in Applikationen zur Authorisierung und Authentifizierung von Benutzern verwenden

## Aufgabenstellung

Erstelle eine Webanwendung, die zwei Orte via Eingabefeldern aufnimmt und die Route zwischen diesen Orten anzeigt.

Nutze dazu folgende Endpoints:
• https://api.openrouteservice.org/geocode/search
• https://api.openrouteservice.org/v2/directions/cycling-road

#### Anforderungen

- Schreibe automatisierte Akzeptanztests für die Anwendung.
- Erstelle eine HTML-Seite mit zwei Eingabefeldern für Start- und Zielort sowie einem Button zur Routenberechnung.
- Gestalte die HTML-Seite mit einem Stylesheet so, dass sie für verschiedene Geräte funktioniert.
- Erstellen Sie die Anwendung als Single Page Application mit einem gängigen JavaScript-Framework.
- Schreibe ein Skript, das nach Klick auf den "Route berechnen"-Button die Eingabewerte entgegennimmt und die
  OpenRouteService API aufruft und die Route anzeigt.
- Teste den Code mit Unit-Tests.
- Speichern Sie die häufigsten Suchanfragen in einer Datenbank und zeigen Sie dem Nutzer die meistgesuchten
  Routen.
- Deploye die Anwendung in einer geeigneten Umgebung, sodass sie übers Internet erreichbar ist.
- (Optional) Implementieren Sie eine CI/CD-Pipeline, die Ihre Anwendung automatisch baut, testet (Unittests) und deployed.
- --------> Nutze Websockets, um Echtzeit-Updates der Route an den Nutzer zu senden, beispielsweise wenn eine neue
  Route berechnet wird oder sich die Verkehrslage ändert.

## Bewertungsraster

- HTML und CSS (10)
    - Semantisch korrektes HTML
    - Keine Fehler und Warnungen auf https://validator.w3.org und https://jigsaw.w3.org/css-validator/
    - Wenige, sinnvolle Klassen und Selektoren
    - Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
- Akzeptanz- und Unit-Tests
  - Vollständigkeit
  - Verständlichkeit
- REST Integration
- Websockets
- Datenbank
- Deployment

Total mögliche Punkte:
**Bewertung**: <erreichte Punkte>/<total mögliche Punkte>*5+1. Gerundet auf 0.1.