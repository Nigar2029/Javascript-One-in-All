
//singleton - if using constructor only

//Objects literals
const mySym = Symbol("Key1") 

let user = {
    name: "Nigar",
    "full name " : "Nigar Khalifa",
    [mySym]: "myKey1",  // when u want to refer to symbol use []
    age: "20",
    location: "Jaipur",
    email: "nigar@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Sunday"]
}
console.log(user.email);

console.log(user["full name "]);
console.log(typeof user[mySym]);

// user.email = "nigar@chatgpt.com";
// console.log(user);
// Object.freeze(user);
// user.email = "nigar@microsoft.com"
// console.log(user);
user.greetings = function(){
    console.log("Hello JS user!");  
}
user.greet  = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(user.greetings());
console.log(user.greet());

