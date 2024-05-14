# Testing

Behavior-driven development ([BBD](https://en.wikipedia.org/wiki/Behavior-driven_development)) erweitert das Prinzip von  Test Driven Development ([TDD](https://en.wikipedia.org/wiki/Test-driven_development)) auf die 
Akzeptanztests.
So werden zu Beginn die User-Stories in automatischen, ausführbaren Akzeptanztests formuliert.
Diese sind nun die Grundlage der weiteren Entwicklung.

Integrationstests testen das Zusammenspielen der verschiedenen Komponenten, etwa die Kommunikation der Applikation mit 
der Datenbank.

Unit-Tests testen einzelne Teile des Codes, das kann eine einzelne Funktion sein oder eine Klasse.

Tests sollen Funktionalität beschreiben, die bekannt ist.
Es ist nicht sinnvoll in einem wasserfall-artigen Vorgehen sämtliche Tests vorgängig zu schreiben.
Dies führt nur zu unverhältnismässigem Aufwand und Änderungen der Tests.
Es wird jeweils ein Akzeptanztest geschrieben, anschliessend Integrations (wenn nötig) und Unit-Tests und dann die 
nötige Funktionalität.

Unit-Tests zuerst zu schreiben zwingt uns Entwickler, uns zuerst Gedanken zu machen, wie die Schnittstelle des
Systems sinnvoll gestaltet wird.
Das ist sinnvoll, denn damit wird vermieden, dass die Schnittstelle durch die Implementierung definiert wird.

Gleiches gilt für Akzeptanz- und Integrationstests.
Werden Akzeptanztests vor der Implementierung formuliert dienen diese als präzise, ausführbare Spezifikation, die mit
den Kunden erarbeitet und von diesen freigeben werden können.
So können Missverständnisse bei der Formulierung der Anforderungen vermieden werden.