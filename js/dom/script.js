$(function(){
    var target = Math.floor(Math.random()*100)%51 + 10
    var score = 0
    var remainingChances = 10

    $('.target').text(target)
    $('.score').text(score)
    $('.remaining-chances').text(remainingChances)


    $('button').click(function(){
        var number = Math.floor(Math.random()*100)%6 + 1
        score += number
        remainingChances--

        $('img').attr('src', '../../dice/'+number+".png")

        $('.score').text(score)
        $('.remaining-chances').text(remainingChances)

        if(score >= target/2 ){
            $('.score').removeClass('text-danger')
            $('.score').addClass('text-success')
        }

        if(remainingChances == 0){
            if(score >= target){
                alert("you won")
            }else{
                alert("you lost game")
            }

        target = Math.floor(Math.random()*100)%51 + 10
        score = 0
        remainingChances = 10


        $('.target').text(target)
        $('.score').text(score)
        $('.remaining-chances').text(remainingChances)


        }

    })


})

