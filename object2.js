//singleton- const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "nigar234";
tinderUser.name = "123456"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "Nigar",
            lastName: "Khalifa"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);

const obj1  = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS in Eng",
    price: "499",
    courseInstructor: "nigar"
}
const {courseInstructor: helper}= course
console.log(helper);

