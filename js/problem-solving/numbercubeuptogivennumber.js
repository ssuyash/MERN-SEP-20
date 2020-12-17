function power(a, b){
    var pow = 1
    for(var i=1; i<=b; i++){
        pow *= a;
    }
    return pow;
}



var givenNumber = parseInt(prompt("Enter a number"))

for(var i=1; i<=givenNumber; i++){
    var po = power(i, 3)
    console.log(po)
}
