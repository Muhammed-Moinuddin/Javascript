//Reverse a String
function reverseString(word) {
  let ans = "";
  for (let i = word.length - 1; i >= 0; i--) {
    ans = ans + word[i];
  }
  return ans;
}
console.log(reverseString("Moinuddin"));

//Count Occurrences in Array
function occurrenceArray(inputArray) {
  const ansObject = { 1: 0 };
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] in ansObject) {
      ansObject[inputArray[i]] = ansObject[inputArray[i]] + 1;
    } else {
      ansObject[inputArray[i]] = 1;
    }
  }
  console.log(ansObject);
}
occurrenceArray([1, 1, 3, 3, 4, 1, 7, 8, 4, 4]);

//Two Sum
//Given an array of numbers and a target sum, find two numbers in the array that add up to the target sum.
function twoSum(inputArray, targetSum) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (
        inputArray[i] != inputArray[j] &&
        inputArray[i] + inputArray[j] === targetSum
      ) {
        return [inputArray[i], inputArray[j]];
      }
    }
  }
}

console.log(twoSum([1, 3, 5, 7, 9, 2, 4, 6, 8], 13));

//Linked List Cycle Detection: Implement a function to detect if a linked list has a cycle.
//Need to learn DSA completely from scratch


//**Binary Search:** Write a function to perform binary search on a sorted array.
const randomNumbers = [42, 17, 89, 55, 23, 68, 91, 37, 12, 77, 63, 29, 51, 84, 19, 6, 38, 72, 99, 45, 13, 82, 27, 58, 94, 31, 67, 10, 76, 52];
//First Sorting above array.
function selectionSort(randomNumbers){
    for(let i = 0; i < randomNumbers.length; i++){
        let smallestNumber = randomNumbers[i];
        for(let j = i+1; j < randomNumbers.length; j++){
            if(smallestNumber > randomNumbers[j]){
                smallestNumber = randomNumbers[j]
                smallestNumberPosition = j
            }
        }
        let temp = randomNumbers[i];
        randomNumbers[i] = smallestNumber;
        randomNumbers[smallestNumberPosition] = temp;
    }
    return randomNumbers;
}
console.log(selectionSort(randomNumbers));
console.log(randomNumbers);

//Binary Search
function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1
  let mid = Math.trunc((start + end)/2);
  for(let i = start; i <= end; i++){
    if(key == sortedArray[mid]){
      return `Number is Present at position: ${mid + 1}`;
    } else if (key > sortedArray[mid]){
      start = mid + 1;
      mid = Math.trunc((start + end)/2); 
    } else if (key < sortedArray[mid]) {
      end = mid - 1;
      mid = Math.trunc((start + end)/2);
    }
  }
  return "Number is not present";
}

console.log(binarySearch(randomNumbers, 41)); // Output: 2