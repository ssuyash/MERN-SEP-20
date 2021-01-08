$(function(){
    $('#btn-save').click(function(e){
        e.preventDefault()
        var name = $("#name").val()
        var number = $("#number").val()
        var row = `<tr>
                     <td>${name}</td>
                     <td>${number}</td>        
                     <td>
                     <button class="del">-</button>
                     </td>  
                   </tr>`
        $("#data-table").append(row)
        $("#name").val("")
        $("#number").val("")
    })


    $("body").on( "click", ".del", function(){
        $(this).remove()
    })




})