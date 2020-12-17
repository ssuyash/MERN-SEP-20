var number = 65421


var sum = 0

while(number != 0 ){
    var lastDigit = number%10
    var number = parseInt(number/10)    
    console.log(lastDigit)
    sum += lastDigit
}

console.log("Sum of digits of given number is : ", sum)