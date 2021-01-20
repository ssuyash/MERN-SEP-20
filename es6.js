//let and const


// if(1==1){

//     let a = 10

// }



// console.log(a)


// for(let i=0; i<=10; i++){

// }

//console.log(i)





// const PI = 3.147
// PI = 22/7

// console.log(PI)





// let =>
// 1) not hoistet
// 2) scoped
// 3) can re assign
// 4) can not re declare


// const =>
// 1) not hoistet
// 2) scoped
// 3) cannot reassign
// 4) can not re declare



//Arrow Function =>

// function sum(a, b){
//     return a+b
// }


// var a = 10
// let a = 20

// let sum = (a, b)=>{
//     return a+b
// }

// let square = num => num*num


//Destructuring


//object
let person = {name:'suyash', age:26, phone:'8878071281'}
let {name, age} = person
console.log(name, age)



//array
let ages = [24, 26]
let [bhavisya, suyash] = ages
console.log(bhavisya, suyash)



//Spread Operator
let nums = [10, 20, 30, 40]
let numsCpy = [ ...nums, 50, 60, 70 ]
numsCpy[0] = 50
console.log(nums, numsCpy)


let student = {name:"nandanee", course:"MERN"}
let studentCpy = {...student, mbl:"987654321"}
studentCpy.course = "MEAN"
console.log(student, studentCpy)


//String Interpolation

let greetName = "suyash"
let greet = `Hello ${greetName} Good Morning`
console.log(greet)



//OOPS => class, object, this




 






