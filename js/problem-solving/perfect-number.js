var num = 496


var sumOfDivisibles = 0

for(var i = 1; i<=num/2; i++){
    if(num % i == 0){
        console.log(i)
        sumOfDivisibles += i
    }
}

if(sumOfDivisibles == num){
    console.log("it a perfect number")
}else{
    console.log("it is not a perfect number")
}