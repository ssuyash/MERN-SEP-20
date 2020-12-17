var phy = 85
var chem = 100
var bio = 99
var math = 87
var comp = 100

var total = phy + chem + bio + math + comp

var per = (total * 100)/500
var grade = ''
if(per >= 90){
    grade = 'A'
}else if(per >= 80){
    grade = 'B'
}else if(per >=70){
    grade = 'C'
}else if(per >= 60){
    grade = 'D'
}else if(per >= 40){
    grade = 'E'
}else{
    grade = 'F'
}


console.log(per, grade)