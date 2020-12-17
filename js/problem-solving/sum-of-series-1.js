function power(a, b){
    var pow = 1
    for(var i=1; i<=b; i++){
        pow *= a;
    }    
    return pow
}


function fact(num){
    if (num == 0){
        return 1
    }

    var factorial = 1
    for(var i=1; i<=num; i++){
        factorial*=i;
    }
    return factorial
}


var numOfSeries = 5
var x = 3
var sumOfSeries = 0;

for(var i=0; i<numOfSeries; i++){
    sumOfSeries+= power(x, i)/fact(i)
}

console.log(sumOfSeries)
