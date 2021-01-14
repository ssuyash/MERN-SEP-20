$(function () {
    $('form').submit(function (e) {
        var username = $('#username').val()
        var email = $("#email").val()
        var emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (username.length < 6) {
            $('#username-err').text("Invalid username")
            e.preventDefault()
        } else {
            $('#username-err').text("")
        }


        if (!emailReg.test(email)) {
            $('#email-err').text("Invalid email")
            e.preventDefault()
        } else {
            $('#email-err').text("")
        }
    })


    $("#check").change(function(){
        var ischeck = $(this).is(':checked')
        if(ischeck){
            $("#btn-submit").removeAttr('disabled')
        }else{
            $("#btn-submit").attr('disabled', 'disabled')
        }
    })

    
})


//Regular Expression

