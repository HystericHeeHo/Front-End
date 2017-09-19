var myButton = document.querySelector('button');
var myHeading = document.querySelectot('h1');
function setUserName = (){
    var myName = prompt('Please Enter Your Name:');
    localStorage.setItem('name', myName);
    if(!localStorage.getItem('name')) {
    setUserName();
} 
    else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Are you here to learn about tarot cards,' + storedName;
}