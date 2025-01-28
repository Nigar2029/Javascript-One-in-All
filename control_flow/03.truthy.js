
// truthy falsy

const userEmail = [];

if (userEmail) {
    // console.log("user email matched ");
    
}else{
    console.log("dont have user email");
    
}

//falsy values - false, 0,  -0, BigInt, 0n, "", null, undefined, NaN
//truthy values - "0", "false", " ",[], {}, function(){}
// values inside string are truthy values

if(userEmail.length === 0){
    // console.log("array is empty");
    
}

//how to check if object is empty
const emptyObj = {user: 'xyz'}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

//Nullish coalescing operator (??)- null undefined
// this operator is design to handle null and undefined values
let val1;
// val1 = 10 ?? 20
// val1 = null ?? 12
// val1 = null ?? 10 ?? 20

console.log(val1);


// ternary operator
const teaPrice = 30;
teaPrice >= 20 ? console.log("more than 20"): console.log("less than 20");
