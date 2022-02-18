// 1. Same input same output

const add1 = (x, y) => x + y;

add1(2, 6);

// The first example returns a value based on the given
// parameters, regardless of where/when you call it.

// IMPURE FUNCTION
let x = 2;

const add = (y) => {
  x += y;
};

// The second example returns nothing. It relies on shared state to do
// its job by incrementing a variable outside of its own scope.

// 2. No Side-Effects

// A few examples of side-effects are:
// 1. Mutating your input
// 2. console.log
// 3. HTTP calls (AJAX/fetch)
// 4. Changing the filesystem (fs)
// 5. Querying the DOM

// Basically any work a function performs that
// isn’t related to calculating the final output.

// “Impurely” Changing an Object
const impureAssoc1 = (key, value, object) => {
  object[key] = value;
};

const person1 = {
  name: "Bobo",
};

const result1 = impureAssoc1("shoeSize", 400, person1);

console.log({
  person1,
  result1,
});

// Purifying It Up
const pureAssoc2 = (key, value, object) => ({
  ...object,
  [key]: value,
});

const person2 = {
  name: "Bobo",
};

const result2 = pureAssoc2("shoeSize", 400, person2);

console.log({
  person2,
  result2,
});

// Another Pure Way

const pureAssoc3 = (key, value, object) => {
  const newObject = { ...object };

  newObject[key] = value;

  return newObject;
};

const person3 = {
  name: "Bobo",
};

const result3 = pureAssoc3("shoeSize", 400, person3);

console.log({
  person3,
  result3,
});

// Mutating your input can be dangerous,
// but mutating a copy of it is no problem.

// Deep-Cloning Objects
// Heads up! Using the spread operator ... creates a shallow copy of an object.
// Shallow copies aren’t safe from nested mutations.

// Unsafe Nested Mutation
const person4 = {
  name: "Bobo",
  address: { street: "Main Street", number: 123 },
};

const shallowPersonClone = { ...person4 };
shallowPersonClone.address.number = 456;

console.log({ person4, shallowPersonClone });

// Both person and shallowPersonClone were mutated
//  because their children share the same reference!

// Safe Nested Mutation
const person5 = {
  name: "Bobo",
  address: { street: "Main Street", number: 123 },
};

const deepPersonClone = JSON.parse(JSON.stringify(person5));
deepPersonClone.address.number = 456;

console.log({ person5, deepPersonClone });

// ############# RULES #################
// 1. A function’s pure if it’s free from side-effects
//  and returns the same output, given the same input.

// 2. Side-effects include: mutating input, HTTP calls, writing to disk, printing to the screen.

// 3. You can safely clone, then mutate, your input. Just leave the original one untouched.

// 4. Spread syntax (… syntax) is the easiest way to shallowly clone objects.

// 5. JSON.parse(JSON.stringify(object)) is the easiest way to deeply clone objects.

// ########## CODE USAGE #############
