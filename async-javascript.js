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

//till here

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

//In order to run the below code, first comment the above one.

let is_shop_open = true;

let order2 = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry! Our Shop is closed."));
    }
  });
};

order2(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order2(0, () => console.log("Production has started"));
  })

  .then(() => {
    return order2(2000, () => console.log("the fruit was chopped"));
  })

  .then(() => {
    return order2(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    );
  })

  .then(() => {
    return order2(1000, () => console.log("start the machine"));
  })

  .then(() => {
    return order2(2000, () =>
      console.log(`Ice Cream placed on ${stocks.holder[0]}`)
    );
  })

  .then(() => {
    return order2(3000, () =>
      console.log(`For topping ${stocks.toppings[0]} was selected`)
    );
  })

  .then(() => {
    return order2(2000, () => console.log("Ice Cream was served"));
  });
