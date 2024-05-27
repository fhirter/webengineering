# Übung JavaScript

Schreibe ein Programm, welches das aktuelle Wetter für einen wählbaren Ort anzeigt. Es soll eine Adresse eingeben werden
können, an der das aktuelle Wetter angezeigt wird.  
Nutze für die Auflösung der Koordinaten [openrouteservice.org](https://openrouteservice.org/dev/#/api-docs/geocode) und
für die Wetterdaten [openweathermap.org](https://openweathermap.org/current).  
Erstelle für die JavaScript-Funktionen zuerst die Tests und implementiere erst anschliessend die Funktionalität.

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

Hinweis: Webstorm schlägt ein unpassendes Plugin vor. Gauge Specs sind Markdown Dateien. Mit Rechtsklick auf das
Datei-Tab -> "Override File Type" kann dies angepasst werden.

Erstelle die Implementierung im Ordner `tests`
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

## Dokumentation

Halte deine Erkenntnisse, welche über die im Buch behandelten Inhalte hinausgehen, in einem Markdown Dokument im
Repository fest.

Dies betrifft insbesondere die Punkte 5 und 6 der folgenden Liste.

## Vorgehen

1. Beschreibe die Aufgabenstellung mittels Akzeptanztests. Nutze dazu [Gauge+Taiko](https://gauge.org/).
2. Erstelle zuerst eine einfache HTML-Grundstruktur mit einem einfachen Eingabeformular für die Website. Die Website
   soll primär für Mobile-Anwendung funktionieren.
3. Zeige die Daten Temperatur (in°C), Luftdruck und Luftfeuchtigkeit an.
4. Zeichne mit SVG eine Sonne und Wolken und zeige anhand der Daten nur die Sonne, Sonne und Wolken oder nur Wolken an.
   Nutze zum Gruppieren der SVG-Elemente das Element <g>. Du kannst SVG Elemente auch mit IDs und Klassen ausstatten und
   wie HTML Elemente ansprechen und gestalten.
5. Verwende ein Framework deiner Wahl, das du noch nie verwendet hast. Wenn du dir nicht sicher bist, wähle Svelte,
   dafür erhälst du Unterstützung im Unterricht und Lösungen.
6. Erweitere die Applikation, z.B:
    - Animiere die SVG Symbole (z.B. bewegter Regen) mit CSS.
    - Zeichne die Daten in regelmässigen Abständen auf und zeichne eine Grafik des Verlaufs. Nutze ein geeignetes
      Framework, z.B. [D3.js](https://github.com/d3/d3/wiki). Speichere die
      Daten [Lokal im Browser](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    - Mache die Applikation offlinefähig, indem du einen Service Worker verwendest, welcher alle nötigen Dateien im
      lokalen Cache speichert.
    - Ermögliche, dass die Applikation auf lokal installiert werden kann, indem du
      eine [Manifest Datei erstellst](https://web.dev/learn/pwa/web-app-manifest?hl=de).
