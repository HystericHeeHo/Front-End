var myButton = document.querySelector('button');
var myHeading = document.querySelectot('h1');

function setUserName() {
  var myName = prompt('Please enter your name:')
  localStorage.setItem('name', myName);
  myHeading.textcontect = 'Welcome to Learning about tarot arcanas,' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textcontent = 'Welcome to Learning about tarot arcanas,' + storedName;
  }
  
  myButton.onclick = function() {
  setUserName();
}
