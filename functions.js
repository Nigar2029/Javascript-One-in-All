function addTwoNumbers(number1, number2){
    let results = number1 + number2;
    return results;
    // console.log("nigar");  
}
const result = addTwoNumbers(3,9);
// console.log("result: ",result);

function loginUser(username = "sam" ){
    if(!username){
        console.log("please enter a username ");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser());

function userCart(var1, var2,...num1){
    return num1
}
// console.log(userCart(200,4000,230, 700));

const user ={
    username: "nigar",
    prices: 199
}

function handleUser(anyObj){
    console.log(`username is ${anyObj.username} price is ${anyObj.price}`);
    
}

// handleUser(user)
handleUser({
    username: "sam",
    price: 499
})

const myNewArray = [200,300,400,500,600]

function returnValue(getArray){
    return getArray[1]
}
// console.log((returnValue(myNewArray)));
console.log(returnValue([200,400,9000]));
