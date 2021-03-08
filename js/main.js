var buttons = document.querySelectorAll("button");

function clicked() {
    sounds(this.classList[0]);
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clicked);
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 87: // w
            sounds("crash");
            break;
        case 65: // a

            sounds("kick");
            break;
        case 83: // s
            sounds("snare");
            break;
        case 68: // d
            sounds("tom1");
            break;
        case 74: // j
            sounds("tom2");
            break;
        case 75: // k
            sounds("tom3");
            break;
        case 76: // l
            sounds("tom4");
            break;
        default:
            return ;
    }
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
            return ;
    }
    sound.play();
}