function getNumber(digit){
    var num = 0;
    for(var i=1; i<=digit; i++){
        num = num*10+9
    }

    return num
}




var terms = 5

var sum = 0

for(var i=1; i<=terms; i++){
    sum = sum+getNumber(i)
}

console.log(sum)