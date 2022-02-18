const colors = ["red", "green"];

console.log([...colors, "blue"]);

// creates brand new array
[...colors, "blue"];

console.log([...colors, "blue"] === colors);

[...colors, "blue", "purple"];
const colorsC = ["purple", ...colors, "blue", "purple"];
console.log("COLORS: ", colorsC);
// ###################
// 1. Removing an element from an array

// Bad
// colors.pop();

// Good
const filteredColors = colorsC.filter((color) => color !== "purple"); // false is not included inside an array
console.log(filteredColors);

const profile = { name: "Sam" };

console.log({ ...profile, name: "Alex" });
console.log({ ...profile, age: 30 });
console.log({ name: "Alex", ...profile });

const profile2 = { name: "Alex", ...profile };

// Removing a property from an object:
delete profile.name; // this mutation of an object, we don't want to do this
console.log(profile);

profile.name = "Alex";

console.log(profile);

// we can overwrite the property with undefined
const profile3 = { ...profile, name: undefined };
