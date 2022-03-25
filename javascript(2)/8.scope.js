var userID = 102;
const colorID = 5;
let userAge = 20;

console.log(userID);
console.log(colorID);
console.log(userAge);

const userName = "Adam";

function showName() {
  let userName = "Jan";
  userName = "aa";
  console.log(userName);
}

showName();

// zakres lokalny (funkcja)

var varFun = "a";
let letFun = "b";
const constFun = "c";

function variablesInFunction() {
  // zakres lokalny
  var inFunction = "jestem";
  var varFun = 4;
  varFun = 4;
  console.log(varFun);
  console.log(inFunction);

  function showVariable() {
    const constFun = "funkcja w funkcji";
    varFun = "nadipsuje wartosc zmiennej z wyzszego zakresu";
  }
}

// Przyklad 2

function calculate(a, b) {
  // tu a i b istnieje jako zmienne w tej przestrzeni
  // const a =  a;
  // const b = b;
  const number1 = a;
  const number2 = b;

  function add() {
    number2 = 10;
    const number2 = 10;
    console.log(number1 + number2);
  }
  add();
}

// Note: In Pass by Reference, we are mutating the original value.
// when we pass an object as an arguments and update that object’s reference
// in the function’s context, that won’t affect the object value.
// But if we mutate the object internally, It will affect the object .
function funcTest(obj) {
  obj.a = 6;
}
let obj = { a: 4 };
funcTest(obj);

console.log("obj: ", obj);

function PassbyReference(obj) {
  // Changing the reference of the object
  obj = {
    a: 10,
    b: 20,
    c: "GEEKSFORGEEKS",
  };
  console.log(`Inside Pass by 
        Reference Function -> obj `);

  console.log(obj);
}

let obj1 = {
  a: 10,
  b: 20,
};
console.log(`Updating the object reference -> `);
console.log(`Before calling Pass By 
        Reference Function -> obj`);
console.log(obj);

PassbyReference(obj);
console.log(`After calling Pass By 
        Reference Function -> obj`);
console.log(obj);

const foo = (xs) => {
  xs = [1];
};

let xs = [];
foo(xs);
console.log(xs); // []

const foo1 = (someArray) => {
  xs1 = [1];
};

let xs1 = [];
foo1(xs1);
console.log("herhe: ", xs1); // [1]

let a = 5;
if (true) {
  let a = 6;
}

var b = 5;
var b = 6;
console.log(a);
console.log(b);
