var celsius  = 100;  

//Using operators to convert from Celsius to Fahrenheit
//To convert temperatures in degrees Celsius to Fahrenheit, 
//multiply the variable celsius by 1.8 (or 9/5) and add 32.
var fahrenheit = (celsius * 1.8) + 32;  

var message = celsius +' C is ' + fahrenheit + ' F.';  
console.log(message);

//To convert temperatures in degrees Fahrenheit to Celsius, 
//subtract 32 and multiply by .5556 (or 5/9).
// And back to Celsius to validate the answer
var fahrenheitToCelsius =  (fahrenheit - 32)*.5556;  

message = fahrenheit +' F is ' + fahrenheitToCelsius + ' C.';  

console.log(message); 






var colors = new Array();
colors[0] = "orange";
colors[1] = "blue";
colors[2] = "red";
colors[3] = "brown";
console.log("Blue: "+ colors[1]);

//fill in the blanks to push purple to the array and access it
//Note: it will be added at the end of the array
colors.push("purple");
console.log("Purple: "+ colors[4]); 










var students = ['james', 'maya', 'floyd'];

console.log("Length of original students array: " + students.length); 
//Prints the length of array 'students'

students.push('karen'); 
//Add a new element(name) at the end of the array

console.log("Length of students array after adding an element: "
            + students.length); 
//Prints the length of array 'students'

students.pop();//Remove element at the end of the array
console.log(students);

//Reverse the order of elements in the array
students.reverse();
console.log(students);

//Sort the elements of this array
students.sort(); 
console.log(students); 



//fill in your firstname and surname here
var firstname = "Jasper";
var surname = "Neutron";

//complete this function so that it takes two parameters and returns your full name
function name(firstname, surname)
{
	return firstname + surname;
}

//call the function 
var fullName = name(firstname,surname);

//this prints your full name
console.log("Your full name is: " + fullName); 
 





//complicated and fucked up for loop 
var numRows = 10;

//Printing the 'numRows' rows
for(var currentRow = 1 ; currentRow <= numRows ; currentRow++){
    // * is appended to the variable stars for every iteration
    var stars = "";
    
    //The number of stars in each row is same the row number
    for(var numStars = 1 ; numStars <= currentRow ; numStars++) {
        stars = stars + '*';
    }
    
    //to print new line
    console.log(stars);
} 



//This is the while loop solution 


//initialize currentNum with zero
var currentNum = 0;
var maxNum = 20;

//Even number between 0 and maxNum to be printed
while (currentNum <= maxNum) {
     //If the reminder of 'i/2' is zero, then its even
     if(currentNum%2 == 0) {
     console.log(currentNum);
     }
     //Increment the value of currentNum
     currentNum++;
} 





