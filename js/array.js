// // group of data


// //how to make array

// var students = ['aplna', 'bhavisya', 'piyush', 'nandanee', 'suyash']
// //var students = new Array('aplna', 'bhavisya', 'piyush', 'nandanee')



// //indexing >> starts from 0
// console.log(students[1])


// //prperties : 
// //i) length >> returns length of given array
// console.log(students.length)

// students[4] = "kumar"

// for(var i = 0; i < students.length; i++){
//     console.log(students[i])
// }




// //create an array of number type elements and increase number by a given number
// var numArray = [51, 12, 145, 25, 32, 85]
// var number = 5

// //logic
// for(var i=0; i<numArray.length; i++){
//     numArray[i] = numArray[i] + number
// }


// //console.log(numArray)// [56, 17, 150, 30, 37, 90]

// for(var i=0; i<numArray.length; i++){     
//     if(numArray[i] % 2 == 0){
//         console.log(numArray[i], " is even")
//     }else{
//         console.log(numArray[i], " is odd ")
//     }
// }



// //loop array object


// //check number is prime or not 
// // check number is amstrong
// // calculate square of every number


// //prime number =>  number which is only divisible by 1 or self

// function isPrime(num){
//     var prime = true
//     for(var i=2; i<num; i++){
//         if(num%i == 0){
//             prime = false
//             break
//         }
//     }
//     return prime
// }


// var numArray = [51, 12, 145, 25, 32, 85, 29, 153]


// for(var i=0; i<numArray.length; i++){
//     var num = numArray[i]

//     var isprime = isPrime(num)

//     if(isprime == true){
//         console.log(num, 'is a prime number')
//     }else{
//         console.log(num, 'is not a prime number')
//     }
// }


// // amstrong number => if the sum of power of digit of number by the number of digit in that number is equal to number itself

// //2) number of digits 
// //3) digits of the number


// function getNumOfDigits(number){
//     var digits = 0
//     while(number != 0){
//         number = Math.floor(number/10)
//         digits++
//     }
//     return digits
// }




// function isAmstrong(number){
//     var numberCpy = number
//     var numOfDigit = getNumOfDigits(number)
//     var sum = 0    
//     while(number != 0){
//         var lstDigit = number%10;
//         sum += Math.pow(lstDigit, numOfDigit)
//         number = Math.floor(number/10)
//     }

//     if(numberCpy == sum){
//         return true
//     }else{
//         return false
//     }
    
// }



// for(var i=0; i<numArray.length; i++){
//     var num = numArray[i]

//     var isprime = isAmstrong(num)

//     if(isprime == true){
//         console.log(num, 'is a Amstrong number')
//     }else{
//         console.log(num, 'is not a Amstrong number')
//     }
// }



// var nums = [1, 2, 5, 7, 9, 2, 3, 5]
// var checkNumber = 50

// var count = 0

// for(var i = 0; i<nums.length; i++){
//     var num = nums[i]

//     if(num == checkNumber){
//         count++
//     }
// }

// console.log("number present in array :", count, "times") 



// var nums = [1, 2, 5, 7, 9, 2, 3, 5]
// var findNumber = 5
// for(var i = 0; i<nums.length; i++){
//     var num = nums[i]
//     if(num == findNumber){
//         console.log(i)
//     }
// }




//2
//7



// var nums = [1, 2, 5, 7, 9, 2, 3, 5]
// var findNumber = 50

// var index = -1

// for(var i=0; i<nums.length; i++){
//     var num = nums[i]
    
//     if(num == findNumber){
//         index = i
//         break
//     }
// }
// console.log(index)
//if number is available in array then print its first found index otherwise print -1



// var nums = [1, 2, 5, 7, 9, 2, 3, 5]
// var findNumber = 20
// //if number is available in array then print its last found index otherwise print -1
// var index = -1

// for(var i=0; i<nums.length; i++){
//     var num = nums[i]
    
//     if(num == findNumber){
//         index = i        
//     }
// }
// console.log(index)


// var nums = [5, 3, 2, 7]
// var ans = nums[0]

// for(var i = 1; i<nums.length; i++){
//     ans = ans-nums[i]
// }

// console.log(ans)
//ans : -7


var nums = [2, 4, 10, 15, 20, 12]

// for(var i=0; i<nums.length; i++){
//     var sum = 0
//     for(var j=i; j<nums.length; j++){
//         sum += nums[j]
//     }
//     console.log(sum)
// }



// for(var i=0; i<nums.length/2; i++){
//     var indexEle = nums[i]
//     var indexEleEnd = nums[nums.length-i-1]
//     console.log(indexEle+indexEleEnd)
// }

// 6-0-1 = 5
// 6-1-1 = 4

// 0  5
// 1  4
// 2  3
//14
//24
//35

//63
//61
//51


//var arr = ["Alpna", 'Nandanee']
//var arr = new Array()

//1) insertion

//console.log(arr)

//i) push => insert new element at the end of the array
//arr.push("Arpita")


//ii) unshift()
//arr.unshift("Arpita")

//2) deletion
//i) pop() => removes element form the end of the array
//arr.pop()

//ii) shift() => removes element from the start of the array
//arr.shift()
//console.log(arr)


// var nums = [10, 20, 25, 10, 62, 35]
// var evens = []
// var odds = []


// for(var i=0; i<nums.length; i++){
//     if(nums[i]%2 == 0){
//         //even
//         evens.push(nums[i])
//     }else{
//         //odd
//         odds.push(nums[i])
//     }
// }





// console.log(evens) // 10 20 10 62
// console.log(odds) // 25 35


//document.write(nums.toString())




// var nums = [10, 20, 25, 10, 62, 35]
// var benchmark = 25

// var lessThenBenchamrk = []
// var greaterThenBenchamrk = []

// for(var i=0; i<nums.length; i++){
//     if(nums[i] > benchmark){
//         //even
//         greaterThenBenchamrk.push(nums[i])
//     }else{
//         //odd
//         lessThenBenchamrk.push(nums[i])
//     }
// }


// var nums = ['e', 's', 'l', 'i', 't' ]
// var vowel = []
// var consonents = []


// //a, e, i, o, u
// for(var i=0; i<nums.length; i++){
//     var chr = nums[i]    
//     if(chr == 'a' || chr=='e' || chr=='i' || chr=='o' || chr=="u"){
//         vowel.push(chr)
//     }else{
//         consonents.push(chr)
//     }
// }


// var nums = [10, 20, 30, 40, 55, 20]
// //indexOf() => return the first index of item if it is avl in array otherwise returns -1
// var ind = nums.indexOf(120)



// //lastIndexOf() => return the last index of item if it is avl in array otherwise returns -1
// var ind = nums.lastIndexOf(20)

// console.log(ind)



// var nums = [10, 20, 50, 10, 100, 30, 50, 40, 20, 10, 20, 10, 100]
// var unq = [] 

// for(var i=0; i<nums.length; i++){
//     if(unq.indexOf(nums[i]) == -1){
//         unq.push(nums[i])
//     }    
// }


// var nums = [10, 20, 50, 10, 100, 30, 50, 40, 20, 10, 20, 10, 100]
// var checkArray = [50, 10, 20, 11, 130, 60, 20,  50]
// var foundArray = []

// for(var i=0; i<checkArray.length; i++){
//     var num = checkArray[i]
//     if(nums.indexOf(num) != -1  && foundArray.indexOf(num) == -1){        
//             foundArray.push(num)        
//     }
// }

// console.log(foundArray) // [10, 20, 50, 100, 30, 40]


var nums = [10, 12, 32, 14, 50]

// for(var k=0; k<nums.length; k++){
//     for(var i=k; i<nums.length; i++){
//         for(var j=k; j<=i; j++){
//             console.log(nums[j])
//         }
//     }    
// }



//forEach()  => iterate an array
nums.forEach(function(e, index){
    console.log(e*e)
})


//map => performs given function to every element of array and returns a new array.


// var sqrArr = []

// var sqr = function(num){
//     return num*num
// }

// nums.forEach(function(ele){
//     var numSqr = sqr(ele)
//     sqrArr.push(numSqr)
// })

// console.log(sqrArr)

// var newArr = nums.map(function(el){
//     return el*el
// })

// console.log(newArr)


// var persons = [
//     {name:"suyash", age:15},
//     {name:"bhavisya", age:55},
//     {name:"alpna", age:18},
//     {name:"Piyush", age:21},
// ]



// var canVote = []
// var canNotVote = []

// persons.forEach(function(ele){
//     if(ele.age >= 18){
//         canVote.push(ele)
//     }else{
//         canNotVote.push(ele)
//     }
// })


// console.log(canVote, canNotVote)


var products = [
    {name:"iphone 8 ", brand:"apple", price:999},
    {name:"samsung note ", brand:"samsung", price:999},
    {name:"note 8 ", brand:"mi", price:999},
    {name:"note 9 ", brand:"mi", price:999},
    {name:"m 13", brand:"oppo", price:999},
    {name:"n 14", brand:"vivo", price:999},
]

products.forEach(function(product, ind){
    if(product.brand == "mi"){
        console.log(ind)
    }
})

var brands = ['apple', 'samsung']

var result = products.filter(function(product){
    return brands.indexOf(product.brand) != -1
})



// var result = []

// product.forEach(function(item){
//     if(brands.indexOf(item.brand) != -1){
//         result.push(item)
//     }
// })


// console.log(result)

//filter => return a new array of those elements for which the given check has been passed.

var ages = [10, 20, 15, 21, 14, 11, 30]




var voters = ages.filter(function(age){
    return age>=18
    // if(age>=18){
    //     return true
    // }else{
    //     return false
    // }
})
console.log(voters)


var nums = [10, 20, 30, 40]
var result = nums.reduce(function(el1, el2){
    return el1+el2
})



var ind = products.findIndex(function(el){
    console.log(el)
    return el.brand == "mi"
})
console.log(ind)


var product = products.find(function(el){
    return el.brand == "mi"
})
console.log(product)


var voters = [21, 20, 19, 18, 10]

var ans = voters.every(function(el){
    return el >= 18
})

console.log(ans)


var ans = voters.some(function(el){
    return el >= 18
})

console.log(ans)