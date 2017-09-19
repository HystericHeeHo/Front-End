var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/emperor.jpg') {
      myImage.setAttribute ('src','images/p5emperor.png');
    } else {
      myImage.setAttribute ('src','images/emperor.jpg');
    }
}