const books = [
    { title: "book one", genre: "Fiction", Publish: 1981, edition: 2004},
    {title: "book two", genre: "Non-fiction", Publish: 1992, edition: 2008},
    {title: "book three", genre: "History", Publish: 1991, edition: 2007},
    {title: "book four", genre: "Non-fiction", Publish: 1981, edition: 2006},
    {title: "book five", genre: "science", Publish: 1992, edition: 2005},
    {title: "book six", genre: "Geo", Publish: 1909, edition: 2004},
    {title: "book seven", genre: "History", Publish: 1991, edition: 2003},
];

let userBooks = books.filter((book)=> book.genre === 'Fiction');
userBooks.filter((bk)=>{ 
    return bk.Publish >= 1995 && bk.genre === "Fiction"
})
// console.log(userBooks);

/***************************************************************************************** */
// map automatically returns value
const myNumber = [1,2,3,4,5,6,7,8,9]
//const newNum =myNumber.map((num)=> { return num +1});

const newNum = myNumber.map((num)=>num *10)
                        .map((num)=> num+ 1)
                        .filter(( num ) => num >= 40)
console.log(newNum);
