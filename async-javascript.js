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
  })
  .catch(() => {
    console.log("Customer Left");
  })
  
  .finally(() => {
    console.log("Day Ended, Our shop is closed")
  })

  async function order(){
    try{
      await abc;
    }
    catch(error){
      console.log("", error)
    }
    finally{
      console.log("runs code anyway")
    }
  }

  let toppings_choice = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log("which topping would you love?"));
      }, 3000);
    });
  };
  
  async function kitchen() {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    await toppings_choice();
    console.log(" D ");
    console.log(" E ");
  }
  
  kitchen();
  console.log("doing the dishes");
  console.log("cleaning the tables");
  console.log("taking others orders");

  function time(ms) {
    return new Promise((resolve, reject) => {
      if (is_shop_open) {
        setTimeout(resolve, ms);
      } else {
        reject(console.log("shop is closed"));
      }
    });
  }
  
  async function kitchens() {
    try {
      await time(2000);
      console.log(`${stocks.fruits[0]} was selected`);
  
      console.log("start the production");
  
      await time(2000);
      console.log("cut the fruit");
  
      await time(1000);
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
  
      await time(1000);
      console.log("start the machine");
  
      await time(2000);
      console.log(`ice cream placed on ${stocks.holder[0]}`);
  
      await time(3000);
      console.log(`${stocks.toppings[0]} was selected`);
  
      await time(2000);
      console.log("serve the ice cream");
    } catch (error) {
      console.log("customer left", error);
    } finally {
      console.log("day ended, shop is closed");
    }
  }
  
  kitchens();
