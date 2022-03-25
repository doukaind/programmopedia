//Higher-order functions:
const songs = [
  { name: "Carry on Wayward Son", duration: 322, released: 1976 },
  { name: "Back in Black", duration: 231, released: 1980 },
  { name: "Cold as Ice", duration: 201, released: 1970 },
  { name: "Carry on Wayward Poo", duration: 233, released: 345 },
];

function getLongest(songs) {
  let result = songs[0];
  for (let i = 0, { length } = songs; i < length; i++) {
    if (result.duration < songs[i].duration) result = songs[i];
  }

  return result;
}

const longestSong = getLongest(songs);
console.log(longestSong); /*?*/

function getShortest(songs) {
  let result = songs[0];
  for (let i = 0, { length } = songs; i < length; i++) {
    if (result.duration > songs[i].duration) result = songs[i];
  }

  return result;
}

const shortestSong = getShortest(songs);
console.log(shortestSong);

const reduce = (reducer, initial, arr) => {
  let result = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    result = reducer(result, arr[i]) ? result : arr[i];
  }
  return result;
};

const filter = (reducer, arr) => reduce(reducer, [], arr);

const shortest = filter((prev, next) => prev.duration < next.duration, songs);
const longest = filter((prev, next) => prev.duration > next.duration, songs);
const oldest = filter((prev, next) => prev.released < next.released, songs);
const latest = filter((prev, next) => prev.released > next.released, songs);

console.log(shortest);

const shortestReducer = (prev, next) =>
  prev.duration < next.duration ? prev : next;

const shortest1 = songs.reduce(shortestReducer, songs);
console.log("shortest: ", shortest1);

// Mapping
//Pure Functions
const sum = (a, b) => a + b;

// Procedure
const update = (data) => {
  const user = userDB.findById(user.id);
  user = { ...user, ...data };
  return userDB.save(user);
};

// I/O

const showMessage = (message) => {
  document.querySelector(".form-message").innerHTML = message;
};

// By value: Primitive types (Strings, Number, ...), przekazywanie przez wartosc odbywa sie w przypadku typów prostych

// Przkeazywanie przez refrencje odbywa sie w przypadku obiektów i tablic

// let totalPlayed = 20280;
// const totalPlayingTime = (total, sessionTime) => (total += sessionTime);
// totalPlayingTime(totalPlayed, 210); // pure function
// totalPlayed = totalPlayingTime(totalPlayed, 210); // nie pure function

// const player = {
//   name: "overment",
//   games: [{ name: "Grand Theft Auto V", playtime: 20280 }],
// };

// const convertPlayTime = (games) => {
//   // nieczysta funkcja
//   games.forEach((game) => (game.playtime = toHour(game.playtime)));
// };

// const hoursPlayed = (games) => {
//   convertPlayTime(games); /*?*/
//   // show top games in HTML
// };

// hoursPlayed(player.games);

// const totalPlaytime = (
//   games // czysta funkcja
// ) => games.reduce((total, game) => (total += game.playtime), 0);

// totalPlaytime(player.games);
// hoursPlayed(player.games);

// zmiana na czysta
// const convertPlayTime1 = (games) => {
//   const list = [...games];
//   // nieczysta funkcja
//   return list.map((game) => ({ ...game, playtime: toHour(game.playtime) }));
// };

// // zmiana na czysta
// const convertPlayTime2 = (games) => {
//   const list = [...games];
//   // nieczysta funkcja
//   list.forEach((game) => (game.playtime = toHour(game.playtime)));
// };

// Factory functions
class List {
  items = [];
  addItem(item) {
    this.items.push(item);
  }
  getItems() {
    return this.items;
  }
}

//Function composition

const value = 5;

const doublAndIncrement = (x) => x * 2 + 1;

doublAndIncrement(value);

const double = (y) => y * 2;
const add = (x) => x + 1;

double(value);

add(double(value));

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const result = compose(add, double);
result(value);
console.log(result(value));
