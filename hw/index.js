'use strict';

let check = false;
let img = document.querySelector('.img-rtx');
let input = document.querySelector('input');
let rtxLogo = document.querySelector('.rtx-logo');
if(!check) {img.src = './img/project red1.png'; rtxLogo.src = './img/off.png'}

input.addEventListener('change', () => {
if(!check) check = true
else check = false
if(check) {img.src = './img/project red.png'; rtxLogo.src = './img/on.png'}
else {img.src = './img/project red1.png'; rtxLogo.src = './img/off.png'}
});