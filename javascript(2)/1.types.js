// zna podstawowe typy danych i potrafi je wykorzysytawć

//JavaScript Number
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5; // 3 * 10^5

// JavaScript BigInt
// JavaScript, Number type can only represent numbers less than (253 - 1) and

// BigInt value
const value1 = 900719925124740998n;
// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

// JavaScript Boolean
const dataChecked = true;
const valueCounted = false;

// JavaScript undefined
let name;
console.log(name); // undefined

//JavaScript null
// In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;

// JavaScript Symbol
// This data type was introduced in a newer version of JavaScript (from ES2015).
// A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,
// two symbols with the same description

const value3 = Symbol("hello");
const value2 = Symbol("hello");

// JavaScript Object
const student = {
  firstName: "ram",
  lastName: null,
  class: 10,
};

// JavaScript Type
// JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.
// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";
