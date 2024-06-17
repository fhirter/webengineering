# Übung HTML und CSS

## Lernziele

Die Studierenden

- können die HTML-Grundelemente korrekt anwenden (Meta-Tags, Überschriften, Absätze, Tabellen, Listen, Links, HTML5
  Struktur-Elemente) und können damit einfache Seiten komplett erstellen.
- können einfache Stylesheets erstellen und einbinden und dabei Selektoren, Farben, Einheiten korrekt verwenden.
- kennen die Anwendungsbereiche von Flexbox und Grid und könnend damit einfache Mehrspaltenlayouts erstellen
- kennen die Layoutkonzepte "mobile first" und "device agnostic" und können deren Vorteile vor dem Hintergrund der
  grossen Gerätevielfalt im Web erklären.
- können einfache Media Queries schreiben und die Motivation (Gerätevielfalt) erklären

## Aufabenstellung

Erstelle die gesamte HTML-Struktur und CSS Layout von dieser abgespeckten Wikipedia-Seite gemäss Screenshot.

![img.png](Internetprotokollfamilie.png)

### HTML

Erstelle zuerst die HTML Struktur.  
Achte dabei auf eine semantisch korrekte Struktur, verwende die HTML5 Strukturelemente und validiere am Schluss die
Seite im HTML Validator. Farben, Rahmen und Linien sind gestalterische Elemente, diese sollten nicht in HTML erstellt
werden.

### CSS

Übe zuerst mit folgenden Games die Anwendung von `flex` und `grid`:

- https://flexboxfroggy.com/#de
- https://cssgridgarden.com/#de

Gestalte dann die Seite mittels CSS. Verwende möglichst wenige `class` und `id` Attribute im HTML Code. Nutze nur
relative Einheiten (`em`, `rem`)

1. Erstelle zuerst das Layout für Mobilgeräte.
2. Erstelle anschliessend die Version für grössere Geräte mit Grid-Layout.
3. Erstelle mit `flex` und `grid` eine alternative Version, bei der das Menü horizontal über dem Inhalt ist statt links
   daneben.
4. Experimentiere mit den verschiedenen Farbsystemen (Farbnamen, Hex, `rgba()`, `hsla()`,  `lab()`, `oklab()` )

### Barrierefreiheit

Untersuche, ob die Webseite so barrierefrei ist. Notiere deine Erkenntnisse und erweitere die Seite:

1. Semantische HTML Elemente
2. Korrekte Verwendung von Überschriften
3. Korrekte Tabellen
