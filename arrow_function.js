function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};
// it will be by default returend, assume that everything after arrow can be returend
let sum3 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

const isPostive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

const randomNumber2 = () => Math.random;

document.addEventListener("click", function () {
  console.log("click");
});
document.addEventListener("click", () => console.log("Click"));

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name), 1000;
    });
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: ", this.name);
    }, 100);
  }
}

let person = new Person();
person.printNameArrow();
person.printNameFunction();
