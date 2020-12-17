
var score = 0

for(var i=1; i<=10; i++){
    var number = Math.floor(Math.random()*100)
    var option1 = Math.floor(Math.random()*100)
    var option2 = Math.floor(Math.random()*100)
    var option3 = Math.floor(Math.random()*100)
    
    
    var userInp = parseInt(prompt("Guess the right number "+number+" "+option1+" "+option2+" "+option3))
    
    
    if(userInp == number){
        score++
    }
}

alert(score)



