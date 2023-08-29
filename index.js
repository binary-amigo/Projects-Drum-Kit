// Checking if the buttons were clicked

var noOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0;i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       
        var innerHTML = this.innerHTML;
        makeSound(innerHTML);
        buttonAnimation(innerHTML);
        
    });
}

//Checking if keyboard is used

document.addEventListener("keydown",function(event){
    makeSound(event.key);//event.key returns which key is pressed
    buttonAnimation(event.key);
});

//Function to make sound

function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
            break;
        case 'l':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(this.innerHTML)
            break;
    }
}

//Animations on clicks

function buttonAnimation(currentkey){
    
    var activeButton  = document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}