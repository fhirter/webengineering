# Übung 4: Single Page Application

## Lernziele

Die Studierenden

- können eine einfache Single Page Applikation mit einem gängigen Framework erstellen.
- können die Anwendung mit Komponenten strukturieren und Templating anwenden.
- verstehen, wie Frameworks helfen, reaktive Anwendungen zu entwickeln.
- können Multipage Applikationen mit Routing entwickeln.
- wissen, wie Daten Lokal im Browser gespeichert werden können.
- kennen die Local First Prinzipien.

## Aufgabenstellung

Entwickle ein einfaches [Kanban-Board](https://de.wikipedia.org/wiki/Kanban-Board) nach
den [Local First Prinzipien](https://www.inkandswitch.com/local-first/):

> 1. No spinners: your work at your fingertips
> 2. Your work is not trapped on one device
> 3. The network is optional
> 4. Seamless collaboration with your colleagues
> 5. The Long Now
> 6. Security and privacy by default
> 7. You retain ultimate ownership and control

- Beschreibe die Funktionalität mit automatisierten Akzeptanztests. Erstelle diese zuerst.
- Nutze für das User-Interface ein geeignetes Frontend-Framework (wie etwa Svelte mit SvelteKit) und strukturiere die 
  Applikation in sinnvolle Komponenten. 
- Implementiere eine Detailansicht für eine Karte. Nutze dafür URL-basiertes Routing. 
- Speichere die Daten in einem CRDT z.B. [Automerge](https://automerge.org/). Speichere den CRDT lokal im Browser. 
- Synchronisiere die Daten mit einem einfachen Websocket-Server. 
- Ermögliche, dass die Applikation lokal installiert werden kann. 
- Mache die Applikation offlinefähig, indem du einen Service Worker verwendest, welcher alle nötigen Dateien im lokalen
  Cache speichert.

Dokumentiere, wie die einzelnen Punkte der Local First Prinzipien in deiner Lösung erreicht werden.
Halte zu allen Punkten die wichtigsten Erkenntnisse fest.

Nutze Git und Github zur Versionsverwaltung. Erstelle häufige, kohärente Commits mit aussagekräftigen Commit-Messages.