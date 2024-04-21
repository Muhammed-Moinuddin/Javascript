
//sum of two numbers
function sum(a, b){
    return a+b;
}

console.log(sum(3,4));

//finding maximum number in an array1.
let array1 = [2,7,1,44,8,23,76,108,90,64,12,112];

function findingMaxNumber(array1) {
    let ans = 0;
    for(let i = 0; i < array1.length-1; i++){
        // if(array1[i] > array1[i+1] || array1[i] > ans){
        //     ans = array1[i]
        // } else if(array1[i+1] > ans) {
        //     ans = array1[i+1]
        // } else {
        //     ans = ans;
        // }
        if(array1[i] > array1[i+1] && array1[i] > ans) {
            ans = array1[i];
        } else if(array1[i+1] > array1[i] && array1[i+1] > ans) {
            ans = array1[i+1];
        }
    }
    return ans;
}

console.log(findingMaxNumber(array1));

//finding max number in another way
function MaxNumber(array1){
    let number = array1[0];
    for(let i = 0; i < array1.length; i++){
        if (array1[i] > number){
            number = array1[i];
        }
    }
    return number;
}
console.log(MaxNumber(array1));
//finding min number in array2
let array2 = [23,5,43,-2,99,-8,32,67];
function findingMinNumber(array2) {
    let ans = array2[0];
    for(let i = 0; i < array2.length - 1; i++){
        if(array2[i] < array2[i+1] && array2[i] < ans) {
            ans = array2[i];
        } else if (array2[i+1] < array2[i] && array2[i+1] < ans) {
            ans = array2[i+1];
        }
    }
    return ans;
}

console.log(findingMinNumber(array2));

//code for Factorial
function factorialFunction(factorialNumber) {
    let ans = 1;
    for(let i = factorialNumber; i > 0 ; i--){
        ans = ans*i
    }
    return ans;
}

console.log(factorialFunction(4));

//otherway of factorial number using callback and making it recursive
function secondFactorial(factorialNumber){
    if (factorialNumber === 0 || factorialNumber === 1) {
        return 1;
    }
    return factorialNumber * secondFactorial(factorialNumber - 1);
}

console.log(secondFactorial(8));

// => 4 * secondFactorial(3)
// => 4 * (3 * secondFactorial(2))
// => 4 * (3 * (2 * secondFactorial(1)))
// => 4 * (3 * (2 * 1))
// => 4 * (3 * 2)
// => 4 * 6
// => 24

//Palindrome Check
function PalindromeChecker(word){
    let checkingWord = '';
    let myword = word.toLowerCase();
    for(let i = myword.length-1; i >= 0; i--){
        checkingWord += myword[i]
    }
    if (checkingWord === myword) {
        return "Yes the word is Palindrome";
    } else {
        return "No, the word is not Palindrome";
    }
}
console.log(PalindromeChecker("MadaM"));

//Short Way
function isPalindrome(str){
    const reverseString = str.toLowerCase().split('').reverse().join('');
    return str === reverseString
}
console.log(isPalindrome("lol"));

//anotherWay
function isPalindrome2(word){
    let len = word.length-1;
    for(let i = 0; i <= len; i++){ //madam
        if(word[i] !== word[len - i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome2("racecar")); // Output: true
console.log(isPalindrome2("hello"));   // Output: false

function fizzBuzz(){
    let fizzBuzzArray = [];
    for(let i = 1; i <= 100; i++){
        if( i%3 == 0 && i%5 == 0){
            fizzBuzzArray.push(`FizzBuzz + Number:${i}`);
        }else if (i%3 == 0) {
            fizzBuzzArray.push(`Fizz + Number:${i}`);
        }else if (i%5 == 0){
            fizzBuzzArray.push(`Buzz + Number:${i}`);
        }else{
            fizzBuzzArray.push(i);
        }
    }
    return fizzBuzzArray;
}

console.log(fizzBuzz());

let oneToTenArray = [1,2,3,4,5,6,7,8,9];

function matrices(array){
    let outerArray = [];
    let innerArray = [];
    for(let i = 0; i < array.length; i++){
        innerArray.push(array[i]);
        if(innerArray.length == 2){
            outerArray.push(innerArray);
            innerArray = [array[i]];
        }
         if (i == array.length-1){
            innerArray = [];
            innerArray.push(array[i]);
            outerArray.push(innerArray);
        }
    }
    return outerArray;
}
console.log(matrices(oneToTenArray));