function myCart(...elements){
    return elements;
}

console.log(myCart(1,5,7,9));

function myCart2(username = "moin"){
    return username;
}

console.log(myCart2("ali"));