# Gruppenarbeit Web-Engineering

Erstelle eine Website für dich persönlich oder ein Projekt deiner Wahl und deploye sie auf einem geeigneten Hosting für statische Webseiten.

- Erstelle eine einfache HTML-Grundstruktur und ein CSS-Layout, das für möglichst viele verschiedene Bildschirme funktioniert.
- Setze geeignete Meta-Tags, damit eine Suchmaschine die Seite optimal indexieren kann.
- Nutze für die Inhalte einen Static Site Generator (SSG), der aus Markdown-Files Webseiten rendert. Implementiere das erstellte Theme.
- Deploye die Website auf einem Hosting für statische Webseiten direkt und automatisch aus dem Git Repository.
- Stelle sicher, dass HTML und CSS korrekt sind (https://validator.w3.org, https://jigsaw.w3.org/css-validator/).
- Stelle sicher, dass der Lighthouse Index über 90 ist (https://pagespeed.web.dev/).

Dokumentiere folgende Punkte:

- `Readme.md`: Ausgefüllte Links auf HTML und CSS Validatoren sowie Pagespeed Analyse, so dass die Analyse per Click gemacht werden kann.
- `StaticSiteGenerator.md`: Erläuterung des gewählten SSG mit Begründung (Variantenentscheid)
- `Deployment.md`: Erläuterung des Deployments und Hostings mit Begründung (Variantenentscheid)

Sämtliche Aussagen sind mit Quellen (Bücher, Artikel, Dokumentationen) zu belegen und Hilfsmittel sind als solche anzugeben. 
Insbesondere sind durch KI-Tools generierte Texte unter Angabe des verwendeten Tools auszuweisen.

## Bewertungsraster

- Erläuterung und Begründung SSG (10)
- HTML (10)
    - Semantisch korrekt
    - Keine Fehler und Warnungen auf https://validator.w3.org
- CSS (10)
    - Wenige, sinnvolle Klassen und Selektoren
    - Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
    - Keine Fehler und Warnungen auf https://jigsaw.w3.org/css-validator/
- Leistung, Barrierefreiheit, Best Practices, SEO alle über 90: https://pagespeed.web.dev/ (10)
- Deployment (im Internet erreichbar) und verwendetes Hosting mit Begründung (10)

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