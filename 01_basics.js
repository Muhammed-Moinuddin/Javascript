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

//singleton
//Object.create
const mySym = Symbol("key1");

const JsUser = {
    name: "Moinuddin", //both are strings
    "full name": "Muhammad Moinuddin",
    [mySym]: "Key 1 is here",
    email: "m.moin@email.com",
    age: 18,
    location: "Karachi",
    isLoggedIn: false,
    myArray: ["monday", 1, true]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
// console.log(JsUser.full name); Won't work
JsUser.email = "ayan@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "shahzaib@gmail.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello World");
}
JsUser.greetingsTwo = function(){
    console.log(`Moin here bhai, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
Object.freeze(JsUser);

// Object part 2
const obj12 = new Object();
console.log(obj12);

 const obj1 = {1: "a", 2: "b"};
 const obj2 = {3: "a", 4: "b"};
 const obj3 = {5: "a", 6: "b"};

 let ansObj = Object.assign({}, obj1, obj2, obj3);
 const ansObj2 = {...obj1, ...obj2};
 console.log(ansObj);
 console.log(ansObj2);

 let {name: myName} = JsUser;
 console.log(myName);
 console.log(JsUser);
 console.log(Object.keys(JsUser));
 console.log(Object.values(JsUser));
 console.log(Object.keys(JsUser));
 console.log(JsUser.hasOwnProperty("namel"));