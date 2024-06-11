<!-- headingDivider: 4 -->

# Grundlagen "Web-Engineering"

## World Wide Web

![w:200px](images/www.png)

"Das **World Wide Web** (englisch für „weltweites Netz“, kurz Web oder WWW) ist ein über das **Internet** abrufbares System von elektronischen Hypertext-Dokumenten, sogenannten **Webseiten**, welche mit **HTML** beschrieben werden.

Sie sind durch **Hyperlinks** untereinander verknüpft und werden im Internet über die Protokolle **HTTP oder HTTPS** übertragen.

Der Benutzer kann dann den **Hyperlinks** auf der angezeigten Webseite folgen, die auf andere Webseiten verweisen. So ergibt sich ein weltweites Netz aus Webseiten. Das Verfolgen der Hyperlinks wird auch als **„Surfen im Internet“** bezeichnet.

---

Die Webseiten enthalten meist **Texte**, oft mit **Bildern** und **grafischen Elementen** illustriert. Häufig sind auch **Videos**, **Tondokumente** oder **Musikstücke** eingebettet."

---

Zum Aufrufen von Inhalten aus dem World Wide Web wird ein **Webbrowser** benötigt, der z. B. auf einem **PC** oder einem **Smartphone** läuft. Mit ihm kann der Benutzer die auf einem beliebigen, von ihm ausgewählten **Webserver** bereitgestellten Daten herunterladen und auf einem geeigneten Ausgabegerät wie einem **Bildschirm** oder einer **Braillezeile** anzeigen lassen.

(vgl. https://de.wikipedia.org/wiki/World_Wide_Web)

---

- "Hyperlinks" / URL
- Client - Server
- HTTP
- Webbrowser
- PC / Smartphone
- HTML
- Texte, Bilder, Video, Ton

## Engineering

Engineering is the practice of using **natural science**, **mathematics**, and the **engineering design** process to solve **technical problems**, increase **efficiency** and **productivity**, and **improve systems**.

The **engineering design process** is a common series of steps that engineers use in creating **functional products and processes**. The process is **highly iterative**[...]

It is a **decision making process** in which the **basic sciences** [...] are **applied** to convert resources optimally **to meet a stated objective**.

Among the fundamental elements of the design process are the **establishment of objectives and criteria**, **synthesis**, **analysis**, **construction**, **testing** and **evaluation**.

(vgl. https://en.wikipedia.org/wiki/Engineering,  https://en.wikipedia.org/wiki/Engineering_design_process)

---

- **Anwendung von Wissenschaften**
- Lösen von technischen Problemen, erhöhen der Effizienz, Optimierung von Systeme
- **Iterativer Prozess**
- Entscheidungsverfahren
- Bestimmen der Anforderungen und **Analyse**, **Herstellung**, **Überprüfung** und **Evaluation**


### "Hyperlinks" / URL

`https://www.philipackermann.de:80/books/web.html?language=de#chapter7`

### Client - Server

- Client: Browser -> Eher einfache Maschine (Software und Hardware), meistens in direktem Zugriff des Users
- Server: Webserver -> eher leistungsfähig (Software und Hardware), i.d.R. im Rechenzentrum

![w:400px](images/client_server.png)

### HTTP

![w:600px](images/HTTP.png)

### Webbrowser

![img.png](images/browser_warsI.png)

---

![StatCounter-browser-ww-monthly-200901-202303.png](images/StatCounter-browser-ww-monthly-200901-202303.png)

---

![StatCounter-comparison-ww-monthly-200901-202303.png](images/StatCounter-comparison-ww-monthly-200901-202303.png)

### PC / Smartphone

![w:600px](images/gerätevielfalt.png)

### Webseiten strukturieren mit HTML

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

### Aufbau von Webapplikationen

![img_1.png](images/separation_of_concerns.png)

### Software Stacks

#### LAMP

![img.png](images/LAMP.png)

#### MERN

MongoDB, Express.js, React, Node.js

![w:600px](images/MERN.png)

#### Programmiersprachen

![w:600px](images/ProgrammingLanguages.png)

https://survey.stackoverflow.co/2023/#section-most-popular-technologies-programming-scripting-and-markup-languages, 23.04.24

#### Datenbanken

![w:400px](images/Databases.png)

https://survey.stackoverflow.co/2023/#section-most-popular-technologies-databases, 23.04.24

#### Cloud Plattformen

![w:400px](images/CloudPlatforms.png)

https://survey.stackoverflow.co/2023/#section-most-popular-technologies-cloud-platforms, 23.04.24

#### Web Frameworks

![w:400px](images/WebFrameworks.png)

https://survey.stackoverflow.co/2023/#section-most-popular-technologies-web-frameworks-and-technologies, 23.04.24

---

![height:500px](images/web-frameworks2.png)
[State of JavaScript 2022](https://2022.stateofjs.com/), 21.06.2023

### Texte, Bilder, Video, Ton

## Werkzeuge
[Tools.md](../Tools.md)

![img.png](images/browser_dev_tools.png)

# Webseiten gestalten mit CSS

## Layoutkonzepte

* http://info.cern.ch/hypertext/WWW/TheProject.html
* Framesets
* Tabellen
* Cascading Style Sheets (CSS)
* Fixed vs. Liquid Layout
* Responsive Webdesign
* Device Agnostic
* Mobile First

## Box Model

![img.png](images/box_model.png)

- `box-sizing: content-box`: `width` bezieht sich nur auf den content (blau, `300x150`)
- `box-sizing: border-box`: `width` bezieht sich auf content + padding + border (blau, violett, grau,
  `300+2*40+2*5` für die Breite)

## Einheiten

- Absolute Grössen: `px` (`cm` ,`mm`, ...) -> sparsam verwenden
- Relative Grössen
    - `em`: Schriftgrösse des Elternelements
    - `rem`: Schriftgrösse des Wurzelelements
    - `vw`, `vh`: viewport breite, viewport höhe
      ![img.png](images/px_vw_em.png)![img.png](images/percent.png)

## Farben

![width:500px](images/CIE1931.png)
CIE 1931 Farbraum

### Vergleich Farbräume

![width:500px](images/color_spaces.png)

### Farben in CSS

#### sRGB Farbraum

- Farbnamen: `color: darkblue;`
- Hex-Werte: `color: #ffa500;`
- RGBA-Werte (mit Deckkraft): `color: rgba(169, 169, 169, 0.5)`
- HSL-Werte (Hue, Saturation, Lightness): `color: hsl(60, 100, 50)`

#### Alle sichtbaren Farben

- LCH (Lightness Chroma Hue / Opacity): `color: lch(29.2345% 44.2 27 / 0.5)`
- Oklch: `color: oklch(40.1% 0.123 21.57)`
- CIELAB (Lightness, red-green, blue-yellow): `color: lab(29.2345% 39.3825 20.0664);`
- Oklab: `color: oklab(40.1% 0.1143 0.045);`

---

![img.png](images/HSL_vs_LCH.png)
https://codepen.io/web-dot-dev/pen/poZgXxy

# Webseiten interaktiv machen mit JavaScript

vgl.: Douglas Crockford (2018): How JavaScript Works, virgule solidus

## How Class Free Works

- Klassen sind syntaktischer Zucker, d.h. sie bieten keine Funktionalität, die nicht mit anderen Mitteln erreicht werden kann.
- Sie verhalten sich anders als Klassen in C++, Java oder C#. Das kann verwirrend sein.

### "Composition over Inheritance"

- Vererbung ist weniger zentral als manche Sprachen oder Kurse vermitteln.
- Vererbung bringt auch einige Probleme mit sich, da die Klassen sehr eng gekoppelt sind und nicht explizit klar ist, welche Methoden aufgerufen werden.
- Komposition ist sehr leistungsfähig.

### Closures

Verschachtelte Funktionen können auf Variablen aus den äusseren Funktionen zugreifen.  
Auch nach deren Ausführung.

```javascript
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

---

Folgende Struktur wird empfohlen:

```JavaScript
function counter_constructor() {
    // private property
    let counter = 0;

    // composition
    const reuse = other_constructor();

    function up() {
        counter -= 1;
        return counter;
    }

    function down() {
        counter += 1;
        return counter;
    }

    // freeze to make the object immutable
    return Object.freeze({
        // make functions up and down public
        up,
        down,
        // expose goodness property from another object
        goodness: reuse.goodness
    })
}
```

## Asynchronität

- JavaScript wurde primär für User-Interaktionen entwickelt.
- Asynchronität ist deshalb ein zentrales Sprachfeature.
- Es gibt verschiedene Möglichkeiten für asynchronen Code:
    - Callbacks
    - Promise
    - `async` / `await`

`async` / `await` ist verwirrend, weil damit Code produziert wird, der synchron aussieht, aber asynchron funktioniert.

### Callback-Funktionen

- Callback-Funktionen werden als Parameter einer Funktion übergeben und von dieser aufgerufen.
- Die sogenannt "Callback-Hell", gemeint ist die Verschachtelung von Callbacks in Callbacks, sollte vermieden werden.

```javascript
function foo(callback) {
    // some functionality

    callback(value);
}

foo((value) => {
    // runs after "some functionality"
})
```

### Promise

Promises können klarer sein als Callbacks, sind aber auch weniger explizit und potenziell verwirrend.

```javascript
const p1 = new Promise((resolve, reject) => {
    // some functionality

    resolve("Success!");
});
p1.then((value) => {
        // runs after "some functionality"
    }
);

```

# Single-Page-Applikationen implementieren

## Typische Dokumentstruktur
![h:400px](images/project_structure2.png)![h:400px](images/project_structure1.png)

---

  - **Docs:** README.md, CONTRIBUTING.md, LICENCE.md, etc
  - **Configs:** `.gitignore`, `.talismanrc`, `commitlint.config.js`, `eslint.config.js`, `.dockerignore`, `jest.config.js`, `jsconfig.json`, 
  - **Build & Deployment:** `.gitlab-ci.yml`,`Dockerfile`, `docker-compose.yml`, `package.json`, `package-lock.json` 
  - **Render & build outputs:** `/dist`, `/build`, `/coverage`, `/node_modules`
  - **Source Code:** `/src`

## Progressive Web Apps

## Local First

1. No spinners: your work at your fingertips
2. Your work is not trapped on one device
3. The network is optional
4. Seamless collaboration with your colleagues
5. The Long Now
6. Security and privacy by default
7. You retain ultimate ownership and control


https://www.inkandswitch.com/local-first/
https://localfirstweb.dev/


# Die Performance von Webanwendungen optimieren

## Browser Tools: Netzwerkanalyse

![img.png](images/Netzwerkanalyse.png)

## Browser Tools: Laufzeitanalyse

![img.png](images/img.png)

## Bun

![img.png](images/Bun_webserver.png)

--- 

![img.png](images/bun_install.png)

--- 

![img.png](images/bun_test.png)
[https://bun.sh/](https://bun.sh/)

## Energy, Time, Memory Comparision

![img.png](images/energy_time_memory.png)
[https://haslab.github.io/SAFER/scp21.pdf](https://haslab.github.io/SAFER/scp21.pdf)
