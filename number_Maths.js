const score = 290;
console.log(score);

const bal = new Number(100);
console.log(bal)

console.log(bal.toString().length);
console.log(bal.toFixed(1));

const number1 = 13.7996
console.log(number1.toPrecision())

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

/*********************************MATHS******************************************* */
console.log(Math.abs(-4));
console.log(Math.round(4.9)); // rounds value
console.log(Math.ceil(4.2));  // take first value
console.log(Math.floor(4.9));  // take first value
console.log(Math.min(10,20));
console.log(Math.max(20,13,25,56,70));

console.log(Math.floor(Math.random()*10 + 1));


const min =10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min + 1) + min));

