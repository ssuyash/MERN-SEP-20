//Object => entity which have peroperties and methods

//Object => variables which have data and function in form key and value


var person = {
    name:"Piyush",
    classTime:"MERN Sept 8-10",
    isPresent:true,
    display: function(){
        console.log("hi")
    }    
}

console.log(person.name)
person.display()
console.log(person)
console.log("%c this is special log", "background-color:red; font-size:30px")