# Übung JavaScript
Schreibe ein Programm, welches das aktuelle Wetter für einen wählbaren Ort anzeigt.
Es soll eine Adresse eingeben werden können, an der das aktuelle Wetter angezeigt wird.
Nutze für die Auflösung der Koordinaten [openrouteservice.org](https://openrouteservice.org/dev/#/api-docs/geocode) und für die Wetterdaten [openweathermap.org](https://openweathermap.org/current).
Erstelle zuerst auf beiden Plattformen einen API Key.

Erstelle für die JavaScript-Funktionen zuerst die Tests und implementiere erst anschliessend die Funktionalität. 

Installiere anschliessend das Jest Testingframework:
- In einem neuen Verzeichnis: `npm init`
- `npm install --save-dev jest`
- Füge folgenden Abschnitt zu `package.json` hinzu:
```JavaScript
  {
    "scripts": {
      "test": "jest",
      "watch": "jest --watchAll"
    }
  }
```
- Installiere die DOM Testumgebung: `npm install --save-dev jest-environment-jsdom`
- Starte die tests mi `npm test` oder `npm run watch`

1. Erstelle zuerst die HTML-Grundstruktur mit einem einfachen Eingabeformular für die Website. Die Website soll primär für Mobile-Anwendung funktionieren.
2. Zeige die Daten Temperatur (in°C), Luftdruck und Luftfeuchtigkeit an.
3. Zeichne mit SVG eine Sonne und Wolken und zeige anhand der API Daten nur die Sonne, Sonne und Wolken oder nur Wolken an. (Nutze zum Gruppieren der SVG-Elemente das Element <g>) 
4. Erweitere das Programm, z.B.
   - Erweitere und animiere die SVG Symbole (z.B. bewegter Regen) mit CSS oder JS.
   - Zeichne die Daten in regelmässigen Abständen auf und zeichne eine Grafik des Verlaufs. Nutze ein geeignetes Framework, z.B. [D3.js](https://github.com/d3/d3/wiki).
   - Zeige den Forecast