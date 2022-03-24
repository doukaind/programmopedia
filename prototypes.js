function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);

const Animal = function (name) {
  this.name = name;
  this.children = [];
  this.addChildren = function (childName) {
    this.chiildren.push(childName);
  };
};

const hamster = new Animal("bobik");
hamster.addChildren("romuś");

// if  there is need to create one thousand time method add children than we can use protoptype

const Animal1 = function (name) {
  this.name = name;
  this.children = [];
};

Animal.prototype.addChildren = function (childName) {
  this.children.push(childName);
};

const hamster1 = new Animal("bobik");
hamster.addChildren("romuś");
