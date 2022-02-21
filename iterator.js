const numbers = [1, 2, 3];
const numbersIterator = numbers[Symbol.iterator](); // return new iterator

// example of iterator being used
for (const n of numbers) {
  console.log(n);
}

// for loop takes iterable object numbers - is iterable object,
//  that is way it works for of loop

Object.getOwnPropertyNames(numbersIterator.__proto__).forEach((key) => {
  console.log(key);
});

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

// 1, 4, 9, 16, 25

function squared() {
  let n = 0;
  return {
    next() {
      n++;

      if (n <= 5) {
        return {
          value: n * n,
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const squaredIterator = squared();
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());

function squaredN(max) {
  return {
    [Symbol.iterator]() {
      let n = 0;
      return {
        next() {
          n++;

          if (n <= max) {
            return {
              value: n * n,
              done: false,
            };
          }

          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}

//######################
for (const n of squaredN(10)) {
  console.log(n);
}

const [a, b, c] = squaredN(10);

console.log(a);
console.log(b);
console.log(c);

class NumberList {
  constructor() {
    this.numbers = [1, 2, 3, 4];
  }

  [Symbol.iterator]() {
    const numbers = this.numbers;
    let currentIndex = -1;

    return {
      next() {
        return {
          value: numbers[++currentIndex],
          done: currentIndex >= numbers.length,
        };
      },
    };
  }
}

const numListIterator = new NumberList()[Symbol.iterator]();

console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());
console.log(numListIterator.next());

const numList = new NumberList();

for (const number of numList) {
  console.log(number);
}
