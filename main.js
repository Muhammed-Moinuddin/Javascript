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
let sentence1 = "Moin is here to help you out so just cheerup and be confident"
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