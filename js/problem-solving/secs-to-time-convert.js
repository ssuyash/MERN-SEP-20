var givenSecs = 31536000;

var mins = Math.floor(givenSecs/60);
var remainingSec = givenSecs % 60;


var hrs = Math.floor(mins/60)
var remainingMin = mins%60;


var days = Math.floor(hrs/24)
var remainingHrs = hrs%24


var months = Math.floor(days/30)
var remaininDays = days%30


var years  =  Math.floor(months/12)
var reamainingMonths = months%12


console.log(years, reamainingMonths, remaininDays, remainingHrs, remainingMin, remainingSec)