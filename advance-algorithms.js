//**Merge Sort:** Implement the merge sort algorithm for sorting an array.


    // let a  = unsortedArray.slice(0,3);
    // unsortedArray.splice(0,3,a);
    // let tempArr = [a,...unsortedArray]
    
    // let temp = unsortedArray.splice(0, chunk);
    // console.log(tempArr);

function mergeSort(unsortedArray){
    if(unsortedArray.length < 2){
        return unsortedArray;
    }
    let midpoint = Math.round((unsortedArray.length)/2);
    let leftArr = unsortedArray.slice(0,midpoint);
    let rightArr = unsortedArray.slice(midpoint);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    const tempArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            tempArr.push(leftArr.shift())
        } else {
            tempArr.push(rightArr.shift())
        }
    }
    return [...tempArr, ...leftArr, ...rightArr];
}

const unsortedArray = [12, 11, 13, 7, 5, 6];
console.log(mergeSort(unsortedArray));

function isBalanced(expression){
    let stack = [];
    let bracketPairs = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }
    for(let bracket of expression){
        if(bracket === "{" || bracket === "(" || bracket === "["){
            stack.push(bracket);
        } else{
            if(stack.length === 0 ||  stack.pop() !== bracketPairs[bracket]){
                return "NO"
            }
        }
    }
    if(stack.length === 0){
        return "YES"
    } else {
        return "NO"
    }
}
let expression = "{[(])";
console.log(isBalanced(expression));

function nonDivisibleSubset(k, s) {
    // Write your code here
    let issueSet = [];
    let ansSet = new Set();
    for(let i = 0; i < s.length-1; i++){
        for(let j = i+1; j < s.length; j++){
            let sum = s[i]+s[j];
            if( sum % k === 0){
                issueSet.push(s[i]);
                issueSet.push(s[j]);
            }

        }
    }
    
}

console.log(nonDivisibleSubset(3, [1,2,4,7]))

const array = [1, 2, 3, 2, 4, 5, 4, 5];
const uniqueElements = new Set();
const duplicates = [];

array.forEach(item => {
  if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
});

console.log(uniqueElements.size); // Output: [2, 4, 5]