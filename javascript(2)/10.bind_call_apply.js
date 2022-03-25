const human = {
  name: "Tom",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
};

human.sayName();

const personA = {
  name: "Artur",
};

human.sayName.call(personA); // kontekst personA

const human1 = {
  pesel: 345345345345,
};

const showPesel = function () {
  console.log(`Twoj pesel to: ${this.pesel}`);
};

showPesel();
showPesel.call(human1); // pierwszy argument this

const showUser = function (name) {
  console.log(`uzytkownik ${name} ma ${this.pesel}`);
};

showUser.call(human1, "Tomasz"); // konteskt human1
