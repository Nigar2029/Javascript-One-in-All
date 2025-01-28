var c= 201;
let a = 101
if (true){
    
    let a= 0;
    const b= 20;
    var c = 10;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username ="nigar"
    function two(){
        const websites= "youtube"
        console.log(username);   
    }
    // console.log(websites);
    two()
}
// one()

if(true){
    const username = "nigar "
    if(username == 'nigar '){
        const website = 'youtube'
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//************* Intersting ***************** */
// function expression
console.log(addOne(90));
function addOne (num){
    return num + 1;
}

console.log(addTwo(8));
const addTwo = function (num){
    return num +2
}
