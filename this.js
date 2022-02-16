const person = {
  name: "Tom",
  showThis1: function () {
    console.log(this);
    const showThis2 = () => {
      console.log(this);
    };
    showThis2();
    const showThis3 = function () {
      console.log(this);
    };
    showThis3();
  },
  showThis4: () => {
    console.log(this);
  },
  showThis5() {
    console.log(this);
  },
};

person.showThis1();
person.showThis4();
person.showThis5();
