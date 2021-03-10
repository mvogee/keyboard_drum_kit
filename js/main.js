function checkKey(e) {
    var drum;
    switch (e.keyCode) {
        case 87: // w
            drum = "crash";
            break;
        case 65: // a
            drum = "kick";
            break;
        case 83: // s
            drum = "snare";
            break;
        case 68: // d
            drum = "tom1";
            break;
        case 74: // j
            drum = "tom2";
            break;
        case 75: // k
            drum = "tom3";
            break;
        case 76: // l
            drum = "tom4";
            break;
        default:
            return "none";
    }
    return (drum);
}

function sounds(drum) {
    var sound;
    switch (drum) {
        case "crash":
            sound = new Audio("./sounds/crash.mp3");
            break;
        case "kick":
            sound = new Audio("./sounds/kick-bass.mp3");
            break;
        case "snare":
            sound = new Audio("./sounds/snare.mp3");
            break;
        case "tom1":
            sound = new Audio("./sounds/tom-1.mp3");
            break;
        case "tom2":
            sound = new Audio("./sounds/tom-2.mp3");
            break;
        case "tom3":
            sound = new Audio("./sounds/tom-3.mp3");
            break;
        case "tom4":
            sound = new Audio("./sounds/tom-4.mp3");
            break;
        default:
            console.log("no sound played");
            return ;
    }
    sound.play();
}

function animateBtn(btnClass) {
    var obj = document.querySelector("." + btnClass);
    console.log(obj);
    obj.classList.toggle("button-active");
    setTimeout(function() {
        obj.classList.toggle("button-active");
    }, 150);
}

function keyPressed(e) {
    e = e || window.event;
    var drumActivated = checkKey(e);
    if (drumActivated !== "none") {
        console.log(drumActivated);
        sounds(drumActivated);
        animateBtn(drumActivated);
    }
}

function clicked() {
    var drumActivated = this.classList[0];
    console.log(drumActivated);
    sounds(drumActivated);
    animateBtn(drumActivated);
}

function main() {
    var buttons = document.querySelectorAll("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", clicked);
    }
    document.onkeydown = keyPressed;
}

main();