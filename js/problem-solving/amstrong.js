function getNumOfDigits(number) {
    var numberCount = 0
    while (number != 0) {
        var lastDigit = number % 10
        var number = parseInt(number / 10)        
        numberCount++
    }
    return numberCount
}


function power(a, b){
    var pow = 1
    for(var i=1; i<=b; i++){
        pow *= a;
    }
    return pow
}


var number = 153
var amsSum = 0
var cpyNumber = number

var numOfdigit = getNumOfDigits(number)

while(number != 0 ){
    var lastDigit = number%10
    var number = parseInt(number/10)     
    amsSum +=  power(lastDigit, numOfdigit)     
}

if(cpyNumber == amsSum){
    console.log("This is an Amstrong Number")
}else{
    console.log("This is not an Amstrong Number")
}





