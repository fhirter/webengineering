# Modernes JavaScript

## Destructuring

Arrays und Objekte können bei der Zuweisung in ihre Teile zerlegt werden.[^5]:

[^5]: https://262.ecma-international.org/15.0/index.html#sec-destructuring-assignment

### Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
```

Snippet aus "Mastering Advanced JavaScript Concepts: Unlocking the Power of Modern JavaScript"[^1].

[^1]: https://javascript.plainenglish.io/mastering-advanced-javascript-concepts-unlocking-the-power-of-modern-javascript-a6362555308b

### Object Destructuring

```javascript
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const {firstName, age} = person;

console.log(firstName); // Output: John
console.log(age);       // Output: 30
```

Snippet aus "Mastering Advanced JavaScript Concepts: Unlocking the Power of Modern JavaScript"[^1].

## Default Parameters

Für Funktionsparameter können Standartwerte angegeben werden. Diese werden verwendet, falls der Parameter "undefined"
ist.

```javascript
function greet(name, greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}

greet('John');          // Output: Hello, John!
greet('Jane', 'Hi');   // Output: Hi, Jane!
```

Snippet aus "Mastering Advanced JavaScript Concepts: Unlocking the Power of Modern JavaScript"[^1].

## Rest and Spread Operators

Funktionen können eine beliebige Anzahl Parameter akzeptieren. Der "Rest" wird dann in einem Array übergeben:

```javascript
function sum(first, ...rest) {
    // first == 1
    // rest == [2,3]

}

console.log(sum(1, 2, 3));
```

Für die umgekehrte Operation wird die gleiche Syntax verwendet. Dies kann z.B. für Objektkomposition verwendet werden:

```javascript
const foo = {
    a: 10,
    b: 20,
}

const bar = {
    c: 30,
    d: 40
}

const fooBar = {
    ...foo,
    ...bar
}
``` 

Das resultierende Objekt `fooBar` besitzt nun alle vier Properties `a`, `b`, `c`, `d` mit den entsprechenden Werten.

## Ecma Script Modules

In JavaScript existieren zwei Systeme für Module, "CommonJS" und "Ecma Script Modules". Ersteres sollte, wenn möglich,
nicht mehr verwendet werden.

```javascript
// math.js
export const add = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};
```

```javascript
// app.js
import {add, subtract} from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
```

## Anonyme Funktionen

JavaScript unterstützt anonyme Funktionen, d.h. Funktionen, die keinen Namen besitzen. Da diese den Pfeil-Operator
nutzen (`=>`) werden sie auch Arrow-Functions genannt.

Diese werden häufig bei der Übergabe von Callbackfunktionen verwendet:

```javascript
button.addEventListener("click", (event) => {
    return "foo"
})
```

Anonyme Funktionen können auch einer Variablen zugewiesen werden:

```javascript
const handler = (event) => {
    return "foo"
}

button.addEventListener("click", handler);
```

Diese Variable kann dann wie eine normale Funktion aufgerufen werden: `handle()`. Dies jedoch erst nach der
Variablenzuweisung.

Wird die anonyme Funktion auf einer Zeile und ohne `{}` geschrieben, kann `return` weggelassen werden:

```javascript
const handler = (event) => "foo";
button.addEventListener("click", handler);
```

## Template Literals

Variablen können direkt in Strings eingefügt werden. Dadurch lassen sich Strings einfach lesbar mit Variablen
kombinieren:

```javascript
const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
```

## let, const

Das Schlüsselwort `var` sollte nicht mehr zur Deklaration von Variablen verwendet werden, da diese mindestens function
scope und potenziell global scope haben[^6]. Dies ist nicht intuitiv und fehleranfällig.

Stattdessen sollte `const` und `let` für verwendet werden. Variablen, die mit `const` deklariert werden, können nur
einmal, bei der Deklaration, zugewiesen werden[^8]. Variablen, die mit `let` deklariert werden, können beliebig oft neu
zugewiesen werden[^8].

```javascript
const foo = "John";
foo = "James"   // Error!

let bar = "Jane";
bar = "Jessica" // Ok
```

[^6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

[^7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

[^8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

## Optional Chaining Operator

Wenn auf Objekt-Properties zugegriffen wird, die möglicherweise nicht vorhanden sind, führt das zu unschönen
Konstrukten:

```javascript
if (typeof foo.bar !== "undefined") {
    if (typeof foo.bar.bazl !== "undefined") {
        console.log(foo.bar.bazl)
    }
}
```

Mit dem "optional chaining" Operator kann sie schlanker geschrieben werden[^9]:

```javascript
console.log(foo?.bar?.bazl)
```

[^9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

## Temporal

Die Implementierung von JavaScript `Date` ist von Java inspiriert. 
Diese hat einige Fallstricke, was die Handhabung von Daten und Zeiten in JavaScript mühsam macht.

Mit der JavaScript Version 2024 wird nun endlich eine moderne Implementierung in die Sprache eingeführt[^3].
Diese ist aktuell jedoch noch im Entwurfsstadium und noch nicht in Browsern verfügbar[^9].

[^3]: https://tc39.es/proposal-temporal/docs/

[^9]: https://caniuse.com/?search=temporal



