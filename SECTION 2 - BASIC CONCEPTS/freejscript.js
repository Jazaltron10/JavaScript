// Simple Example Showcasing the DateObject.
/*
const PrintTime = () => {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.body.innerHTML= hours + ":" + mins + ":" + secs;
}
setInterval(PrintTime,1000)
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);
*/

var mystring = " I am learning <br/>";
var masashi = "you better learn how to code in react Boy!";
document.write
alert(mystring + masashi);


//if statement
let num2 = 84;
let num3 = 430;
if (num2 > num3){
    //document.write
    alert("<br/> Javascript is kinda easy to learn");
}
else{
    document.write("what a time to be alive");
}


//Even and Odd numbers 

var num = prompt("please enter a number");
    if (num%2==0){
        alert(num + " is a fucking even number");
    }
    else if (num%2==1){
        alert(num + "is a fucking odd number");
    }
    else {
        alert( "what the fuck did you type bro, Please don't stress me with them decimals BRO!");
    }


//THIS THE SWITCH STATEMENT
 
    var month =  6 //prompt("please enter a number in integer format");
    switch(month){
        case 1:
            alert("January");
            break;
        case 2:
            alert("February");
            break;
        case 3:
            alert("March");
            break;
        case 4:
            alert("April");
            break;
        case 5:
            alert("May");
            break;
        case 6:
            alert("June");
            break;
        case 7:
            alert("July");
            break;
        case 8:
            alert("August");
            break;
        case 9:
            alert("September");
            break;
        case 10:
            alert("October");
            break;
        case 11:
            alert("November");
            break;
        case 12:
            alert("December");
            break;
        default:
            alert("this is not a month OOOH WISE ONE");    
        }
    


//THE FOR LOOP

for (i=1;i<=5;i++){
    document.write(i +"<br/>");
    for(k=1;k<=i;k++){
    document.write(k)
    }
    for(p=1;p<=i;p++){
        document.write(p)
    }
}
for (i=0;i<=10;i++){
    if (i==5){
        continue; //break;
    }
    document.write(i+"<br/>");
}
 


//Function Old style 
 
function JustSayHello(name){
    alert("Hey" + name);
}
JustSayHello("Nathan");   

 
 
 //New Method = Arrow Function

 const SayHello = (name,age) => {
        alert(`Hey ${name} You are ${age} Years old`);
    }
    SayHello("Jamie",26);
    name = prompt("Please enter your name");
    age = prompt("Now your age Moron");
    SayHello(name,age);



//Objects

let person = {
    name:"Cristiano",
    age:"35",
    Favcolor:"Lime",
    height:"187"
}
let gah = person.age;
let sah = person.name;
alert(sah +" "+ "is" +" "+ gah );
alert(sah.length);



//Object constructor
function human(name,age,color){
    this.name = name;
    this.age = age ;
    this.Favcolor = color;
}

let h1 = new human("Cristiano",35,"white");
let h2 = new human("Messi",33,"DeepSKyBlue");
let h3 = new human("Neymar",28,"Yellow");

document.write(h1.age);//outputs 35

function Animal(name,age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name;
    }
}
var a = new Animal("dog",2);
document.write(" "+a.name);
a.changeName("cat");
document.write(" "+a.name);



//Methods Gallore
function car (name,age){
    this.name = name;
    this.age = age;
    this.yearOfManufacture = ProductionYear;
    //it's not necessary to write the function's parentheses when assigning it to an object.
}
function ProductionYear(){
    return 2020 - this.age 
}
let c = new car ("Bugatti",20);
document.write("<br/>" + 
"This bugatti was manufactured in the year " 
+ c.yearOfManufacture())



//Array
var courses = new Array ("HTML","CSS","JS");
document.write(" " + courses[1]);
courses[1]="C++";
document.write("<br/>" + courses[1]);


//OTHERS WAYS OF CREATING ARRAYS
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";


//ARRAYS ARE DYNAMIC IN JS, 
//i.e YOU CAN DECLARE WITHOUT PASSING ANY ARGUMENTS
//YOU CAN THEN ADD THE ELEMENTS DYNAMICALLY
var courses = new Array();
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";


//ANOTHER WAY OF CREATING ARRAYS
//THIS IS CALLED THE ARRAY LITERAL SYNTAX
//THIS IS THE RECOMMENDED WAY TO DECLARE ARRAYS 
var courses = ["HTML","CSS","JS","JAVA"];
document.write(courses.length);
document.write("<br/>" + courses[1].length);


//COMBINING ARRAYS
//WE'LL BE USING CONCAT() METHOD 
var c1 = ["HTML","CSS"];
var c2 = ["JS","JAVA"];
var courses1 = c2.concat(c1);
var courses2 = c1.concat(c2);
document.write(courses1);
document.write("<br/>" + courses2);


//ASSOCIATIVE ARRAYS
var personA= []; //empty array
personA ["name"]="john";
personA["age"]=46;
document.write(personA["age"]);//outputs 46

//Now, the person is treated as an object, instead of being an array.
//The named indexes "name" and "age" become properties of the person object.



//THE MATH OBJECT 
document.write(Math.PI);

let number = Math.sqrt(16);
document.write(`<br/> The square root of 16 is ${number}`);

let x = Math.ceil(Math.random()*10);
document.write(`<br/> ${x}`)

let numO = prompt("Please Enter A Number In Integer Format");
let ans = Math.ceil(Math.sqrt(numO));
document.write(`<br/> The Square root of ${numO} is ${ans}`);


//THE DATE OBJECT
//The setinterval() method
const alertme =()=>{
    alert(`You can become a javascript God, I believe in you`);
}
//setInterval(alertme,500);
//clearInterval(alertme);



//The Date Object()
let d = new Date();
//d stores the current date and time 
document.write(d)


//Other ways to initialize dates are 

new Date(millisecond);
new Date(datestring);
new Date(year,month,day,hours,minutes,seconds,milliseconds);

//Fri Jan 02 1970 01:00:00 (milliseconds)
let d1 = new Date(86400000);
document.write(d1);
//Fri Jan 02 2015 10:42:00 (datestring)
let d2 = new Date("Jan 2, 2015 10:42:00");
document.write("<br/> "+d2);
//Tue Jun 10 1997 11:42:00 (Y,M,D,H,Min,Sec,ms)
let d3 = new Date(97,5,10,3,42,0,0);
document.write("<br/> "+ d3);


//The Date Methods
let dAGO = new Date();
let hours = dAGO.getHours();
//Hours is equal to the current hours 
document.write(hours);


const printTime = () => { 
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.body.innerHTML=`${hours}:${mins}:${secs}`
}
setInterval(printTime,1000);
