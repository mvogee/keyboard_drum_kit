var buttons = document.querySelectorAll("button");
var crashbtn = document.querySelector(".crash");
var kickbtn = document.querySelector(".kick");
var snarebtn = document.querySelector(".snare");
var tom1btn = document.querySelector(".tom1");
var tom2btn = document.querySelector(".tom2");
var tom3btn = document.querySelector(".tom3");
var tom4btn = document.querySelector(".tom4");

crashbtn.onclick = function() {
    sounds("crash");
}
kickbtn.onclick = function() {
    sounds("kick");
}
snarebtn.onclick = function() {
    sounds("snare");
}
tom1btn.onclick = function() {
    sounds("tom1");
}
tom2btn.onclick = function() {
    sounds("tom2");
}
tom3btn.onclick = function() {
    sounds("tom3");
}
tom4btn.onclick = function() {
    sounds("tom4");
}


document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 87: // w
            crashbtn.classList.toggle("button-active");
            sounds("crash");
            break;
        case 65: // a
            kickbtn.classList.add("button-active");
            sounds("kick");
            break;
        case 83: // s
            snarebtn.classList.add("button-active");
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