// for

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if(element == 6){
        // console.log('number 6 printed');
        
    }
    // console.log(element); 
}

for (let index = 0; index <= 10; index++) {
    // console.log(`outer loop value: ${index}`);
    for (let j = 0; j < 10; j++) {

      //  console.log(`inner loop value ${j} outer loop value ${index}`);
        // console.log(index + '*' + j + '=' + index * j );
        
    }
    
}

let myArr = ['yellow', 'green', 'blue']
console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

//break and continue

for (let index = 1; index <=20; index++) {
    const element = index;
    if(index == 5){
        console.log('5 detected');
        // break;
        continue;
    }
    console.log(element);
    
}