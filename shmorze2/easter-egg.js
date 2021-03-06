"use-strict"


let audio = new Audio();
audio.src = 'last-chance.mp3';
let solomonsTheme = new Audio();
solomonsTheme.src = "Solomons-Theme.mp3"
solomonsTheme.volume = 0.05


let easerEggInput = document.querySelector(".input");
input.addEventListener("change", () => {easerEggRun(input.value);});
const easerEggRun = function(value) {
    if(value == "/matrix") {
        easterEggBox.style.display = "block";
        audio.play();
    }
}
let easterEggBox = document.querySelector(".easter-egg");
let morpheusBox = document.querySelector(".morpheus-box");
let canvas = document.querySelector(".canvas");
let skipBtn = document.querySelector(".skip-btn")
const skip = function() {
    morpheusBox.style.display = "block";
    canvas.style.display = "none";
    skipBtn.style.display = "none";
    
}

let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let gendalf = document.querySelector(".gendalf");
const leave = function() {
    window.location.href=location.href;
}
blue.addEventListener("click", () => {easterEggBox.style.display = "none"; audio.pause(); easterEggBox.style.display = "none";})
red.addEventListener("click", () => {gendalf.style.display = "block"; audio.pause(); solomonsTheme.play();})