const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.children = [];
  // zbedne, mozemy dac do prototpyu, bo inaczej to bedzie tworzone dla kazdej instancji
  //   this.addChildren = function (name) {
  //     this.children.push(name);
  //   };
};

Person.prototype.addChildren = function (name) {
  this.children.push(name);
};

const arek = new Person("arek", 20);
const monika = new Person("monika", 30);

monika.addChildren("asia");

Person.prototype.gender = "female";

/* Część 2 */
// Czym jest prototyp?

/*
Prototyp to obiekt w funkcji konstruktora współdzielony
przez wszystkie egzemplarze. Każdy egzemplarz ma dostęp do obiektu prototypu.
*/

// Co zawiera prototyp?
// domyślnie właściwosici constructor (funckja konstruktora lub klasa) + to co zostanie przypisane do prototypu

function Player() {}
Player.prototype.age = 25;
const janek = new Player();
const marta = new Player();

class User {}

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
  //   this.changeCitizenship = function (citizenship) {
  //     this.citizenship = citizenship;
  //     console.log(
  //       `Zmiana za pomoca metody w instacji na obywatelstwo ${this.citizenship}`
  //     );
  //   };
}

Citizen.prototype.changeCitizenship = function (citizenship) {
  this.citizenship = citizenship;
  console.log(
    `Zmiana za pomoca metody w instacji na obywatelstwo ${this.citizenship}`
  );
};

const zenek = new Citizen("Polska", "polskie");

console.log(zenek);

// Rozszerzanie prototypu takze wbudowanych konstruktorow
const arr = [5, 6, 7, 8];
Array.prototype.delete = function (index) {
  return this.splice(index, 1);
};

arr.__proto__; // prototyp konstruktora
arr.__proto__.__proto__; // prototyp Object
arr.__proto__.__proto__.__proto__; // null

// kilka istostnych elementów
arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen; // false

zenek instanceof Array; // false

// Object.getPrototypeOf

Object.getPrototypeOf(arr);

class N extends Citizen {}

const n = new N();
