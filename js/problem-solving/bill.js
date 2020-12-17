var units = 175


var meter4 = 0 // 0
var meter3 = 0 // 25
var meter2 = 0 // 100
var meter1 = 0 //50 

if(units > 250){
    meter4 = units - 250   
    units = units - meter4     
}

if(units > 150){
    meter3 = units - 150
    units = units - meter3
}

if(units > 50 ){
    meter2 = units - 50
    units = units - meter2
}

meter1 = units

var billAmount = meter1 * 0.50 + meter2 * 0.75 + meter3*1.20 + meter4*1.50
var finalBillamount = billAmount + (billAmount*20)/100

console.log("INR", finalBillamount)


