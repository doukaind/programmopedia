var a = "nic";

if (true) {
  var a = "cos";
}

console.log(a);

let b = "nic";

if (true) {
  let b = "cos";
}

console.log(b);

// #########################

var a = "0";

function one() {
  var a = "1";
  console.log("zmienna w funkcji 1: " + a);

  function two() {
    var a = "2";
    console.log("zmienna w funkcji 2: " + a);
    function three() {
      console.log("zmienna w funckji 3: " + a);
    }
    three();
  }

  two();
}

one();
console.log("zmienna w zasiegu globalnym: " + a);
