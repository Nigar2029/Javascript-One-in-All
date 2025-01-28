// for each loop returns a call
// for eah don't return a value while filter does, filter works with condition
// if using filter with scope u have to return it. 

const lang = ["js",'c', 'python', 'c++']

const values =lang.forEach((item)=>{
    // console.log(item);  
    // return values;
})
// console.log(values);

const myNum = [1,20,2,3,4,5,6,7,8,9];

// const newNums = myNum.filter((num)=> num > 5 );
// const new_Num = myNum.filter((num)=>{
//     return num > 4
    
// })
// console.log(new_Num);

const newNums = []

myNum.forEach((num)=>{
    if (num> 4) {
        newNums.push(num)
    }
})
console.log(newNums)