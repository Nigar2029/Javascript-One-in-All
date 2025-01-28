// Objects
// 
// if u want to apply loop on object use for in  loop
const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   // console.log(`${key} ${myObject[key]}`);
    
}

const programming =["js","ruby", 'python', 'c++']

for (const key in programming) {
    console.log(`${key} ${programming[key]}`);
    
}