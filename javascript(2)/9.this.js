const person = {
  name: "Tom",
  showThis1: function () {
    console.log(this); // person

    const showThis2 = () => {
      console.log(this); // person
    };

    showThis2();
    const showThis3 = function () {
      console.log(this); // global -> na nodzie, window -> na przeglarce
    };
    showThis3();
  },

  showThis4: () => {
    console.log(this); // {} -> na nodzie, window -> na przegladarce
  },
  showThis5() {
    console.log(this); // person
  },
};

person.showThis1();
person.showThis4();
person.showThis5();

function one() {
  "use strict";
  this.name = "pierwsza";
  return this.name;
}

const object1 = {
  two: one,
};

object1.two();

// one();

const thisExample = function () {
  // tryb scisly (strict mode) - wartosc domyslna this bedzie undefined
  // 'use strict'

  console.log(this.example, this);
  const inside = function () {
    console.log(this.example, this);
  };
  inside();
};

// problem utraty wiazania

const szarik = {
  children: ["fafik", "zaba"],
  showCildren: function () {
    this.children.forEach(function (child, index) {
      console.log(this, szarik); // wkazuje na global/window
    });
  },
};

szarik.showCildren();

// ROZWIAZANIE
//that

// const szarik = {
//   children: ["fafik", "zaba"],
//   showCildren: function () {
//     const that = this;
//     this.children.forEach(function (child, index) {
//       console.log(that, szarik); // wkazuje na global/window
//     });
//   },
// };

// szarik.showCildren();

// 3 arrow function

// const szarik = {
//   children: ["fafik", "zaba"],
//   showCildren: function () {
//     this.children.forEach((child, index) => {
//       console.log(this); // wkazuje na global/window
//     });
//   },
// };

// szarik.showCildren();

// 4 bind
// const szarik = {
//   children: ["fafik", "zaba"],
//   showCildren: function () {
//     this.children.forEach(function(child, index) {
//       console.log(this); // wkazuje na global/window
//     }.bind(this));
//   },
// };

// szarik.showCildren();
