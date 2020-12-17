function isPerfectNumber(num){
    var sumOfDivisibles = 0

    for(var i = 1; i<=num/2; i++){
        if(num % i == 0){
            //console.log(i)
            sumOfDivisibles += i
        }
    }
    
    if(sumOfDivisibles == num){
        return true
    }else{
        return false
    }
}


var range = 5000000

for(var i=1; i<=range; i++){
    var isPerfect = isPerfectNumber(i)
    if(isPerfect == true){
        console.log(i)
    }
}