// for
// while
// do-while


//Syntax:
// initialization
// condition
// inc/dec

// for(init; condition; inc/dec){

// }




// for(var i=0; i<3; i++){
//     for(var j=0; j<3; j++){
//         console.log(i, j)
//     }
// }




//WAP to print counting till 100.

// for(var i=1; i<=100; i++){
//     console.log(i)
// }



//WAP to print counting till given number
// var count = 500

// for(var i=1; i<=count; i++){
//     console.log(i)
// }



//Wap to print even number till 100

// for(var i=1; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }


//wap to print odd number in given range

// var start = 100
// var end = 1000

// for(var i=start; i<=end; i++){
//     if(i%2 != 0){
//         console.log(i)
//     }
// }



// wap to print table of given number
// var number = 5

// for(var i=1; i<=10; i++){
//     console.log(number*i)
// }




// for (var i = 1; i<=10; i++){
//     var str = ""
//     for(var j=1; j<=10; j++){
//         str += j+"x"+i+"="+(i*j)+"  " 
//     }
//     console.log(str)
// }



// while(condition){
//     //code
// }


// while(jaa){
//     Teri aankhon ki namkeen mastiyan
//     Teri hansi ki beparwaah gustakhiyaan
//     Teri zulfon ki leharaati angdaiyaan
//     Nahi bhoolunga main
// }


// while(alive){
//     eat()
//     sleep()   
// }

// let count = 1;
// while(count <= 10){
//     console.log(count)
//     count++
// }


// do{
//     //code
// }while(condition)



let count = 11

while(count <= 10){    
    console.log("From while", count)
    count++
}



do{
    console.log("From do while", count)
    count++
}while(count <= 10)


