    
document.write(`<b><i>Hello J, you're a Champion, Keep pushing Forward<i><b`)
function vartest(){
    var x = 1 ;
    if (true){
        var x = 2 ;     //same variable 
        document.write(`<br>  ${x}  `);  //2
    }
    document.write(`<br>  ${x}  `);  //2
}
vartest();
function lettest(){
    let x = 1 ;
    if (true){
        let x = 2 ;     //different variable 
        document.write(`<br>  ${x}  `);  //2
    }
    document.write(`<br>  ${x}  `);  //1
}
lettest();


//LOOPS AND FUNCTIONS
let arr = [1,2,3,4,5,6,7,8,9,0];
for (let k = 0; k <arr.length; k++){
    console.log(arr[k]);
}

//ES6 for...in loop for object 
let obj = {peru:"a",chile:"b",bolivia:"c"};
    for(let g in obj){
        console.log(g);
    }// it returns the object property and not their values

//ES6 for...of loop for arrays and other iterable objects     
let list = ["abe","jake","caleb"];
    for(let val of list){
        console.log(val);
    }

//FUNCTIONS    
const add = (x,y) => {
    let sum = x + y;
    document.write(`<br/>This sum of ${x} and ${y} is ${sum}`)
}
add(2,3);//always remember to call a function after declaring it.


const x = () => document.write('<br> hi');
x();//again always remember to call a function after declaring it or else it won't be executed




//FOR EACH method 
//old way
var larry = [2,4,5,6,3,2,6];

larry.forEach(function (el) {
    console.log(el*2);
});


//ES6 new way
const barry =[2,35,5,6,7,4,3,2,];
    barry.forEach(v=>{
        console.log(v*2)
    })

//code to print odd numbers for an array 

var garry =[1,3,46,7,249,5,54,6,7,9,17,19,29];
    const PrintOdds = (garry) => {
        garry.forEach(el=>{
            if (el%2!=0)
            document.write(`<br/> <b>${el} is an ODD NUMBER<b>`);
        });
    }
    PrintOdds(garry);

//Default Parameters
const test = (a, b=3, c=42) => {
    return a + b + c;
}
document.write("<br>" + test(5));


//--------------------------------------------------------------------------------------------------------------------------


//ES6 OBJECTS 
let tree = {
    height:10,
    color:'green',
    grow (){
        this.height += 2;
    }
}
tree.grow();
console.log(tree.height);

//Duplicate Property Names 
let car = {
    speed:40,
    accelerate(){
        this.speed += 10;
    }
};
car.accelerate();
car.accelerate();
console.log(car.speed);

//computed property names
//syntax 1
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop]:'jack',
    [`user_${id}`]:`${mobile}`
};
console.log(user);


//syntax 2
var i = 0;
var a = {
    ['foo'+ ++i] : i,
    ['foo'+ ++i] : i,
    ['foo'+ ++i] : i
};
console.log(a);


//syntax 3
var param = 'size';
var config = {
    [param]:12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1) ] : 4
};
console.log(config);
//it is very useful when you need to create custom objects based on some variables 



//OBJECT.ASSIGN()
/*This allows us to create multiple sources into one target to create a single new object
->it is also useful for creating duplicates of existing objects*/
let person = {
    name : 'john',
    age : 18,
    sex : 'male'
};

let student = {
    name:'Bob',
    age: 20,
    xp:'2'
}
let newstudent = Object.assign({} , person , student);
console.log(newstudent);
/*here a new object is the target and two other existing objects are the sources.
->it's the ObjectProperty equivalent of concat for arrays */

/*NOTE: in Object.assign() the first parameter is the target object 
and it is denoted by {}, every other  parameter after the first is 
used as the source for the target */

//Creating Duplicate Objects 
//old way
let lion = {
    name:'jappy',
    age: 43
};
let newlion = lion // newlion references lion
newlion.name = 'Bobski';

console.log(lion.name);    //Bobski
console.log(newlion.name); //Bobski

//new improved method
//Using Object.assign to avoid this(i.e Mutations) 
let tiger = {
    name : 'richard parker',
    age : 92
};
let newtiger = Object.assign({},tiger);
newtiger.name = 'PI';

console.log(tiger.name);    //richard parker
console.log(newtiger.name); // PI


//A  new value can be assigned to an object property in the object.assign() statement
let beetle  = {
    name : 'onkilo',
    age : 98
};
let newbeetle = Object.assign({},beetle,{name:"lake superior"});

console.log(newbeetle);


//--------------------------------------------------------------------------------------------------------------------------



//ES6 DESTRUCTURING
/*This simply unpacks values from arrays, or properties from objects, into distinct variables*/
let noah = ['1','2','3','4'];
//console.log(noah[0]);
let [one, two , three, four ] = noah;

console.log(one); //outputs 1
/*To display 1 normally, one would use = console.log(noah[0])*/

console.log(two);//outputs 2
/*To display 2 normally, one would use = console.log(noah[1])*/

console.log(three);//outputs 3
/*To display 3 normally, one would use = console.log(noah[2])*/

console.log(four);//outputs 4
/*To display 4 normally, one would use = console.log(noah[3])*/
console.log("noah -> " + noah);


//syntax-2 = through a function
let linko = () => {
    return ['1','2','6','3','49'];
};
let [onesa, , , ,fouro] = linko();//the comma's matter, remove two and fouro becomes 6
console.log(fouro);

//it also simplifies assignment and swapping values 
   /* let a,b,c =4,d=8;
    [a, b = 6] = [2]; //a=2,b=6
    [c, d] = [d, c];  //c=8,d=4
*/
    let names = ['david','paul','bruce'];
    let [ann, fred, johniko] = names ; //these are variables 
    console.log(johniko); //outputs bruce;




//Object destructuring 
/*This simply unpacks values from arrays, or properties from objects, into distinct variables*/
let objika ={h:350, s:true};
let {h,s} = objika;

console.log (h); //350
/*To display 350 normally, one would use = console.log(objika.h)*/

console.log(s); //true
/*To display true normally, one would use = console.log(objika.s)*/


//assigning without declaration 
/*let aria,bernard;
({aria,bernard}={aria:'PLL', bernard:'Westworld'});
console.log(`${aria} & ${bernard}`);
*/
//alternative method
let {aria,bernard} = {aria:'PLL', bernard:'Westworld'};
console.log(`${aria} & ${bernard}`);




//an object can also be assigned new variable names 
var oil = {poe : 34, k : false};
var {poe:foo, s:bar} = oil;
//console.log(poe); //outputs Error
console.log("foo -> " + foo);

//let {aria,bernard} = {aria:'PLL', bernard:'Westworld'};
//let {aria:alita, bernard:cameron} = {aria,bernard}
//console.log(`${alita} & ${cameron}`);





//assigning default values to variables for undefined object values
let jigga = {dui : 42, name :'primo'};
let {dui = 900, age = 20} = jigga;

console.log(dui);// 42
console.log(age);// 20

const kiko = {onesies : 16 , twosies : 2};
let {onesies : first , twosies : second} = kiko;
//console.log(onesies);//outputs error
console.log(first);  //16
//print(first); -> prints the page 


//--------------------------------------------------------------------------------------------------------------------------



//REST AND SPREAD 
/* a.ES6 REST PARAMETERS 
-> '... variable' = Rest parameter while '...' = Spread Operator
-> old method checks if an array contains all the arguments passed */
function containsAll (laray) { 
    for (let k = 1 ; k <arguments.length; k++){
        let num = arguments[k];
        if (laray.indexOf(num) === -1){
            return false ;
        }
    }
    return true ;
}
let xaray = [2,4,6,7]
console.log(containsAll(xaray,2,7,6)); //true
console.log(containsAll(xaray,35,25,78)); //false 



function ontainsAll (laray) { 
    for (let k = 1 ; k <arguments.length; k++){
        let num = arguments[k];
        if (laray.includes(num))//=== -1
        {
            return true;
        }
    }
    return false;
}
let yeray = [2,4,6,7,3,5,6,4,3,2,78]
console.log(ontainsAll(yeray,89,98,78)); //true
console.log(ontainsAll(yeray,35,25)); //false 

/*with includes it only checks 
if one of the arguments is in the array 
or one of the array elements is an argument
if both the array and the argument have a 
similar element it returns true 
otherwise false 
*/

//new method
containsSome = (arthur, ...nums) => {
    for ( let loop of nums){
        if (arthur.indexOf(loop) === -1){
            return false;
        }
    }
    return true ;
} 
let melle = [4,5,7,8]
console.log(containsAll(melle,8,4,5)); //true
console.log(containsAll(melle,35,25,78)); //false 



magic = (...nums) => {
    let sum = 0;
    nums.filter(n=>n%2==0).map(el=>sum+=el);
    return sum;
}
console.log(magic(2,4,5,6,5,4,3,4,5,6,5,4,3));//30



//calculates the highest number 
function max (...numbero){
    let result = -Infinity;
    for (let loop of numbero){
        if(loop > result){
        result = loop
        }
    }
    return result;
}
let numbero = [3,4,5,7,-98,40,83,56]
let wick =  [5,4,6];
console.log(max(...numbero));//83
console.log(max(930,...numbero,280)); //930
console.log(max(...wick)); //6

//--------------------------------------------------------------------------------------------------------------------------

//b.SPREAD OPERATOR
//OLD WAY
function aaa  (w,x,y,z) {
    console.log(w+x+y+z);
}
let argisas =[ 1,2,3];
aaa.apply(null, argisas.concat(4));


//NEW WAY
const afunction = (w,x,y,z) => {
    console.log(w+x+y+z);
}
let args =[ 1,2,5];
afunction(...args,4);



var w = 20
var xcz = 22
var y = 25
var z = 27
var sum = w+xcz+y+z;
const aftion = (w,x,y,z) => {
   sum = console.log(w+xcz+y+z);
}
let arrows =[ 1,2,4];
aftion(...arrows,sum); 


let datefields = [1970,0,1];
let datea = new Date(... datefields);
console.log(datea);


/*NOTE:
Square bracket array notation similarly 
allows the triple-dot operator to
spread another array into the new array.
*/ 
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]



//SPREAD IN ARRAY LITERAL
//adding item in the middle of an array
var arraiz = ['one','two','five'];
arraiz.splice(2,0,'three');
arraiz.splice(3,0, 'four' );
console.log(arraiz);

//NOW DOING THIS WITH THE SPREAD OPERATOR
let newArraiz = ['Three','Four'];
let Arraiz = ['One','Two', ...newArraiz,'Five'];
console.log(newArraiz);
console.log(Arraiz);


//SPREAD IN OBJECT LITERALS
const obj1 = {foo:'bar', x:'42'};
const obj2 = {foo:'baz', y:'5'};
  
const clonedobj = {...obj1};
const mergedobj = {...obj1, ...obj2};
console.log(clonedobj);
console.log(mergedobj);


const obj3 = {foo:'barry', x:'800'};
const obj4 = {foo:'bazzy', y:'900'};
const merge = (...object)=>({...object});

let mergedobj1 = (obj3,obj4)
let mergedobj2 = ({},obj3,obj4)
console.log(mergedobj1);
console.log(mergedobj2);
/*NOTE: 
Shallow cloning or merging objects is possible 
with another operator called object.assign*/

let numika = [3,9,5,6];
let allika  =[1,2,...numika,7];
console.log(allika[3]);//9



//--------------------------------------------------------------------------------------------------------------------------



//ES6 CLASSES
//A. 
class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(5,5);
const poster = new Rectangle(2,3);
console.log(square);
console.log(poster);

//NAMED CLASS
var Square = class rectangle {
    constructor(height,width){
        this.height = height ;
        this.width = width ;
    }
};
console.log(Square)

//UNNAMED CLASS
var SquaRe = class {
    constructor(height,depth){
        this.height = height ;
        this.depth = depth ;
    }
};
//asid = prompt (SquaRe.height);
//console.log(asid)


//CLASS METHODS 
//PROTOTYPE METHOD
class FootballPitch {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    get area(){//here area is a getter
        return this.calcArea();
    }
    calcArea(){//here calcArea is a method 
        return this.height * this.width;
    }
}

const Marakana = new FootballPitch(120,55);
const Anfield = new FootballPitch(90,45);

console.log(`The Area of the Marakana stadium in brazil is ${Marakana.area} Square meter`);
console.log(`The Area of the Marakana stadium in liverpool is ${Anfield.area} Square meter`);

//STATIC METHOD
class point{
    constructor(x,y){
        this.x = x
        this.y = y 
    }
    static distance(a,b){
        const dx = a.x - b.x ;
        const dy = a.y - b.y ;
        return Math.hypot(dx,dy)//sqrt((dx*dx) + (dy*dy))
    }
}
const point_1 = new point(7,2);
const point_2 = new point(3,8);

console.log(point.distance(point_1,point_2));//7.211102550927979
/*NOTE:
The static distance method is called directly using the class name i.e point, 
without an object(like point_1 and  point_2)

The static method cannot be called through a class instance,i.e an object(point_1 and point_2)  

They are often used to create utility functions for an application
(from what i can tell here the objects are used as the arguments)
*/
class Cat {
    constructor(name,type,color) {
        this.name = name ;
        this.type = type;
        this.color = color;
        }
    speak(line) {
            //this.line = line;
            console.log(`The ${this.type} Cat says '${line}'`);
        }
    }
    
    let FurryCat = new Cat("","Domesticated","");
    let Lion = new Cat("Lion","Wild","brown");
    let Cheetah  = new Cat("","speedster","");

    FurryCat.speak('meowww');
    console.log(Lion);
    Cat.prototype.tail = "Long, and freaking strong"
    console.log(Lion.tail);
    Cat.prototype.speed = "speed: The Flash Level Of Speed"
    console.log(Cheetah.speed);
    //let kl = prompt(Cheetah.name,"Whats the name of this ungodly beast");
    //console.log(kl);
    console.log(Cheetah);
    
    let object = new class { getWord() { return "Hell0"; } };
    console.log(object.getWord());// → hello
/*Class declarations currently allow only methods—properties that hold functions—
to be added to the prototype. */

//INHERITANCE
class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    speak(){
        console.log(`${this.name} barks`);
    }
}

let dog = new Dog ('Rex');
dog.speak();




class CAR {
    constructor(name){
        this.name = name;
    }
    acceleration(){
        console.log(`${this.name} used to have an acceleration of at least 5secs in 0-60mph before the update`)
    }
}
class Tesla extends CAR {
    acceleration(){
        super.acceleration();
        console.log(`${this.name} now has an impressive acceleration of at least 1.9secs in 0-60mph after the update` )
    }
}
/*The super keyword is used to call a parent's methods
->in the code above the parents acceleration() method is called using the super keyword
*/
let ModelX = new Tesla ("P100d");
ModelX.acceleration();


/* 
If there is a constructor present in the subclass,
it needs to first call "super()" before using "this."
*/




class Human {
    constructor(name){
        this.name = name;
    }
}

class Learner extends Human {
    constructor(name,age){
        super(name);
        this.age = age;
    }
}

class Banker extends Learner {
    constructor(name,age,salary,company){
        super(name,age)
        this.salary = salary;
        this.company = company;
    }
}

class SecurityAnalyst extends Banker {
    constructor(name,age,salary,company,Level,Car,Bonus){
        super(name,age,salary,company)
        this.Level = Level;
        this.Car = Car;
        this.Bonus = Bonus;
    }
}

class Footballer extends Learner {
    constructor(name,age,salary,company){
        super(name,age)
        this.salary = salary;
        this.company = company;
    }
}

class SoftWareEngineer extends Learner {
    constructor(name,age,Base_salary,Bonus,company){
        super(name,age)
        this.Base_salary = Base_salary;
        this.Bonus = Bonus;
        this.company = company;
    }
}


let flapjack = new Learner("flapjack","22");
console.log(flapjack);


let Dimon = new Banker("Dimon","45","$1,000,000","JP MORGAN");
console.log(Dimon);


let Josh = new SecurityAnalyst("Josh","30","$250,000","Wells fargo","L5","Cybertruck","$30,000");
console.log(Josh);


let Neymar = new Footballer("Neymar","28","$1,100,000","PSG");
console.log(Neymar);


let Annie = new SoftWareEngineer("Annie","25","$250,000","$30,000","Google");
console.log(Annie);



//--------------------------------------------------------------------------------------------------------------------------




//ES6 MAPS AND SET 
//a. Maps
let map = new Map([['k1','v1'],['k2','v2']]);
console.log(map.size); //2


let GoogleMaps = new Map();
GoogleMaps.set("key-1","value-1")
.set("key-2","value-2")
.set("key-3","value-3")
.set("key-4","value-4")
.set("key-5","value-5");

console.log(GoogleMaps.get('key-1'));//v1
console.log(GoogleMaps.has('key-2'));//true
console.log(GoogleMaps.has('key-3'));//true

    for(let loop of GoogleMaps.entries())
    {
        console.log(loop[0] + " : " + loop[1]); //loop[0]=all_keys and loop[1]=all_values
    }
    for(let loop of GoogleMaps.keys())
    {
        console.log(loop);                      //Loop iterates over all the keys 
    }
    for(let loop of GoogleMaps.values())
    {
        console.log(loop);                      //Loop iterates over all the values 
    }
GoogleMaps.clear()                              //deletes all keys and values i.e deletes the map
console.log(GoogleMaps.has("key-1"));




const AppleMaps = new Map();
AppleMaps.set("one",1);
AppleMaps.set(2,"two");
AppleMaps.set("three",3);
AppleMaps.set(4,"four");

if (AppleMaps.has("two"))//Checks if AppleMaps has this (key)
{ 
    console.log("two");
}
else if (AppleMaps.has("1"))
{
    console.log("1");
}
else
{
    console.log(AppleMaps.get("three")); // 3
}





//b.ES6 SETS
let set = new Set([1,2,4,36,2,56,4,3,2,78,89,5]);
console.log(set.size); // 9

let AppleSet = new Set();
AppleSet.add(23).add(3).add('44').add(93) //.add() adds new element to a set
.add("jamie dimon is smart")
.add(26).add(52).add(33).add(86)
.add(59).add(109).add(786).add(306);

console.log(AppleSet.has(9)); //Checks if the set has the value(9) in it : false 
console.log(AppleSet.has('44')); //true
console.log(AppleSet.has(786)); //true

for (let loop of AppleSet.values()) //Returns an iterator of values in the set
{
    console.log(loop);
}

const uniork = new Set();
uniork.add(1).add('b').add(3).add('d').add(5).add('f');
for (let loop of uniork.values())
{
    console.log(loop);
}

//--------------------------------------------------------------------------------------------------------------------------


//9
//a. PROMISES
setTimeout(
     tion = () =>
    {
    console.log("work 1");
    setTimeout( tiona = () => {
        console.log("work 2");
    },1000)
},1000);
console.log("end");//prints end, work 1, then work 2.




/* 
new Promise (function (resolve,reject){
    //work
    if (success)
        resolve (result);
    else
        reject(Error("Failure"));    
});

asyncfunc = (work) => {
new Promise (function (resolve,reject){
    //work
    if (work === " ")//success
        reject(Error("Nothing"));
        setTimeout(function(){
            resolve(work);
        },1000);    
});
}

asyncfunc("work 1")// Task 1
.then(function (result)
{
    console.log(result);
    return asyncfunc("work 2");//Task 2
}(function(error){
    console.log(error);})
.then(function(result)
{
    console.log(result);
}
(function(error)
{
    console.logo(error);
})))

*/




function foo () {
    return new Promise((resolve, reject)=>{
        let result = getSomeResult();
        if (result)
            resolve('success');
        else
        reject ("Something went wrong");
    });
}

console.log(foo)


//--------------------------------------------------------------------------------------------------------------------------



//ITERATORS AND GENERATORS 
let myIterableObj = {
    [Symbol.iterator]:function*()
        {
            yield 1; yield 2; yield 3;
        }
    }
    console.log([...myIterableObj]);

    
    
    
    function* idMaker(){
        let index = 0;
        while (index < 5){
           yield index++;
        }
    }
    var gen = idMaker();
    console.log(gen.next().value);


    
    
    
    const trojan = ['0','1','4','a','9','c','16','u','z'];
    const my_obj = {
        [Symbol.iterator]: function*(){
            for (let index of trojan ){
                yield`${index}`
            }
        }
    };

    const AllOf = [...my_obj]   //(9) ["0", "1", "4", "a", "9", "c", "16", "u", "z"]
    .map(i=> parseInt(i,10))    //(9) [0, 1, 4, NaN, 9, NaN, 16, NaN, NaN]
    .map(Math.sqrt)             //(9) [0, 1, 2, NaN, 3, NaN, 4, NaN, NaN]
    .filter((i)=> i<5)          //(5) [0, 1, 2, 3, 4]
    .reduce((i,d)=> i+d);       //10
    console.log(AllOf);

//--------------------------------------------------------------------------------------------------------------------------


//C.MODULES 
/*
 //lib/math.js
export let Sum = (x,y) => {return x+y;}
export let pi = 3.14;
    
//app.js
import* as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi,math.pi)}`)
    
To import from "util/calc.js"
export const hit = (x,y,z) =>{
    return x*y+z/2;
}

export const degree = 50;
import * as calc from "util/calc";
calc.hit(1,2,calc.degree);
*/
    
     
//--------------------------------------------------------------------------------------------------------------------------

     

//D.BUILT IN METHODS
//1.ARRAY ELEMENT FINDING
//Finding the first element of the array -> old way
     console.log( [98,5,1,8,2].filter(funtion = (x) =>
     {
         return x > 3
     })[0]
    )
//Finding the first element of the array -> new way
    console.log([65,5,3,2,4,5].find(x=> x > 3));
    console.log([1,2,2,3,4,3,3,4].find(x=> x > 3));
//getting the indexOf
    console.log([3,5,3,2,4,5].findIndex(x=> x > 0));



//2.REPEATING STRINGS
//old way
console.log(Array(3+1).join("foo"));
//new wAY
console.log("GREAT ".repeat(3));


//--------------------------------------------------------------------------------------------------------------------------


//3.SEARCHING STRINGS
//before ES6 we only used the indexOf() method to find the position of the text in the string.
//old way
console.log("sololearn".indexOf("solo")===0);
console.log("sololearn".indexOf("solo")===(4 - "solo".length));
console.log("sololearn".indexOf("lole")!==-1);
console.log("sololearn".indexOf("olo",1)!==-1);
console.log("sololearn".indexOf("olo",2)!==-1);


//new wAY
console.log("sololearn".startsWith("solo",0));
console.log("sololearn".endsWith("solo", 4));
console.log("sololearn".includes("lole"));
console.log("sololearn".includes("olo",1));
console.log("sololearn".includes("olo",2));
console.log("sololearn".includes("olol",1));
console.log("sololearn".startsWith("earn",5));
console.log("sololearn".endsWith("learn", 9));



//SUMMARY SYNTAX
//1.
let myMap = new Map();
myMap.set('zero',0);
myMap.set('one',1);
     for(let[key, value] of myMap){
         console.log(`${key} = ${value}`);
     }
     // Alternative Method
     for (let loop of myMap.entries()){
         console.log(`${loop[0]} : ${loop[1]}`)
     }


//2.
const maray_1 = [1,2,3];
const maray_2 =[5,6,7,8];
let maray_3 = [...maray_1, 4, ...maray_2];
console.log(maray_3);//(8) [1, 2, 3, 4, 5, 6, 7, 8]


//3.
const likay_1 = [[1,2,3,4,3,2,1,1,3,3,5],[1,2,3,4,53,43,32,22,24,6,7,7,],[1,2,3,4,5,43,43]];
const likay_2 = [...likay_1[1], 6, 7, 8];
const likon = (...rest) => {
    console.log(rest.length);
}
likon (...likay_1[0]);//11
likon (...likay_1[1]);//12
likon (...likay_1[2]);//7
likon (...likay_2);//15



//4.
sqre = nemo => nemo*nemo;
console.log(sqre(6) + 6);//42


//5.
const looser =
{
    name: 'David',
    age:24,
    id:1234
};
let newlooser = Object.assign({},{name, _ } = looser,{id:9999});
console.log(newlooser);
//--------------------------------------------------------------------------------------------------------------------------