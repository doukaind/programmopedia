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
