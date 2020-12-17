var units = 175
var billAmount = 0

if(units > 250){
    var tmp = units - 250   
    billAmount = billAmount + tmp*1.50
    units = units - tmp
}

if(units > 150){
    var tmp = units - 150   
    billAmount = billAmount + tmp*1.20
    units = units - tmp
}

if(units > 50 ){
    var tmp = units - 50   
    billAmount = billAmount + tmp*0.75
    units = units - tmp
}

billAmount = billAmount + units*.50

var finalBillamount = billAmount + (billAmount*20)/100

console.log("INR", finalBillamount)



