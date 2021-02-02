var numOf = document.querySelectorAll(".drum").length;

for(var i = 0; i<numOf; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var keya = this.innerHTML;
makeSound(keya);

});
}
document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
});


function makeSound(key){
  switch(key){
    case "w":
    var toma = new Audio("sounds/tom-1.mp3");
    toma.play();
    break;

    case "a":
    var tomb = new Audio("sounds/tom-2.mp3");
    tomb.play();
    break;

    case "s":
    var tomc = new Audio("sounds/tom-3.mp3");
    tomc.play();
    break;

    case "d":
    var tomd = new Audio("sounds/tom-4.mp3");
    tomd.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;



    default:
    console.log(key);
  }
}
