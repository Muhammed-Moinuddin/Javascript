const newArray = new Array(1,2,3,4,5,6);
console.log(newArray);
console.log(!newArray.includes(9));
console.log(newArray.indexOf(4));

let cricketers = ["Umar Gul", "Irfan Pathan", "Dale Steyn"];
let fav_cricketers = ["Sarfaraz Ahmed", "Sachin Tendulkar", "Imran Khan"];

let heros1 = cricketers.concat(fav_cricketers);
console.log(heros1);

let heros2 = [...fav_cricketers, ...cricketers];
console.log(heros2);

const anotherArray = [1,2,3,[4,5],[8, [9, 10]]];
console.log(anotherArray.flat(2));
console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("Moinuddin"));
console.log(Array.from("Moinuddin"));

let score1 = 10;
let score2 = 20;
let score3 = 30;
console.log(Array.of(score1,score2,score3))
