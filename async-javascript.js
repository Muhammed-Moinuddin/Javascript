// synchronous

console.log(" I ");
console.log(" eat ");

setTimeout(() => {
  console.log(" ice cream ");
}, 4000);

console.log(" with a ");
console.log(" spoon ");

function one(call_two) {
  console.log(" step 1 complete. move to step 2");
  call_two();
}

function two() {
  console.log(" step 2 ");
}

one(two);

let order = (start_production) => {
    console.log("order placed, please call production")
    start_production();
  };
  
let production = () => {
console.log("order received, start production")
};

order(production);