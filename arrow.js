const user ={
    username: "nigar",
    password: "nigar@123",
    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);      
        // console.log(this);
        
    }
}
// user.welcomeMessage();
user.password = 'nihu@gmail.com'
// console.log(user.password);
//console.log(this); 

//this not work with function
// function nihu(){
//     let coderName = 'nigu'
//     console.log(this.coderName);

// }
// nihu()

const addTwo = (num1 ,num2) =>  num1 + num2;
console.log(addTwo(12,12));

const usingObj = (n1,n2)=> ({name: 'nihu'})
console.log(usingObj(1,2));

const myArray = [2,3,4,5,6,7,8,0]