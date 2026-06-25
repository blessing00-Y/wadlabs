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
bbit_2b.forEach(function(student){
    console.log(student.name); 
});

//getting the keys of an object as an array
console.log(Object.keys(bbit_2b[0]));
//getting the values of an object as an array
console.log(Object.values(bbit_2b[0]));

//getting both keys and values of an object as an array
console.log(Object.entries(bbit_2b[0]));

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
const allNavLinks = document.querySelectorAll('nav a');
console.log(allNavLinks);  

let aboutParagraph = document.querySelector('#about p');

//change its text
aboutParagraph.textContent ="This text was changed!";
aboutParagraph.style.color = "red";

//setting/setter - updating the page from js

//via the DOM 
previewImage.setAttribute("title", "New Title of Image");
previewImage.setAttribute("alt", "New alternate text for the image");
console.log(previewImage.alt);
console.log(previewImage.title);

//Event handling - Events (user events - click, key events, scroll)

//get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document.querySelector("#changeTextBtn");
let demoText = document.querySelector("#demoText");
changeTextBtn.addEventListener("click", function(event){
    console.log("someone clicked me");
    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange";
    demoText.style.fontSize = "16px";
});

//use case 2 
let highlightSectionBtn = document.querySelector("#highlightSectionBtn");
highlightSectionBtn.addEventListener("click", function(event){
    document.querySelectorAll("section").classList.toggle("section-highlight"); 
 
    //highlight all the sections
    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
        
    });
});

//get the textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input", 
    function(event){
        document.querySelector("#nameOutput").textContent = "Hello " + document.querySelector("#nameInput").value + "!"; 
    });

//case 4  - character counter
let gtaCommentTextArea = document.querySelector("#commentInput");
let charCountParagraph = document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
    //code goes here a.k.a what will be executed when the event happens
    //console.log("typing...");

    let numberOfChars = gtaCommentTextArea.value.length;
    //update the paragraph
    charCountParagraph.textContent = "Characters: "+numberOfChars;

    //prevent the user from typing after 60
    if(numberOfChars > 60){
        e.preventDefault();
    } else{
        //update the paragraph
        charCountParagraph.textContent = "Characters: "+numberOfChars;
    }
});  

//case 5 - keyboard events
let keyOutput = document.querySelector("#keyOutput");
document.addEventListener("keydown", function(event){
    //updating the paragraph
    keyOutputParagraph.textContent = "You pressed: "+event.key;

});

//case 6 - todo list, wish list
let wishListInput = document.querySelector("#wishListInput");
let wishListButton = document.querySelector("#wishListForm button");

//<ul> </ul>
let wishListItems = document.querySelector("#wishListItems");
wishListButton.addEventListener("click", function(event){
    event.preventDefault(); //prevent the form from submitting and refreshing the page

    //get the value from the input
    let wishListInputValue = wishListInput.value;
    console.log(wishListInputValue);

    //update the list of the wishListInputValue !=null
    if (wishListInputValue !=""){
        //console.log(wishListInputValue); 
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Delete";
        li.textContent = wishListInputValue;
        
        li.appendChild(button);

        //we append the list to the Ul
        wishListItems.appendChild(li);

        //finally we clear what the user typed in the input field
        wishListInput.value = "";
    }
});

//cas 6b-removing items from the wish list
let deleteButtons = document.querySelectorAll("#wishlistItems button");
console.log(deleteButtons);

//iterate a.k.a loop through the buttons
deleteButtons.forEach(button=>{
    button.addEventListener("click", event=>{
        //console.log("delete button clicked");  
        //how do you get the first list item in an unordered list
        //given that the ul has an id of #wishlistItems
        //let first_li = document.querySelector("#wishlistItems li");
        //first_li.remove();

        //TODO, how do you use the parent, parentElement
        button.closest("li").remove();

    }) 
});

//case 7 - submit form / validation
//show what someone filled in the form
let submitButton = document.querySelector("#feedbackForm button");
let feedbackForm = document.querySelector("#feedbackForm");
let feedbackOutput = document.querySelector("#feedbackOutput");//div
feedbackForm.addEventListener("submit", event=>{
    //prevent the form from being submitted normally
    event.preventDefault();
    //console.log("submit button clicked");
    const name = document.querySelector("#fanName").value;//name 
    const email = document.querySelector("#fanEmail").value;//email 
    const message = document.querySelector("#fanMessage").value;//message, textarea

    feedbackOutput.innerHTML = 
    "<strong> Fan Feedack Submitted </strong><br>" +
    "<p>Name: " + name + "</p>" +
    "<p>Email: " + email + "</p>" +
    "<p>Message: " + message + "</p>";

    //clear the form fields
    name.value = "";
    email.value = "";
    message.value = "";

    //add success styles
    feedbackOutput.classList.add('success-text');

});   

let resetBtn = document.querySelector("#resetBtn");
//undo the changed text
demoText.textContent=
"Click the button to modify this text using JavaScript.";
demoText.style.color="black";
demoText.style.fontSize="14px";//has no effect 

//undo the highlight of the sections 

 document.querySelectorAll("section").forEach(section=>{
    //section.classList.toggle("section-highlight");
    section.classList.toggle("section-highlight");
});
