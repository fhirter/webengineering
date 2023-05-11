<!-- headingDivider: 2 -->

# Grundlagen
## Client - Server
![img.png](client_server.png)

## URL
`https://www.philipackermann.de:80/books/web.html?language=de#chapter7`

## Aufbau von Webapplikationen
![img_1.png](separation_of_concerns.png)

## Software Stacks
### LAMP
![img.png](LAMP.png)

### MERN
![img.png](MERN.png)


## Werkzeuge
![img.png](browser_dev_tools.png)

# Webseiten strukturieren mit HTML
## Barrierefreiheit
### Gerätevielfalt
![img.png](gerätevielfalt.png)

### Browser Wars
![img.png](browser_warsI.png)
---
![StatCounter-browser-ww-monthly-200901-202303.png](StatCounter-browser-ww-monthly-200901-202303.png)
---
![StatCounter-comparison-ww-monthly-200901-202303.png](StatCounter-comparison-ww-monthly-200901-202303.png)

## Layoutkonzepte
* http://info.cern.ch/hypertext/WWW/TheProject.html
* Framesets
* Tabellen
* Cascading Style Sheets (CSS)
* Fixed vs. Liquid Layout
* Responsive Webdesign
* Device Agnostic
* Mobile First

## Grundstruktur
```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titel</title>
  </head>
  <body>

  </body>
</html>
```

# Webseiten gestalten mit CSS
## Box Model
![img.png](box_model.png)
![img_1.png](content_box.png)![img_2.png](border_box.png)


## Einheiten
- Absolute Grössen: `px` (`cm` ,`mm`, ...) -> sparsam verwenden
- Relative Grössen
  - `em`: Schriftgrösse des Elternelements
  - `rem`: Schriftgrösse des Wurzelelements
  - `vw`, `vh`: viewport breite, viewport höhe
![img.png](px_vw_em.png)![img.png](percent.png)

## Farben
![width:500px](CIE1931.png)
CIE 1931 Farbraum

---

### Vergleich Farbräume
![width:500px](color_spaces.png)

---

### Farben in CSS
#### sRGB Farbraum
- Farbnamen: `color: darkblue;`
- Hex-Werte: `color: #ffa500;`
- RGBA-Werte (mit Deckkraft): `color: rgba(169, 169, 169, 0.5)`
- HSL-Werte (Hue, Saturation, Lightness): `color: hsl(60, 100, 50)`

---

#### Alle sichtbaren Farben
- LCH (Lightness Chroma Hue / Opacity): `color: lch(29.2345% 44.2 27 / 0.5)`
- Oklch: `color: oklch(40.1% 0.123 21.57)`
- CIELAB (Lightness, red-green, blue-yellow): `color: lab(29.2345% 39.3825 20.0664);`
- Oklab: `color: oklab(40.1% 0.1143 0.045);`

---

![img.png](HSL_vs_LCH.png)
https://codepen.io/web-dot-dev/pen/poZgXxy


# Webanwendungen deployen und hosten
## Webanwendungen organisieren und verwalten
# Webseiten interaktiv machen mit JavaScript
# Web-APIs verwenden
# Webanwendungen testen
# Webprotokolle verwenden
## HTTP
## Websockets
# Webformate verwenden
## Rastergrafiken
## Vektorgrafiken
# Single-Page-Applikationen implementieren
# JavaScript auf der Serverseite verwenden
# Webservices implementieren
## REST
# Daten in Datenbanken speichern
# Webanwendungen absichern
# Die Performance von Webanwendungen optimieren
