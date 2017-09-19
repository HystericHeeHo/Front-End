var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/emperor.jpg') {
      myImage.setAttribute ('src','images/p5emperor.png');
    } else {
      myImage.setAttribute ('src','images/emperor.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name:')
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to Learning about tarot arcanas,' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to Learning about tarot arcanas,' + storedName;
  }
  
  myButton.onclick = function() {
  setUserName();
}
