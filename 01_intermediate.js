// It does not work
let myNumber;
switch(myNumber){
    case myNumber < 100:
        console.log("Correct")
        break;
    case myNumber < 50:
        console.log("Correct")
        break;
    case myNumber < 25:
        console.log("Not Correct")
        break;
    default:
        console.log("It ends")
}

let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    default:
        day = "It is useless";
}
console.log(day);

let day2;
switch(7){
    default:
        day2 = "It is useless";
        break;
    case 0:
        day2 = "Sunday";
        break;
    case 1:
        day2 = "Monday";
        break;
    case 2:
        day2 = "Tuesday";
        break;
    case 3:
        day2 = "Wednesday";
        break;
    case 4:
        day2 = "Thursday"
        break;
    case 5:
        day2 = "Friday"
        break;
    case 6:
        day2 = "Saturday"
        break;
}
console.log(day2);

//falsy values
// false, 0, undefined, null, NaN, "", 0, -0, BigInt 0n

//truthy values
//"0", "false", " ", [], {}, function(){}

//Nullish Coalscing Operator (??) : null & undefined
let val1;
val1 = 5 ?? 10;
let val2;
val2 = null ?? 11;
let val3;
val3 = undefined ?? 12;
console.log(val2);
console.log(val1);
console.log(val3);

//Terniary Operator 
let myPrice = 100;
myPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is greater than 80");


//Loop with break and Continue(eik baar kai liyai skip)
for(let i = 1; i <= 20; i++){
    if(i === 5){
        console.log("5 is the best number");
        break;
    }
    console.log("Number is " + i);
}

//5 will be skipped
for(let j = 1; j <= 20; j++){
    if(j === 5){
        console.log("5 is the best number");
        continue;
    }
    console.log("Number is " + j);
}