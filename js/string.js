//string : group of characters

var slogan = "I love my india"

var newStr = slogan.replace("i", "p")

console.log(slogan.toUpperCase())
console.log(slogan.toLocaleLowerCase())

console.log(slogan.substr(0, 5))
console.log(slogan.substring(5, 9))
//slogan.slice()
console.log(slogan.split('i'))


//console.log(newStr)


//Array.join(" ")

var slogan = "I love my india"
var splitted = slogan.split(" ")
var newStr = ""

console.log("spiltted : ",splitted)

for(var i=splitted.length-1; i>=0; i--){
    newStr += splitted[i]+" "
}


var str = "this is a brand new computer. this can perform various kind of graphical processes."
var countStr = "can"
var words = str.split(" ")
var count = 0
words.forEach(function(word){
    if(word == countStr ){
        count++
    }
})
console.log(count)


var name = "suyash"

function revStr(str){
    var revStr = ""
    var splitted = str.split('')
    for(var i=splitted.length-1; i>=0; i--){
        revStr += splitted[i]
    }

    return revStr
}

console.log(revStr("Alpna"))

var str = "I love my india"
var words = str.split(' ')
var finalStr = ""
words.forEach(function(word){
    var revWord =  revStr(word)
    finalStr += revWord+" "
})
// I evol ym aidni
console.log(finalStr)




