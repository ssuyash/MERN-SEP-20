$(function(){
    $('form').submit(function(e){
        var name = $('#username').val()
        var number = $('#number').val()
        var numberReg = /^[789]\d{9}$/
        var email = $('#email').val()
        var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var pass = $('#password').val()
        var passReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
        var add = $('#address').val()
        var addReg = /d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*/
        var masg = $('#massage').val()
        var edu = $('#edu').val()
        var age = $('#age').val()
        var ageReg = /\s[0-1]{1}[0-9]{0,2}/



        if(name == ""){
            $('#username-err').text('Invalid username')
            e.preventDefault()
        }else{
            $('#username-err').text('')
        }

        if(!numberReg.test(number)){
            $('#num-err').text('Invalid Number')
            e.preventDefault()
        }else{
            $('#num-err').text('')
        }

        if(!emailReg.test(email)){
            $('#email-err').text('Invalid email')
            e.preventDefault()
        }else{
            $('#email-err').text('')
        }

        if(!passReg.test(pass)){
            $('#pass-err').text("at least 8 characters 1 numeric, 1 lowercase,1 uppercase, 1 special character.")
        }else{
            $('#pass-err').text('')
        }

        if(!addReg.test(add)){
            $('#address-err').text("following address (253 N. Cherry St.)")
        }else{
            $('#address-err').text('')
        }
        
        if(masg.length<25){
            $('#masg-err').text("minimum 25 characters")
        }else{
            $('#masg-err').text('')
        }

        if(!edu== ''){
            $('#edu-err').text("one field select")
        }else{
            $('#edu-err').text('')
        }
        if(!ageReg.test(age)){
            $('#age-err').text("Only Number")
        }else{
            $('#age-err').text('')
        }ageReg
    })

    $('#check').click(function(){
        var check = $(this).is(':checked')
        if(check){
            $('#btn-submit').removeAttr('disabled')
        }else{
            $('#btn-submit').attr('disabled','disabled')
        }
    })


    $('.form-control').blur(function(){
        var name = $(this).val()
        
        if(name==''){
            $(this).removeClass("sus")
            $(this).addClass("err")
        }else{
            $(this).removeClass("err")
            $(this).addClass('sus')
        }
    })
})