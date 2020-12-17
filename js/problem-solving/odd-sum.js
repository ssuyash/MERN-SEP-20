var numOfOdds = 15;

var count = 0;
var i=0;
var sum = 0;

var oddStr = ""

while(count<numOfOdds){
    if(i%2 != 0){
        sum = sum+i;
        count++
        oddStr += i+" "
    }
    i++;
}
console.log("Odd numbers are : ", oddStr)
console.log("Sum of odd number is : ", sum)

