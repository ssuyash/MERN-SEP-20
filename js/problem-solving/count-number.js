var number = 654


var numberCount = 0

while(number != 0 ){
    var lastDigit = number%10
    var number = parseInt(number/10)    
    console.log(lastDigit)
    numberCount++
}




console.log("number of digits", numberCount)