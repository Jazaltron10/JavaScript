
const myFunction = () => {
    document.body.style.backgroundColor = "deepSkyblue";
}

const returnfunc = () => {
    document.body.style.backgroundColor = "lime";
} 

const eagle = () => { 
    document.getElementById('myimg').src="eagle.png";   
    document.body.style.backgroundColor = "yellow"     
}

const hala = () => {
    document.getElementById('myimg').src="club.png";
    document.body.style.backgroundColor = "red"
}

const change = () => {
    document.getElementsByTagName('div')[0].style.backgroundColor = "DarkBlue";
}

const changeagain = () => {
    document.getElementsByTagName('div')[0].style.backgroundColor = "DarkRed";
}


const tag = () => {
    document.getElementsByTagName('span')[0].innerHTML = "incredible";
}
setTimeout(tag,500);