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