function init() {
  var name = "Mozilla"; // name jest zmienną lokalną utworzoną przez funkcję init
  function displayName() {
    // displayName() jest wewnętrzną funkcją, domknięciem
    console.log(name); // używa zmiennej zdeklarowanej w funkcji nadrzędnej
  }
  displayName();
}
init();

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// 2 = wykorzystanie domknięc (closure)

class Dog {
  constructor(name, dogColor) {
    this.name = name;
    let color = dogColor;
    this.getColor = () => color;
    this.setColor = (value) => (color = value);
  }
}

function x() {
  let number = 0;
  function y() {
    console.log("aaaa", number);
  }
  return y;
}

const example = x()();
