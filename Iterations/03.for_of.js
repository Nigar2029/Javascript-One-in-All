// for of loop
// if u want to apply loop on array use for of loop

// ["", "", ""]
// [{}, {}]
const arr = [12,2,3,4,5,6,7,90]

for (const element of arr) {
    // console.log(element);
    
}

const greetings = 'hello world';

for (const greet of greetings) {
    //console.log(`greeting: ${greet}`);
    
}

// maps- contains unique values
// map is an object , holds in k-value pair

const map = new Map()
map.set('IN', 'India')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')

// console.log(map);

for (const [key, value] of map) {
    //console.log(key,value);
    
}

// const myObj = {
//     game1: "NFS",
//     'game2': "spiderman"
// }

// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// }