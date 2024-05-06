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

//
function timeConversion(s) {
    let midday = s.substr(s.length-2, s.length-1);
    console.log(midday);
    if(midday === "AM"){
        if(s.substr(0, 2) == "12"){
            return "00" + s.substr(2, s.length-4);
        }
        return s.substr(0, s.length-2);
    }else if(midday === "PM"){
        if(s.substr(0, 2) == "12"){
            return "12" + s.substr(2, s.length-4);
        }
        let mmss = s.substr(2, s.length-4);
        let hh = parseInt(s.substr(0, 2))+12;
        return hh+mmss;
    }
}
console.log(timeConversion('11:05:45PM'));


//Finding Unique Integer
function lonelyinteger(a) {
    let matchingArray = [];
    if(a.length === 1){
        return a[0];
    }
    for(let i = 0; i < a.length; i++){
        for(let j = i+1; j < a.length; j++){
            if(a[i] === a[j]){
                matchingArray.push(a[i]);
            }
        }   
    }
    return a.filter((element) => !matchingArray.includes(element))[0];
}

console.log(lonelyinteger([1,2,3,6,7,2,1,3,6]));

function lonelyInteger2(a){
    let lonely = 0;
    for(let i = 0; i < a.length; i++){
        lonely ^= a[i];
    };
    return lonely;
}
console.log(lonelyInteger2([1,2,3,6,7,2,1,3,6]));

function flippingBits(n) {
    
    let bits = (n.toString(2).padStart(32, '0')).split(''); 
    for(let i = 0; i < bits.length; i++){
        if(bits[i] === '0'){
            bits.splice(i,1,"1");
        } else {
            bits.splice(i,1,"0");
        }
    }
    return parseInt(bits.join(''),2);
}

flippingBits(123456);

//Diagonal Difference
function diagonalDifference(arr){
    let reverseArr = arr.map((item, index) => arr[arr.length-1 - index]);
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length ; j++){
            if(i === j){
                primaryDiagonal += arr[i][j];
                secondaryDiagonal += reverseArr[i][j];
            }
        }
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference([[1,2,3],[4,5,6],[7,8,9]]));

//better
function diagonalDifference2(arr) {
    let n = arr.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < n; i++) {
        primaryDiagonal += arr[i][i];
        secondaryDiagonal += arr[i][n - 1 - i];
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference2([[1,2,3],[4,5,6],[7,8,9]]));

//Counting Sort 1
function countingSort(arr) {
    // Write your code here
    let zeroArray = new Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
        zeroArray[arr[i]] += 1;
    }
    return zeroArray;
}

//A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
function pangrams(s) {
    const alphabets = {
        A: false, B: false, C: false, D: false, E: false, F: false, G: false, H: false, I: false, J: false, K: false, L: false, M: false, N: false, O: false, P: false, Q: false, R: false, S: false, T: false, U: false, V: false, W: false, X: false, Y: false, Z: false
    }
    let sentence = s.toUpperCase().split(" ").join("").split("");
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] in alphabets){
            alphabets[sentence[i]] = true;
        }
    }
    for(const property in alphabets){
        if(alphabets[property] === false){
            return "not pangram"
        }
    }
    return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));

//Better way
function pangram2(s){
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let sentence = s.toLowerCase();
    for(let character of alphabets){
        if(!sentence.includes(character)){
            return "not pangram";
        }
    }
    return "pangram";
}

console.log(pangram2("We promptly judged antique ivory buckles for the next prize"));

//Permuting Two Arrays
function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a); 
    for(let i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k) {
            return "NO";
        }
    }
    return "YES";
}

//Subarray Division 1
