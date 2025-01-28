// reduce

const myNums  = [1,2,3]

const myTotal = myNums.reduce((acc, currentVal)=>{
    // console.log(`acc: ${acc}, current-value ${currentVal}`);
    
    return acc + currentVal;
}, 0)

// console.log(myTotal);

const shoppingCart = [
    {course: "JS master",
        price: 899
    },
    {course: "Data Science ",
        price: 799
    },
    {course: "Data Structures and Algorithms",
        price: 999
    },
    {course: "Sql",
        price: 599
    },
    {course: "React JS master",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
   
    return acc + item.price 
},0)

console.log("total price :", priceToPay);
