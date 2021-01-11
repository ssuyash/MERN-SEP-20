$(function(){
  
$('body').on('dblclick', '.edit', function(){
    var text = $(this).text()
    console.log(text)
    $(this).html(`<input type="text" value="${text}">`)
})



})