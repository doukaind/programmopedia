const Car = function (name) {
  console.log(this);
  this.name = name;
};

// 1. nowy pusty obiekt
// 2. wiązanie this z nowo utworzonym obiektem
// 3. powstaje włąsciwość __proto__ (wszystkie egzemplarze dziedzicza, maja wspolny obiekt proto)
// 4. wywołanie funkcji i przypisanie do zmiennej
const maluch = new Car("maluch");
const polonez = new Car("polonez");
console.log("maluch: ", maluch);

polonez.constructor;
