$(function(){
    $('body').on('click', '.zoomin', function(){
        var prevFs = $('p').css('font-size')
        prevFs = parseInt(prevFs.replace('px', ''))
        var newFs = prevFs+2
        $('p').css('font-size', newFs+'px')
    })

    $('body').on('click', '.zoomout', function(){
        var prevFs = $('p').css('font-size')
        prevFs = parseInt(prevFs.replace('px', ''))
        var newFs = prevFs-2
        $('p').css('font-size', newFs+'px')
    })


    
})