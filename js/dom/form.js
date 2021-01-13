$(function(){
    $('form').submit(function(e){
        e.preventDefault()
        var username = $('#username').val()
        if(username.length < 6){
         $('#username-err').text("Invalid username")
        }else{
            $('#username-err').text("")
        }
        
    })
})


//Regular Expression

