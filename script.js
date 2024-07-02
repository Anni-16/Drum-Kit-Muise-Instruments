var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keypress", function (event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;

        default:
            console.log(key);    
    }
}


function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);


    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}