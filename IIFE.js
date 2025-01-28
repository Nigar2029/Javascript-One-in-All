//Immediatedly invoked function expression IIFE
// global scope polution , to remove global scope variable pollution we use IIFE
(function task(){
    //named IIFE
    console.log(`DB connected!`);
})   
();

((name)=>{
    console.log(`welcome back, ${name} `);    
} )('nigar');

