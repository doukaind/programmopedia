5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2

console.log(5 + null);
console.log("5" + null);
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");

//JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:
// window.document.getElementById("demo").innerHTML = { name: "Fjohn" };

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

if (undefined) {
  console.log("test");
}
if ("1") {
  console.log("test1");
}
if (Boolean("0")) {
  console.log("test2");
}
if ({}) {
  console.log("test3");
}

console.log("5" * 2);
