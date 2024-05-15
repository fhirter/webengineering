# Übung JavaScript

Schreibe ein Programm, welches das aktuelle Wetter für einen wählbaren Ort anzeigt. Es soll eine Adresse eingeben werden
können, an der das aktuelle Wetter angezeigt wird. Nutze für die Auflösung der
Koordinaten [openrouteservice.org](https://openrouteservice.org/dev/#/api-docs/geocode) und für die
Wetterdaten [openweathermap.org](https://openweathermap.org/current). Erstelle für die JavaScript-Funktionen zuerst die
Tests und implementiere erst anschliessend die Funktionalität.

## Vorbereitungen

### API Keys

Erstelle zuerst auf beiden Plattformen einen API Key, die Aktivierung kann mehrere Stunden dauern.

### Akzeptanztests

Installiere Gauge und Taiko gemäss den Anleitungen:

- [Gauge](https://docs.gauge.org/getting_started/installing-gauge?os=macos&language=javascript&ide=vscode)
- [Taiko](https://docs.taiko.dev/installing/)).

```shell
npm install -g @getgauge/cli
npm install -D taiko
```

Die Anleitung von Gauge basiert stark auf dem VS Code Plugin. Die nötigen Schritte können aber auch einfach von Hand
erledigt werden:

Erstelle ein Dokument `manifest.json`:

```json
{
  "Language": "js"
}
```

Erstelle eine Spezifikation im Ordner `specs`
gemäss [Anleitung](https://docs.gauge.org/writing-specifications?os=macos&language=javascript&ide=vscode):

`specs/example.spec`:

```markdown
# Example Specification

## Example Scenario

* hello world
```

Hinweis: Webstorm schlägt ein unpassendes Plugin vor. Gauge Spec files sind Markdown File. Mit rechtsklick auf das File
Tab -> "Override File Type" kann dies angepasst werden.

Erstelle die implementierung im Ordner `tests`
gemäss [Anleitung](https://docs.gauge.org/writing-specifications?os=macos&language=javascript&ide=vscode#step-implementations).

`test/spec_implementations.js`:

```javascript
step("hello world", async function () {
    console.log("test")
});

```

Mit `gauge run` kann nun die Spezifikation ausgeführt werden.

### Unit Tests

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

- Starte die tests mit `npm test` oder `npm run watch`

## Vorgehen

1. Beschreibe die Aufgabenstellung mittels Akzeptanztests. Nutze dazu [Gauge+Taiko](https://gauge.org/).
2. Erstelle zuerst eine einfache HTML-Grundstruktur mit einem einfachen Eingabeformular für die Website. Die Website
   soll primär für Mobile-Anwendung funktionieren.
3. Zeige die Daten Temperatur (in°C), Luftdruck und Luftfeuchtigkeit an.
4. Zeichne mit SVG eine Sonne und Wolken und zeige anhand der Daten nur die Sonne, Sonne und Wolken oder nur Wolken an.
   Nutze zum Gruppieren der SVG-Elemente das Element <g>. Du kannst SVG Elemente auch mit IDs und Klassen ausstatten und
   wie HTML Elemente ansprechen und gestalten.
5. Erweitere das Programm, z.B.
    - Erweitere und animiere die SVG Symbole (z.B. bewegter Regen) mit **CSS** oder **JS
      **. Nutze wenn möglich CSS Animationen.
    - Zeichne die Daten in regelmässigen Abständen auf und zeichne eine Grafik des Verlaufs. Nutze ein geeignetes
      Framework, z.B. [D3.js](https://github.com/d3/d3/wiki). Speicher die
      Daten [Lokal im Browser](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
6. Verwende ein Framework deiner Wahl, das du noch nie verwendet hast. Wenn du dir nicht sicher bist, wähle Svelte,
   dafür erhälst du Unterstützung im Unterricht und Lösungen.
