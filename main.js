//This is use for single line comment
/*This is use for multi line comment
*/
var a ;
a = 5;
var b;
a = b;
var c = 9;
var myFirstName = "Muhammad";
var myLastName = "Moinuddin";
var properCamelCase = "Superb";
let myName = "Abbas";
//let makes a variable unique &  can't be over written in future
const sum1 = 10 + 2;
//const is similar to let but with a bonus i.e read only
const subtract1 = 20-9;
const multiply1 = 3*9;
const divide1 = 16/2;
let moin1 = 9;
moin1++;
let moin2 = 10;
moin1--;
const moin3 = 3.9 * 2.5;
const remainder1 = 11 % 3;
let moin4 = 12;
moin4 += 5;
let moin5 = 11;
moin5 /= 2;
let string1 = "My name is \"Moin\" \n I am not a \"Terrorist\""
moin6 = "Moin"
let sentence1 = "My name is " + moin6 + "and I am well!"
console.log(sentence1);
sentence2 = sentence1.length; //tells the number of characters
moin7 = moin6[0]; //tells first character of name
lastCharacter = moin6[moin6.length - 1]
thirdLastCharacter = moin6[moin6.length - 3]
itsArray = ["moin" , 1]; //array
itsArray2 = [["myself" , 1],["Moin" , 2]] //array within array , nested array ,multi-dimensional array
// Can also access data within arrays using indexing
const ourArray = [50, 40, 30];
ourArray[0] = 15;
//ourArray now has the value [15, 40, 30].
//Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14]
]
console.log(arr[3]) // arr[3] is [[10, 11, 12], 13, 14]
console.log(arr[3][0]) // arr[3][0] is [10, 11, 12]
console.log(arr[3][0][1]) // arr[3][0][1] is 11
//Manipulate Arrays With push() , An easy way to append data to the end of an array is via the push() function.
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog" , 3]);
//Manipulate Arrays With pop() , .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable.
const threeArr = [2,4,6];
const oneDown = threeArr.pop();
console.log(threeArr);
console.log(oneDown);
//The first console.log will display the value 6, and the second will display the value [1, 4].
// .shift() same as .pop() but removes the first element.
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
//After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].
//Reusable Parts = functions
function functionName() {
    console.log("Hello World");
  }
//You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message Hello World on the dev console. All of the code between the curly braces will be executed every time the function is called.
function functionWithArgs(param1,param2){
    console.log(param1 + param2);
}
functionWithArgs(2,4);
//Passing Values to Functions with Arguments
//Return a Value from a Function with Return
function timesFive(param){
    return param*5;
  }
  const answer = timesFive(5);
  //Variables which are defined outside of a function block have Global scope.Variables which are declared without the let or const keywords are automatically created in the global scope.Always use let or const keyword.
  //local variables have only scope inside the function & cannot be called outside it
  //Global vs. Local Scope in Functions
  const someVar = "Head";
  function myFun(){
      const someVar = "Toe";
      return someVar;
  }
  myFun();
  //It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
  //The function myFun will return the string Toe because the local version of the variable is present.
  let sum101 = 0;

  function addSum(num) {
    sum101 = sum101 + num;
  }

  addSum(3);
  //addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.
  //In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);
//it will print 2
//Stand-In-Line (Understanding Queue Data Structure)
function nextInLine(arr,item){
    arr.push(item);
    let num = arr.shift();
    return num
}
const testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));
//if statements are used to make decisions in code.
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
//In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
//typeof 3 returns the string number, and typeof '3' returns the string string.
function testNotEqual(val){
  if (val != 99){
    return "Not Equal"
  }
  return "Equal"
}
testNotEqual(98);
/*
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
In order, these expressions would evaluate to true, false, false, false, and false.
*/
 function testOperator1(num){
    if (num > 5){
      if (num < 10) {
        return "Yes";
      }
    }
    return "False";
 }
 testOperator1(7);
 //Above function can also be written as :
 function testOperator2(num){
   if (num > 5 && num < 10) {
     return "Yes";
   }
   return "False" ;
 }
 testOperator2(7);
 //else if function
 function testelseif (num) {
   if (num > 10){
     return "bigger than 10"
   }
   else if (num < 10){
     return "less then 10"
   }
   else {
     return "Equal to 10"
   }
 }
 console.log(testelseif(9)); //Order is important in if, else if statements.
 //The switch statement is used to perform different actions based on different conditions.
function   caseInSwitch(val) {
 let answer ="";
   switch(val){
     case 1:
      answer = "alpha";
      break;
     case 2:
       answer = "beta";
       break;
     case 3:
       answer = "gamma";
       break;
     default:
       answer = "delta";
   }
   return answer
 }
 caseInSwitch(1);
 function removebreak(val){
   let answer = "";
   switch(val){
     case 1:
     case 2:
     case 3:
       answer = "Low";
       break;
     case 4:
     case 5:
     case 6:
       answer = "High";
       break;
   }
   return answer
 }
 removebreak(4);
 //Short code for true & false
 function isLess(a,b){
   return a < b;
 }
 isLess(10,16);
 //When a return statement is reached, the execution of the current function stops and control returns to the calling location.
 const myDog = {
    "name": "Max",
    "legs": 4,
    "tail": 1,
    "my friends": ["Suzzy","Percy","Robert"]
 };
 const myDog2 = {
   name: "Ravi",
   legs: 6,
   tail: 2,
   "his friends": ["Champ" , "hero"]
 }
 testDog1 = myDog.name;
 testDog2 = myDog["my friends"];
 testDog3 = myDog[1];

 const dogs = {
   Fido: "Mutt",
   Hunter: "Doberman",
   Snoopie: "Beagle",
 }
 const goodDog = "Hunter";
 const doggy = dogs[goodDog];
 console.log(doggy);

 dogs.Fido = "Happy Mutt";
 dogs[Snoopie] = "Happy Beagle";
 delete dogs.Fido;
//Using Variable & accessing Objects
 const someObj = {
    propName: "John"
 };

 function propPrefix(var1){
    const s = "Name";
    return s + var1
 };

 const someProp = propPrefix("prop");
 console.log(someObj[someProp]);

 //You can add new properties to existing JavaScript objects the same way you would modify them.
someObj.propAge = 26;

//Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
function phoneticLookup(val){
  const lookup = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E"
  }
  let result = lookup[val];
  return result
}
phoneticLookup(3);
//We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  else {
    return "Not Found"
  }
  // Only change code above this line
}
const obj = {
  girl: "generally long hair",
  boy: "generally short hair",
  checkProp: "Moin the best dev"
};
console.log(checkObj(obj, "boy"));

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
]
//Nested Object & how to access the value in it.
const myStorage = {
  "car":{
    "inside":{
      "glove box" : "maps",
      "passenger seat" : "crumbs"
    },
    "outside": {
      "trunk": "Jack"
    }
  }
};

const gloveBoxContent = myStorage.car.inside["glove box"];
//Nested Array & how to access value in it.
const myPlants = [
  {
    type : "flowers",
    list: [
      "Rose",
      "Lotus",
      "Jasmine"
    ]
  },
  {
    type: "trees",
    list: [
      "Teak",
      "Silver Oak",
      "Drumstick tree"
    ]
  }
];
const myFavouritePlant = myPlants[1].list[2];

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != ""){
    records[id][prop] = value;
  }
  else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false){
    records[id][prop] = [value];
  }
  else if (prop == "tracks" && value != ""){
    records[id][prop].push(value);
  }
  else if (value == ""){
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//Loops
const myArray = [];
let i = 0;
while (i<5){
  myArray.push(i);
  i++
};
console.log(myArray);
//Iteration with while (it runs while a specified condition is true and stops once that condition is no longer true.)
const myArray2 = [];
let i2 = 5;
while (i2>=0){
  myArray2.push(i2);
  i2--;
}
//Iteration with For Loop ( it runs for a specific number of times. )
const myArray3 = [];
for(let i3 = 1; i3 <= 5; i3++){
  myArray.push(i3);
}

const myArray4 = [];
for (let i = 1; i < 10; i += 2) {
  myArray4.push(i4);
};

const myArray5 = [];
for (let i5 = 9 ; i5 > 0 ; i5 -= 2) {
  myArray5.push(i5)
};

const myArray6 = [2,3,4,5,6];
let total = 0;
for (let i = 0 ; i < 5 ; i++) {
  total = total + myArray6[i];
};
console.log(total);
//  do...while Loop
// In do...while loop, the code will run once without giving importance to the condition & after one cycle/loop , the code will run by giving importance to the condition. It's further explain below
//First We'll check a normal while loop.
const checkArray = [];
let z = 5;
while (z < 5) {
  checkArray.push(z)
  z++
};
//Above code will not run as the condition is not true. Ans : checkArray = []
const checkArray2 = [];
let z2 = 5;
do {
checkArray.push(z2);
z2++ ;
}
while (z2 < 5);
//Above code will run jsut once even if the condition is not true because it's a do...while. Ans : checkArray = [5]
//////
//Recursion is the concept that a function can be expressed in terms of itself.
//Normal Loop
arr1 = [1,2,3,4,5,6,7,8,9];
function multiply(arr1,n){
  let product = 1;
  for (let i = 0 ; i < n ; i++) {
    product = product * arr1[i];
  }
  return product;
}
//Recursion (Function itself becomes a loop)
function multiply1(arr1,n){
  if (n <= 0) {
    return 1;
  }
  else {
    return multiply1(arr1 , n-1) * arr[n-1];
  }
}
//Math.random() always returns a number lower than 1.
//Math.floor() is use to round the number down to the nearest whole number.
Math.floor(Math.random() * 10);
let y = "56";
let x = parseInt(y);
//The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
let x = parseInt(y,2);
//The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
//The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
function checkEqual(a,b) {
  return a == b ? "Equal"  : "Not Equal";
}
console.log(checkEqual(1,3));
function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero" ;
  }

console.log(checkSign(10));

function countdown(n){
  if (n < 1) {
    return []
  }
  else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));

function randomRange(myMin , myMax) {
  return Math.floor(Math.random() * ((myMax - myMin) + 1) + myMin);
}
randomRange(10,20);

function rangeOfNumbers(startNum , endNum) {
  if (endNum < startNum) {
    return [];
  }
  else {
    const countRange = rangeOfNumbers(startNum,endNum - 1);
    countRange.push(endNum);
    return countRange;
  }
};

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0 ; i < contacts.length ; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property"
      }
    }
  }
  return "No such contact"
}

lookUpProfile("Akira", "likes");

myString1 = "Moin is the best";
myRegex1 = /Moin/
myRegex2 = /is|the/
console.log(myRegex1.test(myString1));
// i - flag that ignores the case
myString2 = "FreeCodeCamp" ;
myRegex3 = /FREECodeCAMP/i ;
console.log(myRegex3.test(myString2));
const s = [2,4,6];
s[0] = 5;
let obj1 = {
  name : "Moin",
  class: "5"
}
Object.freeze(obj1);
obj1.name = "Abbas";
console.log(obj1); //It will print name : "Moin", class: "5" as the obj is freezed with that method.

const myFunction = () => new Date();
const myConcatenation = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcatenation([1,2],[3,4,5]));
const multiplier = item1 => item1*2;
multiplier(4);
//The default parameter kicks in when the argument is not specified (it is undefined).
const defaultParam = (name = "Anonymous") => "Hello" + name ;
console.log(defaultParam()); // it will print "Hello Anonymous"
console.log(defaultParam("Moin")); // it will print "Hello Moin"
//Using Rest Parameter
function howMany(...arg){
  return "You have passed" + arg.length + "arguments";
}
console.log(howMany(1,2,3));
function howMany1(...arg){
  return "Second Argument is " + arg[1];
}
console.log(howMany1(1,2,3));
//Normal Version
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null,arr);
console.log(maximus);
//We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array & apply() method takes arguments as an array.
//Modern Version using Spread Operator
const array1 = [6, 89, 3, 45];
const maximus1 = Math.max(...array1);
console.log(maximus1);
//Using ES6 to take values of object (Destructuring Assignment to Extract Values from Objects)
const user = {name : "John" , age : 19  };
const { name, age } = user;
//Destructuring Assignment to Assign Variables from Objects
const {name: newName, age: newAge} = user;
//Using Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { low: 12 , high: 18},
  tomorrow: { low: 11 , high: 21}
};
const {today: {low: Newlow , high: Newhigh}} = LOCAL_FORECAST;
const [a,b,,,c] = [1,2,3,4,5,6];
console.log(a,b,c);
let d = 8 , e = 5 ;
[d,e] = [e,d];
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
const stats = {
  max: 98,
  mode: 66.9,
  median: 55.6,
  min: 32
}
const half = ({min,max}) => (max + min)/2.0 ; //Destructuring Object Components
//Create Strings using Template Literals
const result = {
  success: ["First Position" , "Hardwork" , "Talent"],
  failure: ["Normal Position" , "Laziness" , "Not Focused"]
}
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0 ; i < arr.length ; i++) {
    const checking =  `<li class="text-warning">${arr[i]}</li>`;
     failureItems.push(checking)
  }
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender
});
//The JavaScript this keyword refers to the object it belongs to.
const Person = {
  name: "Taylor",
  sayHello(){
    return `Hello my name is ${this.name}.`
  }
}
//ES6 provides a new syntax to create objects, using the class keyword.
class Vegetable {
  constructor (paramTomato) {
    this.name = paramTomato;
  }
}
const tomato = new Vegetable("Tomato");
console.log(tomato.name);

const stringLower = (string) => {
  return string.toLowerCase();
}
const stringUpper = (string) => {
  return string.toUpperCase();
}
export {stringLower,stringUpper};
//Export defaults are useful to export only one value from a file & sometimes is used to create a fallback value for a file or module.
export default function subtract(x,y) {
  return x - y ;
};
const makeServerRequest = new Promise((resolve, reject)=>{
  let responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data");
  }
  else
  {
    reject("Data not recieved");
  }
  makeServerRequest.then(result => {
    console.log(result)
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });
});
class Fruit{
  constructor(){
    this.name = "Mango",
    this.region = "Made in Pakistan"
  }
}
const fruit1 = new Fruit();
console.log(fruit1.region);
//Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(f){
    this._f = f;
  }
  get temperature(){
    return 5/9 * (this._f-32) ;
  }
  set temperature(c){
    this._f = c * 9.0 / 5 + 32
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
//When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
let myString3 = "Love the way, You lie";
let myWord = /way/;
let result = myString3.match(myWord);
let myString4 = "The best player in the World, is the one and only Babar Azam";
let myWord2 = /the/gi ;
let result2 = myString4.match(myWord2);
console.log(result2);
//Match Anything with Wildcard Period
let myString5 = "If you'll come with me, we'll run under the sun & will have fun";
let myWord3 = /.un/ ;
let result3 = myString5.match(myWord3);
console.log(result3);
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result4 = quoteSample.match(vowelRegex);
console.log(result4);
let myString6 = "If you'll come with me, we'll run under the sun & will have fun and after that we'll took a fan and give it to mom";
let myWord4 = /f[au]n/gi ;
let result5 = myString6.match(myWord4);
console.log(result5);
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/g ;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);
//Match Single Characters Not Specified
let quoteSample1 = "3 blind mice.";
let myRegex1 = /[^aeiou1-4]/gi;
let result2 = quoteSample1.match(myRegex1);
console.log(result2);
let difficultSpelling1 = "Mississippi";
let myRegex2 = /s+/g ;
let result8 = difficultSpelling1.match(myRegex2);
console.log(result8);
//Match Characters that Occur Zero or More Times
let soccerWord = "goooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex =  /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
//Find Characters with Lazy Matching
//Lazy Matching 1
let text = "titanic";
let titanicRegex = /t[a-z]*i/
console.log(text.match(titanicRegex));
//Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
let titanicRegex2 = /t[a-z]*?i/
console.log(text.match(titanicRegex2));
let newText = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let newResult = newText.match(myRegex);
console.log(newResult);
//greedy regex that finds one or more C within a group of other alphabets
let reCriminals = /C+/g;
//Match Beginning String Patterns
let firstString = "Moin is the best but not Shahzaib";
let firstRegex = /^Moin/;
firstRegex.test(firstString); //returns true
let secondString = "Shahzaib is the best but not Moin"
firstRegex.test(secondString); // returns false
//Match Ending String Patterns
let secondRegex = /Shahzaib$/;
secondRegex.test(firstString); // return true
secondRegex.test(secondString);// returns false
//Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/; //Note, this character class also includes the underscore character (_).
let shortHand = /\w+/; // Same working as above
let numberSample = "123987";
let quoteSample = "important_var";
longHand.test(numberSample); //true
shortHand.test(numberSample); //true
longHand.test(quoteSample); //true
shortHand.test(quoteSample); //true
let quoteSample2 = "The five boxing wizards jump quickly.";
let newShorthand = /\w/g;
let answer1 = quoteSample2.match(newShorthand);
console.log(answer1);
//Match Everything But Letters and Numbers
let sentenceOne = "Hey! How are you?"
let nonAlphaNumeric = /\W/g;
let answer2 = sentenceOne.match(nonAlphaNumeric).length;
console.log(answer2);
// [^A-Za-z0-9_] = \W
//Match All Numbers
let movieName = "A Short Story of 1947."
let numRegex = /\d/g ;
let answer3 = movieName.match(numRegex);
console.log(answer3);
//Match All Non-Numbers
let noNumRegex = /\D/g ;
let answer4 = movieName.match(noNumRegex);
console.log(answer4);
let sample = "Whitespaces. Whitespaces everywhere"
let countWhiteSpaces = /\s/g ;
let notCountWhiteSpaces = /\S/g ;
let answer5 = sample.match(countWhiteSpaces);
console.log(answer5);
let answer6 = sample.match(notCountWhiteSpaces);
console.log(answer6);
//Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let answer7 = ohStr.match(ohRegex);
console.log(answer7);
let haStr ="h" + "a".repeat(10) + "h";
let haRegex = /ha{9,}h/;
let haResult = haRegex.test (haStr);
console.log(haResult);
//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{3}ber/;
console.log(timRegex.test(timStr));
let american = "color";
let british = "colour";
let languageRegex = /colou?r/; //Makes u optional
console.log(languageRegex.test(american)); //true
console.log(languageRegex.test(british)); //true
//Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d(2))/;
let answer8 = pwRegex.test(sampleWord);
console.log(answer8);
//Lookaheads Example 2
let quit = "qu";
let noquit = "qt";
let quitRegex = /(q?=u)/;
let noquitRegex = /(q!=u)/;
console.log(quit.match(quitRegex)); //true
console.log(noquit.match(noquitRegex)); //true
//Check For Mixed Grouping of Characters
//ometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().
let myString4 = "Eleanor Roosevelt";
let myRegexNew = /(Franklin|Eleanor!|Franklin D.) Roosevelt/;
console.log(myRegexNew.test(myString4)) ;
let repeatNum = "10 10 10";
let repeatNumRegex = /^(\d+)(\s)\1\2\1$/ ;
console.log(repeatNumRegex.test(repeatNum));
//Use Capture Groups to Search and Replace
let str = "One Two Three";
let fixRegex = /(\D+)\s(\D+)\s(\D+)/;
let replaceText = "$3 $2 $1"
let answer9 = str.replace(fixRegex, replaceText);
console.log(answer9);
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/gi;
let result11 = hello.replace(wsRegex,"");
console.log(result11);
console.clear();
var Err = ["MointheDev","Learning","Earning"];
console.warn(Err);
let one = 1;
let two = "2";
console.log(typeof one);
console.log(typeof two);
//Catch Misspelled Variable and Function Names
let misSpelled = "Misspelled Variable and Function Names";
console.log(`It gives Reference error when ${misSpelled}`);
let myArray = [1,2,3];
let arraySum = myArray.reduce((previous,current)=> previous + current);
console.log(`Sum of Arrays: ${arraySum}`);
//Catch Mixed Usage of Single and Double Quotes
let checkQuotes = "My name is 'Moin'";
//Catch Use of Assignment Operator Instead of Equality OperatorPassed
let x1 = 9;
let y1 = 7;
let result11 = "To come";
if (x==y) {
  result11 = "Equal";
}
else {
  result11 = "Not Equal";
}
console.log(result11);
//Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result12 = getNine();
console.log(result12);
//Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b,e) {
  return Math.pow(b,e)
}
let base = 2;
let exp = 3;
let result13 = raiseToPower(base, exp);
console.log(result13);
//Catch Off By One Errors When Using Indexing
function multiplyBy2() {
  let num = "12345";
  for (let i = 0; i < num.length ; i++) {
    console.log(num[i]*2)
  }
}
multiplyBy2();
//Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m,n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  row = [];
  return newArray;
}
let matrix = zeroArray(3,2);
console.log(matrix);
//Prevent Infinite Loops with a Valid Terminal Condition
function myfunc() {
  for (let i = 1; i <= 4; i+=2) {
    console.log("Still Going!");
  }
}
console.log(myfunc());
let array2 = ["One" , 2 , "three" , false , undefined];
array2[1] = "2 in string";
console.log(aaray2);
function mixedNumbers(arr){
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
}
let arr = [4 , "Five" , 6];
console.log(mixedNumbers(arr));
function popShift(arr){
  let popped = arr.pop();
  let shifted = arr.shift();
};
console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Remove Items Using splice()
const arr = [2,4,1,7,3,9,1];
arr.splice(0,5);
console.log(arr);
//Add Items Using splice()
function htmlColorNames(arr){
  arr.splice(0,2,"Red","Blue");
  return arr;
}
console.log(htmlColorNames(["Rippie","Blurple","Green","Yellow","Orange"]));
//Copy Array Item Using Slice
function forecast(arr) {
  let check = arr.slice(2,4);
  return check;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Copy an Array with the Spread Operator
function copyMachine(arr,num){
  let newArray1 = [];
  while (num >= 1) {
    let checkArray1 = [...arr];
    newArray1.push(checkArray1);
    num-- ;
  }
  return newArray;
}
console.log(copyMachine([true,false,true],2));
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment,'is', 'fun'];
  return sentence;
}

console.log(spreadOut());
//Check For The Presence of an Element With indexOf()
let fruits = ["orange", "mangoes" , "banana"];
fruits.indexOf("eggs"); // returns -1 (means not present)
fruits.indexOf("mangoes"); // returns 1 (present & on 1 position)
function quickCheck(arr,elem){
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(quickCheck(["peach","pomegrante","apple"],"apple"));
//Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//Create complex multi-dimensional arrays
let myNestedArray = [
  [
    ["deep"],
    [
      ["deeper"],
      [
        ["deepest"],
        ['unshift', false, 1, 2, 3, 'complex', 'nested'],
        ['loop', 'shift', 6, 7, 1000, 'method'],
        ['concat', false, true, 'spread', 'array'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
];
//
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
//Add Key-Value Pairs to JavaScript Objects
foods.bananas = 13;
foods["grapes"] = 35;
const fruit = "strawberries";
foods[fruit] = 27;
console.log(foods);
//Modify an Object Nested Within an Object
let userProfile = {
  name: "Shabbir",
  id: 81972,
  data: {
    college: "SSGU",
    percentage: 93 ,
    previousData: {
      school: "The Educators"
    }
  }
};
userProfile.data.previousData.school = "The Smart School";
console.log(userProfile);
// Making Changes in multi-dimensional Array
let checkingDeep = [
  ["deep"],
  [
    ["deeper"] , ["deeper"]
  ],
  [
    [
      ["deepest"], ["deepest"]
    ],
    [
      [
        ["deep-est?"]
      ]
    ],
  ]
];
checkingDeep[2][1][0][0][0] = "Yes It's the deepest";
console.log(checkingDeep);
//Access Property Names with Bracket Notation
let homeGrocery = {
  eggs: 190,
  yogurt: 50,
  banana: 90,
  tomato: 120
};
function checkGrocery(scannedItems){
  return homeGrocery(scannedItems);
}
console.log(checkGrocery("banana"));
//Use the delete Keyword to Remove Object Properties
delete foods.yogurt;
//Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if
  (userObj.hasOwnProperty("Alan") & 'Jeff' in userObj & 'Sarah' in userObj & userObj.hasOwnProperty("Ryan"))
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(isEveryoneHere(users));
//Iterate Through the Keys of an Object with a for...in Statement
let userObj = {
  Moin: {
    online: true
  },
  Shahzaib: {
    online: false
  },
  Ayan: {
    online: true
  }
};
function countOnline(userObj) {
  let answer10 = 0;
  for (let onlineUser in userObj) {
    if (userObj[onlineUser].online == true) {
      answer10 += 1;
    }
  }
  return answer10;
}
console.log(countOnline(userObj));
//Generate an Array of All Object Keys with Object.keys()
function getArrayOfUsers(obj) {
  let array1 = Object.keys(obj);//Object.keys is only for Objects
  return array1;
}

console.log(getArrayOfUsers(users));
//Generate an Array of all sub-properties of an Object.
function countOnline1(users) {
  let array2 = [];
  for (let onlineUser in users) {
    array2.push(Object.keys(users[onlineUser]))
  }
  return array2;
}
console.log(countOnline1(users))

//Modify an Array Stored in an Object
let user1 = {
  name: "Moin",
  age: 21,
  data: {
    username: "moin211",
    id: 12345,
    email: "moin@email.com",
    friends: [
      "Shahzaib",
      "Ayan"
    ]
  }
};
function addFriend(userObj,friend){
  userObj.data.friends.push(friend);
  return userObj["data"]["friends"];
}
console.log(addFriend(user1,"Inshal"));
//Convert Celsius to Fahrenheit
function CelsiusToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9/5) + 32 ;
  return fahrenheit;
}
console.log(CelsiusToF(30));
//Reverse a String
function reverseString(str){
  let array1 = [];
  for (let i = str.length ; i >= 0 ; i--) {
    array1.push(str[i]);
  };
  let str1 = array1.toString();
  let str2 = str1.replace(/,/g,"");
  return str2;
};
console.log(reverseString("hello"));
//Factorialize a Number
function factoriolize(num) {
  if (num > 1) {
    for (let i = num; i > 1 ; i--) {
      num = num * (i - 1);
    };
  }
  else if (num == 0 || num == 1) {
    num =1
  }
  return num;
};
console.log(factoriolize(5));
//Find the Longest Word in a String
function longestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  for (let i = 0 ; i > maxLength ; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  };
  return maxlength;
};
console.log(longestWord(sentence1));
let sentence11 = "Moin is here to help you out so just cheerup and be confident"
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let arrLength = arr.length;
  let maxNumber = -100;
  let newArray = [];
  for (let i = 0 ; i < arrLength ; i++) {
    for (let j = 0 ; j < arr[i].length ; j++) {
      if (arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
        }
    }
    newArray.push(maxNumber)
    console.log(newArray)
    maxNumber = -100;
  }
  return newArray;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
};
confirmEnding("Bastian", "n");
function confirmEnding1(str, target) {
  let length = str.length - target.length ; // 11-6 = 5
  let newLength = str.substr(length)// (5,)
  if (newLength == target) { //str[5]
    return true;
  }
  else
  {
    return false;
  }

}
confirmEnding1("Bastian", "n");
//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = "";
 for (let i = 0; i < num ; i++) {
    newStr = newStr + str
 };
 return newStr;
}

repeatStringNumTimes("abc", 3);
//Truncate a String
function truncateString(str, num) {
  if (num < 20) {
    return str.slice(0,num)+"...";
  }
  else
  {
    return str.slice(0,num);
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
//Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    num = arr[i]
    if (func(num) == true) {
      return num;
    }
  }
  return undefined;

}

findElement([1, 2, 3, 4], num => num % 2 === 0);
//Check if a value is classified as a boolean primitive. Return true or false.Boolean primitives are true and false.
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
//Boo who
function booWho(bool) {
  if (typeof(bool) == "boolean") {
    return true
  }
  else {
    return false;
  }
}

console.log(booWho(null));
//Title Case a Sentence
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}
//Title Case a Sentence
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("I'm a little tea pot");
//Title Case a Sentence by me.
function titleCase(str) {
  let newStr = str.toLowerCase();
  let array1 = newStr.split(" ");
  let array2 = [];
  for (let i = 0; i < array1.length; i++) {
    array2[i] = array1[i].replace(
      array1[i].charAt(0),
      array1[i].charAt(0).toUpperCase()
    );
  }
 return array2.join(" ");
}

titleCase("I'm a little tea pot");
//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  const arr1New = arr1.slice(0,arr1.length);
  const arr2New = arr2.slice(0,arr2.length);
  console.log(arr2New)
  console.log(arr1New)
  for (let i = arr1.length - 1; i >= 0 ; i--) {
    arr2New.splice(n , 0 , arr1New[i]);
  };
  return arr2New;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//Falsy Bouncer
function bouncer(arr) {
  const checkArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newa = Boolean(arr[i]);
    if (newa == true) {
      checkArr.push(arr[i]);
    }
  }
 return checkArr;
}

bouncer([7, "ate", "", false, 9]);
//Where do I Belong
function getIndexToIns(arr, num) {
  const newArr = arr;
  newArr.sort(function(a,b){return (a-b)})
  if (arr.length == 0) {
    return 0
  }
  else if (newArr[arr.length - 1] < num) {
    return arr.length
  }
  else if (newArr[0] < num || newArr[0] == num || newArr[arr.length - 1] > num || newArr[arr.length - 1] == num) {
    for (let i = 0 ; i < newArr.length ; i++) {
    console.log(newArr[i])
    if (newArr[i] > num || newArr[i] == num) {
      return i
    }
  };
  }
}

console.log(getIndexToIns([], 1));
//Mutations
function mutation(arr) {
  let firstArray = arr[0].toLowerCase().split("");
  let secondArray = arr[1].toLowerCase().split("");
  for (let i = 0; i < secondArray.length; i++) {
    if (firstArray.indexOf(secondArray[i]) < 0) {
      return false;
    }
  }
 return true;
}

mutation(["hello", "hey"]);
//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let a = size;
  const newArr = [];
  for (let i = 0 ; i < arr.length ; i = i + size) {
    newArr.push(arr.slice(i , a));
    a = a + size;
  };
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
let dog = {
  name: "Max",
  numLegs: 4,
  sayLegs: function() {return "My dog has " + numLegs + " Legs."}
};
console.log(dog.name , dog.numLegs , dog.sayLegs());
//Make Code More Reusable with the this Keyword.
let cat = {
  name: "Betty",
  numLegs: 4,
  sayLegs: function() {"My cat has " + this.numLegs + " Legs"}
}
console.log(cat.sayLegs());
//Constructor Functions
function Parrot() {
  this.name = "Harry";
  this.color = "Green";
  this.numLegs = 2;
}
//Use a Constructor to Create Objects
let Macawparrot = new Parrot();
//Changing its properties via long way
Macawparrot.name = "Alexa";
Macawparrot.color = "Blue";
//Creating Constructor which will make it easy for editing values for instances.Extend Constructors to Receive Arguments
function Car(name , color) {
  this.name = name;
  this.color = color;
  this.numTyres = 4;
}
let ferrari = new Car("ferrari 101", "Red");
//Verify an Object's Constructor with instanceof
let lamborghini = {
  name: "Lamborghini 101",
  color: "Black",
  numTyres: 4
};
console.log(lamborghini instanceof Car); //false
console.log(ferrari instanceof Car); //true
//Understand Own Properties
let ownProps = [];
for (let property in Car) {
  if (Car.hasOwnProperty(property)) {
    ownProps.push(property);
  }
};
console.log(ownProps);
//Use Prototype Properties to Reduce Duplicate Code
Car.prototype.gearType = "auto";
console.log(lamborghini.gearType);
//Iterate Over All Properties
function Insects(name,color) {
  this.name = name;
  this.color = color;
}
Insects.prototype.numLegs = 6;
let insect1 = new Insects("Cockroach", "Brown");
let ownProperty = [];
let prototypeProperty = [];
for (let property in insect1) {
  if (insect1.hasOwnProperty(property)) {
    ownProperty.push(property);
  }
  else
  {
    prototypeProperty.push(property);
  }
}
console.log(ownProperty);
console.log(prototypeProperty);
//Understand the Constructor Property
function checkInsect(candidate) {
  if (candidate.constructor === Insects) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInsect(insect1));
//Change the Prototype to a New Object
function Birds(name){
  this.name = name;
}
Birds.prototype = {
  constructor: Birds,     // here
  numLegs : 2,
  eat : function() {
    console.log("eat eat & just eat");
  },
  describe : function() {
    console.log("My name is " + this.name);
  }
};
//Remember to Set the Constructor Property when Changing the Prototype
/*There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:
To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property: Like done in above code*/
//Understand Where an Object’s Prototype Comes From
let sparrow = new Birds("Yeni");
Birds.prototype.isPrototypeOf(sparrow); // will return true.
//Understand the Prototype Chain
Object.prototype.isPrototypeOf(Birds.prototype); // will return true.
//Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor : Cat,
}
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor : Bear,
}
function Animal() { };

Animal.prototype = {
  constructor: Animal,
  eat : function() {
    console.log("nom nom nom");
  }
}
/*Above code can also be written as
Animal.prototype.eat = function() {
  console.log("nom nom nom");
}
let animal = new Animal(); <- this type of instance creation has some issues in terms of inheritance so we r going to use a new method.
*/
//Inherit Behaviors from a Supertype
let lion = Object.create(Animal.prototype);
let leopard = Object.create(Animal.prototype);
//Set the Child's Prototype to an Instance of the Parent
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;                      //here
let bigCats = new Cat("cheetah");
bigCats.eat();
//bigCats inherits all of Animal's properties, including the eat method.
//Reset an Inherited Constructor Property
/*When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
 that's why we manually set the constructor property of Cat to the Cat object in upper code */
 //Add Methods After Inheritance
function House() { };
House.prototype.rooms = function() {
  console.log("There are rooms");
}
function CamperVan() { }
CamperVan.prototype = Object.create(House.prototype);
CamperVan.prototype.constructer = CamperVan;
CamperVan.prototype.facilities = function() {
  console.log("There are all facilities available in here");
}
let AngilaVan =  new CamperVan();
AngilaVan.facilities();
AngilaVan.rooms();
//Override Inherited Methods
function Bird2() { };
Bird2.prototype.fly = function() {
  return "I am Flying";
}
function Penguin() { }
Penguin.prototype = Object.create(Bird2.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas! these birds can not Fly";
}
let penguin = new Penguin();
console.log(penguin.fly()); // Will print Alas! these birds can not Fly.
//Use a Mixin to Add Common Behavior Between Unrelated Objects
let boat = {
  name : "Speeder Boat",
  type : "SuperJet"
}
let bird = {
  name : "Mimi Penguin",
  numLegs : 2
}
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Just Glide Man!")
  }
}
glideMixin(boat);
glideMixin(bird);
//Use Closure to Protect Properties Within an Object from Being Modified Externally
//In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition
//The simplest way to make this public property private is by creating a variable within the constructor function.
function Bird3() {
  let hatchedEgg = 10; // like this
  this.getHatchedEggCount = function() {
    return hatchedEgg;
  }
}
let eagle = new Bird();
console.log(eagle.getHatchedEggCount());
//Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
}) ();
//Use an IIFE to Create a Module
let funModule = (function () {
  return {
    isCuteMixin : function(obj) {
    obj.isCute = function() {
      return true;
    };
  },
  singMixin : function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
      };
    }
  }
  }) ();
  //
  function convertToRoman(num) {
    let newNumLength = num.toString().length;
    let newNum = num.toString();
    let newArr = [];
    for (let i = 0; i < newNumLength; i++) {
      let var1 = newNum.charAt(i);
      for (let j = newNumLength - (i+1); j > 0; j--) {
        var1 = var1 + "0";
      }
      newArr.push(var1);
    }
    console.log(newArr);
  }

  convertToRoman(986);
//Learn About Functional Programming
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);

const prepareBlackCoffee = () => "Black Cofee";
const getCoffee = (numOfCups) => {
  const coffeeCups = [];
  for (let cups = 0 ; cup <= numOfCups ; cups++) {
    const coffeeCups = prepareBlackCoffee();
    coffeeCups.push(prepareBlackCoffee);
  }
  return coffeeCups;
};
const teamBeingTechGeek = getCoffee(25);
console.log(teamBeingTechGeek);
//Javascript Callbacks
function justDisplay(something1) {                     //callback function or lambda or first class function
  let myVar1 = "The answer is " + something1 ;
  console.log(myVar1);
}
function calculatingSomething(calculateVar1 , calculateVar2 , justDisplay) {    //higher order function or first class function
  let sum1 = calculateVar1 + calculateVar2;
  justDisplay(sum1);
}
calculatingSomething(9,8,justDisplay);
//Understand Functional Programming Terminology
/*
With that information, we'll need to revisit the getWallColor function from last challenge to handle various tea requests.
We can modify getWallColor to accept a function as a parameter to be able to change the type of tea it prepares.
This makes getWallColor more flexible, and gives the programmer more control when client requests change.
*/
const wallColorGreen = () => "Green should be the color of the wall";
const wallColorRed = () => "Red should be the color of the wall";

const getWallColor = (wallColor,numOfPaintTin) => {
  const paintWall = [];
  for (let tin = 0 ; tin <= numOfPaintTin ; tin++) {
    const paintWall = wallColor();
    paintWall.push(wallColor);
  }
  return paintWall;
}
const teamBeingTechGeekGreen = getWallColor(wallColorGreen,5);
console.log(teamBeingTechGeekGreen);
const teamBeingTechGeekRed = getWallColor(wallColorRed,5);
console.log(teamBeingTechGeekRed);
//Understand the Hazards of Using Imperative Code
//tab is an array of the titles of each site open in a window tab
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

//When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
}
//When you open a new tab in the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push("new tab");
  return this;
}

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//Avoid Mutations and Side Effects Using Functional Programming
let fixedValue = 4; // Global Variable
function incrementer(fixedValue) {
  return fixedValue + 1;
}
console.log(incrementer); // Global variable is not disturbed

//Refactor Global Variables Out of Functions
const bookList = ["moin" , "shahzaib" , "ayan" , "inshal" , "osama"];
const newBookList = bookList.slice(); // making a copy

function addBookName(newBookList,bookName) {
  newBookList.push(bookName);
  return newBookList;
}

function removeBookName(newBookList,bookName) {
  const bookIndex = newBookList.indexOf(bookName);
  if (bookIndex >= 0) {
    newBookList.splice(bookIndex,1);
    return newBookList;
  };
}
console.log(addBookName(newBookList,"ali"));
console.log(removeBookName(newBookList,"moin"));

//Use the map Method to Extract Data from an Array
const user11 = [
  {name: "Moin" , age: 20 , class: "Third Semester"},
  {name: "Shahzaib" , age: 21 , class: "Fifth Semester"},
  {name: "Ayan" , age: 20 , class: "Fourth Semester"},
  {name: "Ameen" , age: 22 , class: "Sixth Semester"}
];
const ids = user11.map(check);
function check(user){
  return ({greatname : user["name"] , bestage :user[age]});
}

console.log(JSON.stringify(ids));
// map (The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.)
const array3 = [1,3,5,7,9];
const map1 = array3.map(x => x*2);
console.log(map1);
//In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
//Implement map on a prototype (Basically understanding concept of map by creating our own map method).
const s3 = [21,34,9,16]; // global variable
Array.prototype.myMap = function(callback) {
  const myNewArray = [];
  for (let i = 0 ; i < s3.length ; i++) {
    myNewArray.push(callback(s3[i]));
  }
  return myNewArray;
}
const new_s3 = s3.myMap(function(item){
  return item * 2;
});
console.log(new_s3);
console.log(s3);
//Using .forEach()
// The global variable
Array.prototype.myMap = function(callback) {
  const newArray1 = [];
  // Only change code below this line
    s.forEach((word) => {
  newArray1.push(callback(word));})
  // Only change code above this line
  return newArray1;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s);
console.log(s);
//Just an example learning .map()
newarray1 = [1,3,5,7,9];
const newarray2 = [...newarray1];
const map2 = array1.map(checkCallback);
function checkCallback(num, index, array) {
  var1 = num + index;
  newarray2.push(var1);
  return var1;
}
console.log(map2);
console.log(newarray2);
//Use the filter Method to Extract Data from an Array
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Metascore": "74",
    "imdbRating": "8.6",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Metascore": "82",
    "imdbRating": "9.0",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Metascore": "70",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Metascore": "83",
    "imdbRating": "7.9",

  }
];
const filteredList = watchList.map(checkFunction).filter(watchListItem => parseInt(watchListItem["rating"]) >= 8.0);
function checkFunction(watchListItem){
  return {title: watchListItem["Title"] , rating: watchListItem["imdbRating"]}
};
console.log(filteredList);
//Implement the filter Method on a Prototype
const s4 = [23,65,98,5];
Array.prototype.myFilter = function(callback) {
  const newArray4 = [];
  for (let i = 0 ; i < s.length ; i++) {
    if (callback(s[i]) == true) {
      newArray4.push(s[i]);
    }
  }
  return newArray4;
}
const new_s4 = s.myFilter(function(item){
  return item % 2 === 1;
});
console.log(new_s4);
//Return Part of an Array Using the slice Method
function sliceArray(anim,beginSlice,endSlice){
  const newArray = anim.slice(beginSlice,endSlice);
};
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim,1,3));
//Combine Two Arrays Using the concat Method
function nonMutatingConcat(first,second) {
//return first.push(second);
  return first.concat(second);
}
const first = [1,2,3,4,5];
const second = [5,6,7,8,9];
console.log(nonMutatingConcat(first,second));
//.concat can be replaced with .push
//Use the reduce Method to Analyze Data
const someUsers = [
  {name: "Abbas" , age: 21},
  {name: "Bilal" , age: 22},
  {name: "Candy" , age: 20},
  {name: "Danny" , age: 16}
];
const sumOfSomeUsers = someUsers.reduce((sum,someUser) => sum + someUser.age , 0);
console.log(sumOfSomeUsers);
//Another Example
const objOfSomeUsers = someUsers.reduce((obj , user) => {
  obj[user.name] = user.age ;
  return obj;
} , {});
console.log(objOfSomeUsers);
//
const checkItems = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 10 },
  { name: "Chicken", price: 15 },
  { name: "Monitor", price: 20 }
];
/*let totalPriceCheckItems = 0;
checkItems.forEach((item) => {
  totalPriceCheckItems += item.price;
});
console.log(totalPriceCheckItems);
*/
const totalPrice = checkItems.reduce((total , item) => {
  return total + item.price;
} , 0);
console.log(totalPrice);

const people = [
  {name: "Moin" , age: 21},
  {name: "Shahzaib" , age: 33},
  {name: "Ayan" , age: 19},
  {name: "Inshal" , age: 41},
  {naem: "Arbaz" , age: 19}
];

const resultPeople = people.reduce((groupedPeople , eachPeople) => {
    const age = eachPeople.age;
    if (groupedPeople[age] == null) {
      groupedPeople[age] = [];
    }
    groupedPeople[age].push(eachPeople);
    return groupedPeople;
} , {});
console.log(resultPeople);
//
const fruitItems = [
  {fruitName: 'Banana' , quantity: 12},
  {fruitName: 'Apple' , quantity: 9},
  {fruitName: 'Watermelon' , quantity: 11}
];

const resultFruitList = fruitItems.reduce((totalFruits , eachFruit) => {
  totalFruits[eachFruit.fruitName] = eachFruit.quantity;
  return totalFruits;
},{});

console.log(resultFruitList);
//Use the reduce Method to Analyze Data
const myList = [
  { word: "Hello", writer: "Moin", rating: "9.2" },
  { word: "My", writer: "Moin", rating: "8.2" },
  { word: "name", writer: "Abbass , Mastan", rating: "8.7" },
  { word: "is", writer: "Moin", rating: "9.1" },
  { word: "something", writer: "Shahzaib", rating: "7.2" }
];
function getRating(myList) {
  let shortList = myList
    .map((eachItem) => ({
      Writer: eachItem["writer"],
      Rating: eachItem["rating"] * 1
    }))
    .filter((eachItem) => eachItem["Writer"] == "Moin");
  let beforeAverage = shortList.reduce((sum, eachItem) => {
    return sum + eachItem["Rating"];
  }, 0);
  return beforeAverage / shortList.length;
}
console.log(getRating(myList));
//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
  return arr.filter((arr) => arr = arr > 0 && arr % parseInt(arr) === 0).map((arr) => arr*arr);
}

const squareIntegers = [-2,6.3,4,-3.7,3];
console.log(squareList(squareIntegers));
//Sort an Array Alphabetically using the sort Method
function alphabeticalOrder(someStringArray){
  return someStringArray.sort(function(a,b){
   if (a === b) {
     return 0
    } else if (a < b) {
      return -1
    } else {
      return 1
    }}
  )
}
let someString = "My name is Moin and what about you";
let someStringNoWhitespace = someString.toLowerCase().replace(/\s/g , "");
let someStringArray = someStringNoWhitespace.split("");

console.log(alphabeticalOrder(someStringArray));
//Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  const newArr = arr.slice();
  return newArr.sort(function(a,b){
    return a - b;
  })
}

nonMutatingSort(globalArray);
//Split a String into an Array Using the split Method
function splitify(str) {
  return str.split(/[,.-\s]/g);
}

console.log(splitify("Hello World,I-am code"));
//Combine an Array into a String Using the join Method
function sentensify(str) {
  let newStr = str.split(/[,.-\s]/g);
  return newStr.join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));
//Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
  const newTitle = title.toLowerCase().split(" ");
  const check = newTitle.filter((arr) => {if (arr != " "){
    return arr;
  }})
  return check.join("-")
 }
 urlSlug(" Winter Is  Coming");
 //Use the every Method to Check that Every Element in an Array Meets a Criteria
const arr4New = [1,-3,5,-7,9,11]
 function checkPositive(arr4New) {
  return arr4New.every(function(eachValue) {
    return eachValue > 0;
  })
}
console.log(checkPositive(arr4New));
//Use the some Method to Check that Any Elements in an Array Meet a Criteria
const arr5New = [1,3,5,-7,9,11];
function checkArr5New(arr5New){
  return arr5New.some(function(eachItem) {
    return eachItem < 0;
  });
}
console.log(checkArr5New(arr5New));
//Introduction to Currying and Partial Application
function UnCurried(x, y) {
  return x + y;
}
function Curried(x) {
  return function (y) {
    return x + y;
  };
}
// Short Way : const Curried = x => y => x + y
console.log(UnCurried(1, 3));
//Short Form : console.log(Carried(1)(2));
const functionForY = Curried(1);
console.log(functionForY(8));
//partial application
function impartial(x,y,z){
  return x+y+z;
};
const partial = impartial.bind(this,1,2);
console.log(partial(8));
//Original Code
function justAdd(x) {
    return function(y) {
       return function(z) {
         return x + y + z;
       }
  }
}
console.log(justAdd(10)(20)(30));
//
//Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]){
    for(let i = arr[0] ; i <= arr[1] ; i++){
      sum = sum + i;
    }
  }
  else
  {
    for(let i = arr[1] ; i <= arr[0] ; i++){
      sum = sum + i;
    }
  }
  return sum;
}

console.log(sumAll([1, 4]));
//Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  let arr3 = arr1.concat(arr2);
  for (let i = 0 ; i < arr3.length ; i++) {
    if (newArr.includes(arr3[i]) == false) {
      newArr.push(arr3[i]);
    }
  }
  const giveArray = newArr.filter(check);
  function check(each){
    if (arr1.includes(each) == false || arr2.includes(each) == false) {
      return each;
    }
  }
  return giveArray
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
//Seek and Destroy
function destroyer(arr) {
  const checkArr = [];
  for (let i = 1 ; i < arguments.length ; i++) {
    checkArr.push(arguments[i])
  }
  const newArr = arr.filter(checkFunc);
  function checkFunc(eachItem){
    if (checkArr.includes(eachItem) == false) {
      return eachItem;
    }
  }
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//Was doing 5 projects work (After below solution everything is aligned).
//Roman Numeral Converter
//A bit Complicated Way
function convertToRoman(num) {
  const romanArray = []
  const some = [
    {
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
    0 : ""
    },
   {
    1 : "X",
    2 : "XX",
    3 : "XXX",
    4 : "XL",
    5 : "L",
    6 : "LX",
    7 : "LXX",
    8 : "LXXX",
    9 : "XC",
    0 : ""
   },
    {
    1 : "C",
    2 : "CC",
    3 : "CCC",
    4 : "CD",
    5 : "D",
    6 : "DC",
    7 : "DCC",
    8 : "DCCC",
    9 : "CM",
    0 : ""
    },

  ]
 let thousandNum = "";
 let numArray = num.toString().split("").reverse();
 let checkArray = []

  console.log(numArray);
  if (numArray.length < 4) {
    for (let i = 0 ; i < some.length ; i++){
     for (let j = i ; j <= numArray.length ; j++){
      checkArray.push(some[i][numArray[j]])
      break
     }
    }
  } else if (numArray.length > 3) {
    for (let i = 3 ; i < numArray.length ; i++) {
      for (let j = 0 ; j < numArray[i] ; j++) {
        thousandNum = thousandNum +"M";
      }
    }

   numArray.splice(3);
   for (let i = 0 ; i < some.length ; i++){
     for (let j = i ; j <= numArray.length ; j++){
      checkArray.unshift(some[i][numArray[j]]);
      break
     }
    }
    checkArray.reverse()
    checkArray.push(thousandNum);
  }
 checkArray.reverse();
 let answer = checkArray.join("")
 return answer;
 }
 console.log(convertToRoman(1023))
//Straight Forward Way
function convertToRoman(num) {
  const romanArray = []
  const some = [
    {
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
    0 : ""
    },
   {
    1 : "X",
    2 : "XX",
    3 : "XXX",
    4 : "XL",
    5 : "L",
    6 : "LX",
    7 : "LXX",
    8 : "LXXX",
    9 : "XC",
    0 : ""
   },
    {
    1 : "C",
    2 : "CC",
    3 : "CCC",
    4 : "CD",
    5 : "D",
    6 : "DC",
    7 : "DCC",
    8 : "DCCC",
    9 : "CM",
    0 : ""
    },
    {
    1 : "M",
    2 : "MM",
    3 : "MMM",
    4 : "MMMM",
    5 : "MMMMM",
    6 : "MMMMMM",
    7 : "MMMMMMM",
    8 : "MMMMMMMM",
    9 : "MMMMMMMMM",
    0 : "M"
    }

  ]
 let thousandNum = "";
 let numArray = num.toString().split("").reverse();
 let checkArray = []

  console.log(numArray);
  if (numArray.length < 6) {
    for (let i = 0 ; i < some.length ; i++){
     for (let j = i ; j <= numArray.length ; j++){
      checkArray.push(some[i][numArray[j]])
      break
     }
    }
  }
 checkArray.reverse();
 let answer = checkArray.join("");
 return answer;
 }
 console.log(convertToRoman(1000))
 //Caesars Cipher
 function rot13(str) {
  const  obj1 = {
   "A" : "N",
   "B" : "O",
   "C" : "P",
   "D" : "Q",
   "E" : "R",
   "F" : "S",
   "G" : "T",
   "H" : "U",
   "I" : "V",
   "J" : "W",
   "K" : "X",
   "L" : "Y",
   "M" : "Z",
   "N" : "A",
   "O" : "B",
   "P" : "C",
   "Q" : "D",
   "R" : "E",
   "S" : "F",
   "T" : "G",
   "U" : "H",
   "V" : "I",
   "W" : "J",
   "X" : "K",
   "Y" : "L",
   "Z" : "M"
  };
  let check = [];
  for (let i = 0 ; i < str.length ; i++) {
    if (obj1.hasOwnProperty(str[i]) == true) {
      check.push(obj1[str[i]])
  } else {
    check.push(str[i])
  }
  }
  return check.join("");
}

console.log(rot13("SERR CVMMN!"));
//Wherefore art thou
function whatIsInAName(collection, source) {
  const sourceKey = Object.keys(source);
  return collection.filter(obj => sourceKey.every(key => obj.hasOwnProperty(key)&& obj[key] == source[key]));
 }

 console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//Spinal Tap Case
 function spinalCase(str) {
  let newStr = str.split("");
  let check = /[A-Z]+/
  let space = /\s/
  let newArr = [];
  //console.log(newStr);
  for(let i = 0 ; i < newStr.length ; i++) {
    if (newStr[i] == " ") {
      newArr.push("-")

    }else if (check.test(newStr[i]) == false || newStr[i] == newStr[0] ) {
      if (newStr[i] !== "_") {
          newArr.push(newStr[i].toLowerCase());
      }
  } else if (check.test(newStr[i]) == true){
      if (space.test(newStr[i - 1]) == false ) {
        newArr.push("-") && newArr.push(newStr[i].toLowerCase())
      } else {
        newArr.push(newStr[i].toLowerCase())
      }
    }
  }

return newArr.join("")
}
console.log(spinalCase('AllThe-small Things'));
//Spinal Tap Case official
function spinalCase(str) {
  let strRegex = /\s+|_+/g ;
  str =  str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(strRegex , "-").toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));
//Pig Latin
function translatePigLatin(str) {
  let regexConsonant = /^[bcdfghjklmnpqrstvwxyz]+/g ;
  if (regexConsonant.test(str) == true) {
    return str.replace(regexConsonant , "").concat(str.match(regexConsonant)).concat("ay")
  } else {
    return str.concat("way")
  }
}

console.log(translatePigLatin("eight"));
//Search and Replace
function myReplace(str, before, after) {
  let checkRegex = /[a-z]/g;
  console.log(checkRegex.test(before[0]))
  console.log(checkRegex.test(after[0]))
  if (checkRegex.test(before[0]) == false && checkRegex.test(after[0]) == true) {
    return str.replace(before , after.replace(after[0] , after[0].toUpperCase()));
  }
  else if (checkRegex.test(before[0]) == true || checkRegex.test(after[0]) == false)
{
  return str.replace(before , after.replace(after[0] , after[0].toLowerCase()))
}
else
{
  return str.replace(before,after)
}
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));