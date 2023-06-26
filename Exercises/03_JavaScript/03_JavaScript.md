# Übung JavaScript
Schreibe ein Programm, welches das aktuelle Wetter für einen wählbaren Ort anzeigt.
Es soll eine Adresse eingeben werden können, an der das aktuelle Wetter angezeigt wird.
Nutze für die Auflösung der Koordinaten [openrouteservice.org](https://openrouteservice.org/dev/#/api-docs/geocode) und für die Wetterdaten [openweathermap.org](https://openweathermap.org/current).
Erstelle für die JavaScript-Funktionen zuerst die Tests und implementiere erst anschliessend die Funktionalität. 

## Vorbereitungen 
Erstelle zuerst auf beiden Plattformen einen API Key, weil die Aktiviereung kann mehrere Stunden dauern.

Installiere das Jest Testingframework:
- In einem neuen Verzeichnis: `npm init`
- Installiere die Testlibraries:
`npm install --save-dev jest jest-environment-jsdom @babel/preset-env`
- Füge folgenden Abschnitte zu `package.json` hinzu:
```JavaScript
  {
    "scripts": {
      "test": "jest",
      "watch": "jest --watchAll"
    }
  }
```
```javascript
  "babel": {
    "env": {
      "test": {
        "plugins": ["@babel/plugin-transform-modules-commonjs"]
      }
    }
  }
```
- Erstelle die Datei `jest.config.js` im Wurzelverzeichnis:
```javascript
module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ['js'],
    testTimeout: 1,
    collectCoverage: true,
    coverageReporters: ['text'],
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    testMatch: ["**/*.test.js"]
    /* default ["clover", "json", "lcov", "text"]*/
}
```
Erstelle die Datei `.gitignore` mit folgendem Inhalt (`echo node_modules > .gitignore`)
```gitignore
node_modules
```
- Starte die tests mi `npm test` oder `npm run watch`

## Vorgehen

1. Erstelle zuerst eine einfache HTML-Grundstruktur mit einem einfachen Eingabeformular für die Website. Die Website soll primär für Mobile-Anwendung funktionieren.
2. Zeige die Daten Temperatur (in°C), Luftdruck und Luftfeuchtigkeit an.
3. Zeichne mit SVG eine Sonne und Wolken und zeige anhand der API Daten nur die Sonne, Sonne und Wolken oder nur Wolken an. Nutze zum Gruppieren der SVG-Elemente das Element <g>. Du kannst SVG Elemente auch mit IDs und Klassen ausstatten und wie HTML Elemente ansprechen und gestalten.
4. Erweitere das Programm, z.B.
   - Erweitere und animiere die SVG Symbole (z.B. bewegter Regen) mit CSS oder JS.
   - Zeichne die Daten in regelmässigen Abständen auf und zeichne eine Grafik des Verlaufs. Nutze ein geeignetes Framework, z.B. [D3.js](https://github.com/d3/d3/wiki). Implementiere einen Service Worker, um die abgerufenen Daten lokal zwischenzuspeichern.
   - Zeige den Forecast
5. Verwende ein Framework deiner Wahl, das du noch nie verwendet hast. Wenn du dir nicht sicher bist, wähle Svelte, dafür erhälst du Unterstützung im Unterricht und Lösungen.
