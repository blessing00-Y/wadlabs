let age = 20;
let name = "Blessing";
var course = "Computer Science";
const university = "Strathmore University";

//Redeclare.
var course = "Computer Science";
course = "Information Technology";

if (true) {
    let time = "11:30";
    var day ='4th';
    const year = 2026; 
}
console.log(time);
/**
 * A function that calculates the area of a rectangle
 * @param {int} height 
 * @param {int} width 
 * @return {int} area of the rectangle
 */
//function declaration
function calculateArea(height, width){
    if (height==null){
      console.log("height is missing!")  
    }
    else if (width==null){
        console.log("width is missing!")
    }else{
    let area=height*width;
    return area
    }
    //return value
    //console.log("function calculateArea")
    //alert("function called/executed")
}
//return a value is NOT printing out
//execution-called
calculateArea(20,5)//function call
console.log(calculateArea(20,5))//printing the return value of the function call
console.log(calculateArea(20))//printing the return value of the function call
console.log(calculateArea())//printing the return value of the function call

//function expression
const add=function(num1,num2){
    return num1+num2;
}
console.log(add(5,10))

//arrow function    
const multiply=(x,y)=>x*y;
console.log(multiply(5,10));