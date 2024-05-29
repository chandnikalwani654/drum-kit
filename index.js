var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //button click handling
        var butttonInnerHTML=this.textContent;
        makeSound(butttonInnerHTML);
        buttonAnimation(butttonInnerHTML);
        });

}
//keyboard key press handling
document.addEventListener("keypress",function(event){
     makeSound(event.key);
     buttonAnimation(event.key);
});
function makeSound(key)
{
    switch(key)
        {
            case "w":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default:break;
        }
}
//adding animation to the buttons
function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");//iske baad vaas animation khatm nahi hota (shadow rehti hi h) isiliye neeche ka karte h 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100) //0.1 second
}

