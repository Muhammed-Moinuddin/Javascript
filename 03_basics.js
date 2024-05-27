function myCart(...elements){
    return elements;
}

console.log(myCart(1,5,7,9));

function myCart2(username = "moin"){
    return username;
}

console.log(myCart2("ali"));

const user = {
    username: "moin",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
console.log(this);

//In this example, this refers to the person object.
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
      return this;
    }
};
console.log(person.myFunction().firstName);

//IIFE

//named IIFE
(function chai(){
    console.log("DB connected");
})();

((myName) => {
    console.log(myName);
})("Moinuddin here");

console.log("Checking signature stuff")