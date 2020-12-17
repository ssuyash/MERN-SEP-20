
function generateOtp(numOfDigit){
    var otp = ""
    for(var i=1; i<=numOfDigit; i++){
        var random = parseInt(Math.random()*10)
        otp = otp+random
    }
    return otp
}


var x = generateOtp(6)
console.log(x)