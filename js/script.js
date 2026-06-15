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
//console.log(time);
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
const scores = [45, 56, 67, 67, 78];

// access array_name[index]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//45
console.log(scores[0]);
//56
console.log(scores[1]);

let
student_names=["omondi", "wafula", "kiprotich", "nyambane", "topian"];
//print out kiprotich on the console window
console.log(student_names[2]);

let governors = [
    [47, "Johnson Sakaja"],
    [1, "Abdullswamad Sherrif"],
    [21, "Irungu Kang'ata"]
];

//The governor of the county number 1 is Abdullswamad Sherrif
console.log("The governor of the county number", governors[1][0], "is ", governors[1][1]);

//map (perform an operation on each element)
let doubled = scores.map(x => x * 2); //multiply each score by 2 
console.log (doubled);

//properties
//The class has j students (student_names)
console.log("The class has ", student_names, length, "governors" );

//Kenya has b governors
console.log("Kenya has ",governors,length, "governors");

//for in
for (let index in scores){
    console.log(scores[index]);
}

//for of
for(let score of scores){
    console.log(score);
}

//forEach
scores.forEach(function(score){
    console.log("score: ", score);
});

const student = {
    name: "Alice",
    age: 20,
    passed: true,
    grade: 'A',
    "admission number": 183380,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addattendance: function(){
        this.attendance = this.attendance + 1;
    }
};

//accessing items
console.log('My name is ', 
    student.name, " from ",
    student["admission number"],
    "university"
);

//a method in the object
student.addattendance(); //add attendance by 1
console.log(student.attendance);//21

//array of objects
let bbit_2b= [
    {adm: 220407, name: "Blessing"},
    {adm: 192977, name: "Ryan"},
    {adm: 220024, name: "Ambrose"},
    {adm: 220941, name: "Neema"},
];

//Print out the names of all students in bbit 2b using a loop
bbit_2b_students.forEach(function(student){
    console.log(student.name);
});

//getting the keys of an object as an array
console.log(bbit_2b_students.keys().toArray())

//getting the values of an object as an array
console.log(bbit_2b_students.values().toArray())

//getting both keys and values of an object as an array
console.log(bbit_2b_students.entries().toArray())

//console.log(student.keys())
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));   

//DOM- Document Object Model
console.log(document);
console.log(document);

//Elements on our page (varaibles)
const heading = document.querySelector('h1');
console.log(heading);
const previewImage = document.querySelector('img');
console.log(previewImage);
const aboutSection = document.getElementById('about');
console.log(aboutSection);
const allSections = document.querySelectorAll('section');
console.log(allSections);
 const allSections = document.querySelectorAll('section');
console.log(allSections);
const allNavLinks = document.querySelectorAll('nav a');
console.log(allNavLinks);

let aboutParagraph = document.querySelector('#about p');

//change its text
aboutParagraph.textContent ="This text was changed!";
aboutParagraph.style.color = "red";