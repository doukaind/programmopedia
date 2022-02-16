// ############################# CALL
const human = {
  name: "Tom",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
  sayFullName: function (surname, age) {
    console.log(
      `My name is ${this.name} ${this.surname ? this.surname : surname} ${age}`
    );
  },
  sayFullName2: () => {
    console.log(
      `My name is ${this.name} ${this.surname ? this.surname : this.surname}`
    );
  },
};

const personA = {
  name: "Artur",
};

const personB = {
  name: "Tom",
};

// to przed kropka jest kontekstem
human.sayName();

// call pozwala zmienic konteskt
human.sayName.call(personA); // uzyj funkcji z human sayName, ale jako kontekst uzyj personA

human.sayName.call(personB);

const people = [
  {
    name: "Artur",
    surname: "KING",
    age: 15,
  },
  {
    name: "Jessica",
    age: 15,
  },
];

people.forEach((p) => human.sayName.call(p));

//######################### APPLY
// pierwszy parameter pozostaje niezmienny, pierwszy parametr konteskt, 2 parametr argumenty funkcji

people.forEach((p) => human.sayFullName.apply(p, ["Default"]));

// ####################### bind

people.forEach((p) => {
  const newHuman = human.sayFullName.bind(p, 32, "AAA");
  newHuman("AAA", 34, 34, "Dfgdfg");
});

// undefined
// people.forEach((p) => {
//   const newHuman = human.sayFullName2.bind(p, "Default");
//   newHuman();
// });
