var name = prompt("Please, enter your name!")
var welcome = document.getElementById("Welcome")
welcome.innerHTML = "Welcome " + name + "," + " Don't Forget to Smile!"
let myh1 = document.getElementById("text");

function changeText() {
  myh1.innerHTML = (myh1.innerHTML == "I want to be a host on The View") ? "I want to embarass politicians" : "I want to be a host on The View";
 }

 //Function to change Font Size to 24px from 20px
 function changeSize() {
   myh1.style.fontSize = (myh1.style.fontSize == "24px") ? "20px" : "24px"
 }
if (myh1){
  console.log("exist")
 myh1.addEventListener("mouseover", changeText);
 myh1.addEventListener("mouseleave", changeText);
}
 

//Hover over picture code
function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src =
    "https://media1.tenor.com/images/f70e66856f551d03c84bc17d3a7e7046/tenor.gif?itemid=13836198"
  }else{
    image.src = "https://media0.giphy.com/media/4VY7nytIjAthhTiJcf/giphy.gif"
  }
}



