//arrays
const myArr = [0,1,2,3,4,5,6,"nigar"]
// const codingLanguages = ["C#", "Python", "Java", "C", "html", "CSS", " "]

// console.log(codingLanguages[6]);

// array method
// codingLanguages.push("javascript")
// codingLanguages.pop()
// codingLanguages.pop()

// console.log(myArr.includes("nigar"));
// console.log(codingLanguages.indexOf(1));

// const newArr = myArr.join()

// codingLanguages.unshift("JS") // adds value in start
// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

// console.log("A", myArr);
// const myArr1 = myArr.slice(1,3);
// console.log(myArr1)
// console.log("B", myArr);

// const myArr2 = myArr.splice(1,3);
// console.log(myArr2);
// console.log("C", myArr);


const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes= ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// const allArr = marvel_heroes.concat(dc_heroes);
// console.log(allArr);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

const arr = [0,1,2,3,4,[2,3,4], [2,3,3,[5,68,8,9,10],30,20,90]]
const new_arr = arr.flat(Infinity);
console.log(new_arr);

console.log(Array.isArray("Nigar"));
console.log(Array.from("Nigar"));
console.log(Array.from({name: "Nigar"}));  //imp

let score1 = 101;
let score2= 102;
let score3 = 103;

console.log(Array.of(score1, score2, score3));

