var name = prompt("Please, enter your name!")
var welcome = document.getElementById("Welcome")
welcome.innerHTML = "Welcome " + name + "," + " don't forget to smile!"
let myh1 = document.getElementById("text");

function changeText() {
  myh1.innerHTML = (myh1.innerHTML == "I want to be a host on The View") ? "I want to embarass politicians" : "I want to be a host on The View";
 }

 //Function to change Font Size to 24px from 20px
 function changeSize() {
   myh1.style.fontSize = (myh1.style.fontSize == "24px") ? "20px" : "24px"
 }

 myh1.addEventListener("mouseover", changeText);
 myh1.addEventListener("mouseleave", changeText);

//Hover over picture code
function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src =
    "https://photos.app.goo.gl/YPCYE8bTvy23rMmt9"
  }else{
    image.src =
    "https://photos.app.goo.gl/HwzfGy8isjPBrNU86"
  }
}



