// group of data


//how to make array

var students = ['aplna', 'bhavisya', 'piyush', 'nandanee', 'suyash']
//var students = new Array('aplna', 'bhavisya', 'piyush', 'nandanee')



//indexing >> starts from 0
console.log(students[1])


//prperties : 
//i) length >> returns length of given array
console.log(students.length)

students[4] = "kumar"

for(var i = 0; i < students.length; i++){
    console.log(students[i])
}




//create an array of number type elements and increase number by a given number
var numArray = [51, 12, 145, 25, 32, 85]
var number = 5

//logic
for(var i=0; i<numArray.length; i++){
    numArray[i] = numArray[i] + number
}


//console.log(numArray)// [56, 17, 150, 30, 37, 90]

for(var i=0; i<numArray.length; i++){     
    if(numArray[i] % 2 == 0){
        console.log(numArray[i], " is even")
    }else{
        console.log(numArray[i], " is odd ")
    }
}



//loop array object


//check number is prime or not 
// check number is amstrong
// calculate square of every number


//prime number =>  number which is only divisible by 1 or self

function isPrime(num){
    var prime = true
    for(var i=2; i<num; i++){
        if(num%i == 0){
            prime = false
            break
        }
    }
    return prime
}


var numArray = [51, 12, 145, 25, 32, 85, 29, 153]


for(var i=0; i<numArray.length; i++){
    var num = numArray[i]

    var isprime = isPrime(num)

    if(isprime == true){
        console.log(num, 'is a prime number')
    }else{
        console.log(num, 'is not a prime number')
    }
}


// amstrong number => if the sum of power of digit of number by the number of digit in that number is equal to number itself

//2) number of digits 
//3) digits of the number


function getNumOfDigits(number){
    var digits = 0
    while(number != 0){
        number = Math.floor(number/10)
        digits++
    }
    return digits
}




function isAmstrong(number){
    var numberCpy = number
    var numOfDigit = getNumOfDigits(number)
    var sum = 0    
    while(number != 0){
        var lstDigit = number%10;
        sum += Math.pow(lstDigit, numOfDigit)
        number = Math.floor(number/10)
    }

    if(numberCpy == sum){
        return true
    }else{
        return false
    }
    
}



for(var i=0; i<numArray.length; i++){
    var num = numArray[i]

    var isprime = isAmstrong(num)

    if(isprime == true){
        console.log(num, 'is a Amstrong number')
    }else{
        console.log(num, 'is not a Amstrong number')
    }
}



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


var arr = ["Alpna", 'Nandanee']
//var arr = new Array()

//1) insertion

console.log(arr)

//i) push => insert new element at the end of the array
//arr.push("Arpita")


//ii) unshift()
//arr.unshift("Arpita")

//2) deletion
//i) pop() => removes element form the end of the array
//arr.pop()

//ii) shift() => removes element from the start of the array
arr.shift()
console.log(arr)

