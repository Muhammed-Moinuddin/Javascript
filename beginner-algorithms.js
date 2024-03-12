
//sum of two numbers
function sum(a, b){
    return a+b;
}

console.log(sum(3,4));

//finding maximum number in an array1.
let array1 = [2,7,1,44,8,23,76,108,90,64,12];

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