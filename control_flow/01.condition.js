// <, >, ==, <==, >==, !=,===
//if

// const temp = 20
// const ifUserLoggedIn = true;

// if( temp ===  20){
//     console.log('less than 25');  
// }
// else{
//     console.log('temperature is greater than 25');
    
// }

// const marks = 200

// if (marks > 100){
//     const power = 'fly';
//     console.log(`user power ${power}`);  
// }
// console.log(`user power ${power}`);

//shorthand notation-implicit scope

const balance = 1000
// if (balance > 500) console.log("test2")

// if(balance < 500){
//     console.log('less than 500');  
// }
// else if(balance < 750){
//     console.log('less than 750')
// }
// else{
//     console.log('less than 1200');
    
// }

// || - any one condition must be true
// && - all condition must be true
const userLoggedIn = false;
const debitCard = true;
const loggedFromGoogle = true;
const loggedFromEmail = false
if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
    
} if(loggedFromGoogle || loggedFromEmail) {
    console.log("user logged in");
    
}