# Übung JavaScript

Schreibe ein Programm, welches das aktuelle Wetter für einen wählbaren Ort anzeigt. Es soll eine Adresse eingeben werden können, an der das aktuelle Wetter angezeigt wird. Nutze für die Auflösung der Koordinaten [openrouteservice.org](https://openrouteservice.org/dev/#/api-docs/geocode) und für die Wetterdaten [openweathermap.org](https://openweathermap.org/current). Erstelle für die JavaScript-Funktionen zuerst die Tests und implementiere erst anschliessend die Funktionalität.

## Vorbereitungen

Erstelle zuerst auf beiden Plattformen einen API Key, die Aktivierung kann mehrere Stunden dauern.

Installiere das Jest Testingframework:

- In einem neuen Verzeichnis: `npm init`
- Installiere die Testlibraries:
  `npm install --save-dev jest`
- Füge folgenden Abschnitte zu `package.json` hinzu:

```json
  {
  "scripts": {
    "test": "NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest",
    "watch": "NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest --watchAll"
  }
}
```

- initialisiere jest mit `npm init jest@latest`
    - Typescript: no
    - test environment: jsdom
    - coverage: yes
    - provider: v8
    - automatically clear mocks: yes

Erstelle die Datei `.gitignore` mit folgendem Inhalt (`echo node_modules > .gitignore`)

```gitignore
node_modules
```

- Starte die tests mi `npm test` oder `npm run watch`

## Vorgehen

1. Erstelle zuerst eine einfache HTML-Grundstruktur mit einem einfachen Eingabeformular für die Website. 
   Die Website soll primär für Mobile-Anwendung funktionieren.
2. Zeige die Daten Temperatur (in°C), Luftdruck und Luftfeuchtigkeit an.
3. Zeichne mit SVG eine Sonne und Wolken und zeige anhand der Daten nur die Sonne, Sonne und Wolken oder nur Wolken an. 
   Nutze zum Gruppieren der SVG-Elemente das Element <g>. 
   Du kannst SVG Elemente auch mit IDs und Klassen ausstatten und wie HTML Elemente ansprechen und gestalten.
4. Erweitere das Programm, z.B.
    - Erweitere und animiere die SVG Symbole (z.B. bewegter Regen) mit **CSS** oder **JS**. 
      Nutze wenn möglich CSS Animationen.
    - Zeichne die Daten in regelmässigen Abständen auf und zeichne eine Grafik des Verlaufs.
      Nutze ein geeignetes Framework, z.B. [D3.js](https://github.com/d3/d3/wiki). 
      Speicher die Daten [Lokal im Browser](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
5. Verwende ein Framework deiner Wahl, das du noch nie verwendet hast. 
   Wenn du dir nicht sicher bist, wähle Svelte, dafür erhälst du Unterstützung im Unterricht und Lösungen.
