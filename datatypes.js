// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// let hello = "hello"
// const id = Symbol('234');
// const anotherId = Symbol('234')
// console.log(id == anotherId);


// reference (Non Primitive)

// Array, Objects, Function
// const bigNumber = 2312356257889956890004212578n;
// const cities = ['jaipur', 'ahmedabad', 'pune', 'lonavala']
// const myFunc  = {
//     name1: 'nigar',
//     age: '20'
// }
// console.log(typeof hello);


/************************************ */
// stack (non-primitive)   heap (primitive)

// let myName = "Nigar";
// let name = myName;
// name = 'khalifa'
// console.log(myName);
// console.log(name);

// let userOne = {
//     email: 'user@google.com',
//     upi: 'user@ybl'
// }

// let userTwo = userOne;

// userTwo.email= 'nigar@google.com'
// console.log(userTwo);

// let game = new String ('nigarkhalifa');
// console.log(game)
// console.log(game.endsWith(a));

// console.log(`hello i am writing JS code ${userOne} ${userTwo}`);

// const name = '        learning javascript       ';
// let letter = name.trimEnd
// ();
// console.log(letter);

// let fruits = 'apple, mango, banana, grapoes';
// let veg = 'spinach, leafy, cauli'
// let text = fruits.concat(" ", veg)
// let fruit= fruits.toUpperCase();
// console.log(text);


let n1 = "5";
n1 = n1.padEnd(3,"x");

// let n2 = 5;
// let num = n2.toString();
// let n3=
// num.padEnd(4, '0')
console.log(n1);

let text1 = "hello world "
let result = text1.replace("hello", "javacsript");
console.log(result);

let loc= "please locate where 'locate' occurs";
let index = loc.startsWith("please");
console.log(index);

