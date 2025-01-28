const coding = ['js', 'python', 'java', 'c++']

// coding.forEach( function (val){
//     console.log(val);
    
// }) 

// coding.forEach( (item)=>{console.log(item);
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
    
// })

const myCode =[{
    language: 'javascript',
    fileName: 'js'
},
{
    language: 'python',
    fileName: 'py'
},
{
    language: 'C',
    fileName: 'c'
}]

myCode.forEach((item)=>{console.log(item.language);
})