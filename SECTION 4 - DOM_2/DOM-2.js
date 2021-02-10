// window.onload =()=>{
//     document.getElementsByTagName('body')[0].style.backgroundColor ="pink";
// }

//SECTION-2:SELECTING ELEMENTS 
//(a)-Finds Element By Id 
demo = () => {
    let elem = document.getElementById('demo');
    elem.innerHTML = "Great women";
}
setTimeout(demo,1500);

//(b)-finds Elements By ClassName(Returns Elements as an Array)
demo2 = () => {
    let elem = document.getElementsByClassName('demo2');
    elem[0].innerHTML = "Great Kangaroos";
}
setTimeout(demo2,2000);

//(c)-finds Elements By TagName(Returns Elements as an Array)
/*
Tagnaruc=()=>{
    let elem = document.getElementsByTagName('div');
    for(tom = 0; tom < elem.length; tom++){
        elem[tom].innerHTML = "Jan Rules Them ALL";
    }
}
setTimeout(Tagnaruc,2500);
*/
//(d)-Changing Elements Through the childNodes
childNodes = () => {
    let courage = document.getElementsByClassName("section-2");
    let classarray = courage[0].childNodes;
        for ( let x = 0; x < classarray.length; x++){
            classarray[x].innerHTML = "John cena";
        }
}
setTimeout(childNodes,3000);

//(e)-Changing the backgroundcolor, color and fontfamily of elements
background=()=>{
    let bg = document.getElementsByClassName('section-2');
    for(x = 0; x < bg.length; x++){
        bg[x].style.backgroundColor = 'deepskyblue';
        bg[x].style.color = 'red';
        bg[x].style.fontFamily = 'cursive';
        bg[x].style.borderRadius = '10px';
        bg[x].style.border = '2px groove gold';
        bg[x].style.textAlign = 'center';
    }
}
setTimeout(background,4000);










//SECTION-3:CHANGING ELEMENTS
//Changing Attributes and Style

//(a)-changing the src attribute of an image 
img = () => {
    let el = document.getElementsByClassName('imagine');
    el[1].src = 'pics/astro.jpg';
}
setTimeout(img,2000);
setInterval(img, 5000);


//(b)-changing the href attribute of a link
onmouseover = href = () => {
    let el = document.getElementsByTagName('a');
    el[0].href = "http://www.sololearn.com";
}

all = () => {
    let arr = document.getElementsByClassName("imagine");
    for(let x = 0; x <arr.length; x++){
        arr[x].src="pics/fortnite.jpg";
        arr[x].style.border="5px groove lime";
        arr[x].style.boxShadow="0px 0px 50px green";
    }
}
setTimeout(all,2500);










//SECTION-4:ADDING AND REMOVING ELEMENTS 
//(a)-Adding Elements
//window.onload  
 demofour=()=>{
    //creating a new paragraph
    let p = document.createElement('p');
    let node = document.createTextNode('This is a new text, You better believe it.');
    //adding the text to the paragraph
    p.appendChild(node);
    
    let div = document.getElementById('demo4');
    //adding the paragraph to the div
    div.appendChild(p);
};

demofive=()=>{
    //creating a new paragraph
    let p = document.createElement('p');
    let node = document.createTextNode('This is another text, OK');
    //adding the text to the paragraph
    p.appendChild(node);
    
    let div = document.getElementById('demo5');
    //adding the paragraph to the div
    div.appendChild(p);
};
setTimeout(demofive,2000);


ondblclick = list=()=>{
    let el = document.createElement('li');
    let txt = document.createTextNode('5');
    
    el.appendChild(txt);
    let ol = document.getElementsByTagName('ol');
    ol[0].appendChild(el);
};
//setTimeout(list,1000);



//(b)-Removing Elements

remove=()=>{
    let parent = document.getElementsByTagName('ol');
    let child = document.getElementsByTagName('li');
    //for(x = 0; x < child.length; x++){
        //parent[0].removeChild(child[x]);}     
        parent[0].removeChild(child[0]);
        // parent[0].removeChild(child[1]);
        // parent[0].removeChild(child[2]);
        // parent[0].removeChild(child[0]);
        // parent[0].removeChild(child[0]);
    };
setTimeout(remove,3000);


remove2 = () => {
    
    let par = document.getElementsByClassName('parent');
    let node = document.getElementsByClassName('child-1');
    par[0].removeChild(node[0]);

}
setTimeout(remove2,1000)



//(c)-Replacing Elements 

replace = () => {
    let p = document.createElement('p');
    let node = document.createTextNode('child 3');
    p.appendChild(node);

    let parent = document.getElementsByClassName('parent');
    let child = document.getElementsByClassName('child-2');
    parent[0].replaceChild(p, child[0]);
}
setTimeout(replace,1500);









//SECTION-5:CREATING ANIMATIONS 

clik = () => { 
var pos = 0;
var box = document.getElementById('box');

 const move = () => {


    if (pos>=150){
        clearInterval(t);
    } 
    else {
        pos++ ;
        box.style.left = pos + 'px';
    }
}
var t = setInterval(move,10);
};


klic = () => { 
    var pos = 190;
    var dot = document.getElementById('dot');
    
     const move = () => {
    
    
        if (pos<5){
            clearInterval(t);
        } 
        else {
            pos -= 5 ;
            dot.style.right = pos + 'px';//moves from left to right bcos of pos--
            //dot.style.top = pos + 'px';
            
           // dot.style.left = pos + 'px';
        }
    }
    var t = setInterval(move,10);
    };
    //setTimeout(klic,500);



//PROGRESS BAR ANIMATION 
bar = () => { 
        var width = 0;
        var barry = document.getElementById('bar');
        const move = () => {
            if (width == 100) {
                clearInterval(siri);
            }
            else {
                width++;
                barry.style.width = width + '%';//does the animation
                barry.innerHTML = width + '%'; //animates the text increasing
            }
        }
        var siri = setInterval(move,10); //calls the move funtion every 10 milliseconds 
    }
    
 k2 = () => { 
        var width = 100;
        var LEX = document.getElementById('bar-2');
        const move = () => {
            if (width == 0) {
                clearInterval(ALEXA);
            }
            else {
                width--;
                LEX.style.width = width + '%';
                LEX.innerHTML = width + '%';
            }
        }
        var ALEXA = setInterval(move,10); //calls the move funtion every 10 milliseconds 
    }











//SECTION-6:HANDLING EVENTS 
show = () => {
    alert("hi great one, i know it's tough but you got to keep on moving forward");
}
/*window.onload = showa = () => {
    let x = document.getElementById('demo-9');
     X = document.body.innerHTML = Date();
}
setInterval(showa, 1000);
//only works with windows.onload
*/

change = () => {
    let x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}
//Original-Method

unction = () => {
    let btn = document.getElementById("emo");
    
   myFunction = () => {
        alert(Math.random()*10);
        btn.removeEventListener("click", myFunction);
    }
    btn.addEventListener("click", myFunction);

}
setTimeout(unction,10)//This can be used instead of the window.onload

/*setInterval(unction,3000)-> this keeps calling the 
function therefore making the removeEventListener ineffective
*/



//Alternative-Method
altenction = () => {
    let btn = document.getElementById("emoticon");
    btn.addEventListener("click", myFunction);
    
    function myFunction () {
         alert(Math.random()*10);
         btn.removeEventListener("click", myFunction);
     }

 }
 setTimeout(altenction,10)



u = () => {

 let kt = document.getElementById("myBtn");
 kt.addEventListener("click", displayDate);

 function displayDate () {
  document.getElementById("eco").innerHTML = Date();
    }
    
}
setTimeout(u,10);



//THIS SHOWS HOW TO HANDLE MULTIPLE EVENTS FOR MULTIPLE ELEMENTS 
 Event = () => {

    let boxa = document.getElementsByClassName("boxa");
    let boxb = document.getElementsByClassName("boxb");
    let boxc = document.getElementsByClassName("boxc");
    let boxd = document.getElementsByClassName("boxd");
    
    boxa[0].addEventListener("click", displayDate );
    boxa[0].addEventListener("mouseover", disDate);
    boxb[0].addEventListener("click", displayDate );
    boxb[0].addEventListener("mouseover", disDate);

    boxc[0].addEventListener("click", displayDate );
    boxc[0].addEventListener("mouseover", disDate);
    boxd[0].addEventListener("click", displayDate );
    boxd[0].addEventListener("mouseover", disDate);
    
    function displayDate () {
     document.getElementsByTagName("P")[3].innerHTML = "ooooh great one";
     document.getElementsByTagName("P")[3].style.backgroundColor = "DeepSkyblue";
     document.getElementsByTagName("P")[3].style.color = "Yellow";
     boxa[0].removeEventListener("click", displayDate);
    }
    function disDate () {
        document.getElementsByTagName("P")[3].innerHTML = "I do Know you";  
        boxa[0].removeEventListener("mouseover", disDate);
        //document.getElementsByClassName("boxb")[0].style.visibility = "hidden"; 
        document.getElementsByClassName("boxb")[0].style.zIndex = "5";  
        boxb[0].removeEventListener("mouseover", disDate);
        document.getElementsByClassName("boxc")[0].style.borderRadius = 60 + "px";
        document.getElementsByClassName("boxc")[0].style.border =  "3px ridge blue";
        document.getElementsByClassName("boxd")[0].style.border = "3px groove yellow";
       }
    
   }
   setTimeout(Event,10);
   /*
   They all change at the same time because they
   all share the same function
    */



//CREATING AN IMAGE SLIDER 

var images = [
    "pics/boat.jpg", 
    "pics/jonsnow.jpg",
    "pics/pink.jpg",
    "pics/justice.jpg"
];
var num = 0;
next = () => {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
prev = () => {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
  



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}








//FORM VALIDATION 
function validate () {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");

    if (n1.value != " " && n2.value != " "){
        if(n1.value==n2value){
            alert("good job");
            return true;
            
        }
    }
    alert(`The values should be equal and not blank`);
    return false;
}
validate();














/*FAILED FOR LOOP ATTEMPT
function changeImage(){
var num = 0;
var images = [];
images[0]="pics/boat.jpg";
images[1]="pics/jonsnow.jpg";
images[2]="pics/pink.jpg";
images[3]="pics/justice.jpg";
 

next = () => {
    var slider = document.getElementById('slider');
    for(num = 0; num < images.length ; num++){
        slider.src = images[num];    
     }
    
    }
}
var myVar = setInterval(function(){ changeImage() }, 1000);
prev = () => {
    var slider = document.getElementById('slider');
    for(num = 0; num<0;num--){
    num = images.length-1;
 }
    slider.src = images[num];
}
*/




/*
var images = [];
images[0]="pics/boat.jpg";
images[1]="pics/jonsnow.jpg";
images[2]="pics/pink.jpg";
images[3]="pics/justice.jpg";

var i = 0;
setInterval(function next() {
    var slider = document.querySelector("#slider"); //Select the img element by ID
    slider.src = images[i++];
    if(i > images.length - 1)
        i = 0;
}, 1000); //Time in milliseconds
let val = setInterval(function next(){}, 1000) //example
clearInterval(val);
*/

