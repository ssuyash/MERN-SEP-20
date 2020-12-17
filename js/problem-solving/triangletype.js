var a = 3
var b = 3
var c = 4


if(a+b > c && b+c > a && c+a> b){

    if( (a==b && a==c) || (b==a && b== c) || (c==a && c==b) ) {
        console.log('equilateral Triang')
    }else if(a==b || a==c || b==c){
        console.log("isosclese")
    }else{
        console.log('scalen')
    }

}else{
    console.log("invalid sides")
}

