let score = "33"
let score1 = null
let score2 = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);

// "" => false
// "moin" => true

//*******OPERATIONS******/
let value = 3;
let negValue = -value
console.log(negValue);
let anyArray = [1,2,3,45,7];
let anyArray1 = Array.from(anyArray);

const gameName = new String('Moin-uddin');
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.slice(-8, 4);
console.log(newString);
const newString2 = gameName.substring(0, 4);
console.log(newString2);
const newString3 = "    Moinuddin   ";
console.log(newString3)
console.log(newString3.trim());

const url1 = "https://moinuddin.com/moinuddin%20ilyas"
console.log(url1.replace("%20", "-"))
console.log(url1.includes('moin'))
console.log(url1.includes('mon'))

console.log("moinuddin".split(''));

//********Number********/
const score12 = 400;
const something = 34.234;
console.log(score12);
const balance = new Number(100);
console.log(balance);
console.log(something.toFixed(1));
let otherNumber = 123.786;
console.log(otherNumber.toPrecision(4));
let hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//******Maths******/
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);

//******Date******

let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate2 = new Date("04-02-2022");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myTimeStamps = Date.now();
console.log(myTimeStamps);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let anyDate = new Date();
console.log(anyDate.getMonth() + 1);
console.log(anyDate.getDay());

console.log(anyDate.toLocaleString('default', {
    weekday: "long"
}))



