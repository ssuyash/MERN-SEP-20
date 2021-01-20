$(function(){
    $("#contactform").submit(function(e){
        e.preventDefault()
        var name = $("#name").val()
        var email =$("#email").val()
        var mobile = $("#mbl").val()
        var msg = $("#msg").val()

        console.log(name, email, mobile, msg)

        if(name == "" ){
            $("#err-name").text("Name must not be empty")
        }else{
            $("#err-name").text("")
        }


    })


    $("#name").blur(function(){
        var name = $(this).val()
        
        if(name == "" ){
            $(this).removeClass("scs")
            $(this).addClass("err")
        }else{
            $(this).removeClass("err")
            $(this).addClass("scs")
        }
    })
})