//**Merge Sort:** Implement the merge sort algorithm for sorting an array.


    // let a  = unsortedArray.slice(0,3);
    // unsortedArray.splice(0,3,a);
    // let tempArr = [a,...unsortedArray]
    
    // let temp = unsortedArray.splice(0, chunk);
    // console.log(tempArr);

function breakArr(unsortedArray){
    if(unsortedArray.length <= 1){
        return unsortedArray;
    }
    let midpoint = Math.round((unsortedArray.length)/2);
    let leftArr = unsortedArray.slice(0,midpoint);

    let rightArr = unsortedArray.slice(midpoint, unsortedArray.length );

    return mergeSort(leftArr, rightArr);
}

function mergeSort(leftArr, rightArr){
    let ans = []
    if(leftArr.length = 1){
        ans.push(leftArr);
        console.log(leftArr);
    } else {
        breakArr(leftArr);
        console.log(leftArr);
    }
    if(rightArr.length = 1){
        ans.push(rightArr);
        console.log(rightArr);
    } else {
        breakArr(rightArr);
        console.log(rightArr);
    }
    return ans;
}

const unsortedArray = [12, 11, 13, 7, 5, 6];
const sortedArray = breakArr(unsortedArray);
console.log(sortedArray);

