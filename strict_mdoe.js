// "use strict";
// let x = 3.14;
// delete x;
// "use strict";
x = { p1: 10, p2: 20 }; // This will cause an error
console.log(this);

//Writing to a read-only property is not allowed:
("use strict");
const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });

obj.x = 3.14; // This will cause an error

// Writing to a get-only property is not allowed:
("use strict");
const obj = {
  get x() {
    return 0;
  },
};

obj.x = 3.14; // This will cause an error

//Deleting an undeletable property is not allowed:
("use strict");
delete Object.prototype; // This will cause an error
