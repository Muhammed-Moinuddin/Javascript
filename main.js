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
