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

let stocks = {
  fruits: ["mango", "apple", "strawberry", "banana"],
  liquid: ["ice", "water"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, start_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);
    start_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[1]} and ${stocks.liquid[0]} was added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`for holder ${stocks.holder[0]} was selected`);

            setTimeout(() => {
              console.log(`for topping ${stocks.toppings[0]} was selected`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);