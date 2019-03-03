var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic2..jpg') 
      myImage.setAttribute ('src','images/pic6.jpg');
     else if(mySrc === 'images/pic6.jpg')
      myImage.setAttribute ('src','images/picc.jpg');
      else if(mySrc === 'images/picc.jpg')
      myImage.setAttribute ('src','images/picc1.jpg');
      else if(mySrc === 'images/picc1.jpg')
      myImage.setAttribute ('src','images/picc2.jpg');
      else if(mySrc === 'images/picc2.jpg')
      myImage.setAttribute ('src','images/picss.jpg');
      else if(mySrc === 'images/picss.jpg')
      myImage.setAttribute ('src','images/pix.jpg');
      else
      myImage.setAttribute ('src','images/pic2..jpg');
    }
    var myButton = document.getElementById('change');
    var myHeading = document.querySelector('p');
    
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Welcome to my profile, ' + storedName;
      }
    
    function setUserName() {
        var myName = prompt('Please enter your name');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my profile, ' + myName;
      }
     
      myButton.onclick = function() {
        setUserName();
      }
    
    