
//Create an array for all instruments.
var tambor = document.querySelectorAll(".drum");

//Add event listener to each instrument.
tambor.forEach((item) => {
    item.addEventListener("click", function () { 
        makeSound(this.innerHTML);
        
        //To highlight pressed key
        buttonAnimation(this.innerHTML);
    });
});

//Keyboard pressing
addEventListener("keydown", function(e){
    makeSound(e.key);

    //To highlight pressed key
    buttonAnimation(e.key);
});

//Play the sound related to each letter key.
function makeSound(key){
    
    switch (key) {
        case "w":
            var crash = new Audio ('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var bass = new Audio ('sounds/kick-bass.mp3');
            bass.play();
            break;
        case "s":
            var snare = new Audio ('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio ('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio ('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio ('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio ('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log("Not an instrument key")
            break;
    } 

}

var buttonAnimation = (currentKey) =>{
    //Select the buttom being pressed
    var active = document.querySelector("." + currentKey);
    
    //apply css pressed style to show pressed button
    active.classList.add("pressed");

    //timer to depress the button
    setTimeout(function (){
        active.classList.remove("pressed");
    }, 100);

}