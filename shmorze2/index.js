"use strict";




//main object EDIT HERE!!!
const sypher = ["ьь","Ьь","Ъ","ъ","ъъ", "ьЪ", "Ъь", "ь","ЪЪ", "ЪъЬ", "ЬъЬ", "Ъь", "Ьъъ", "Ььь","Ъъь", "ЬЬъ", "ЪЬъ", "ЬЬЬ", "ЪЪЪ", "ььь", "Ь", "ъъъ","ъЪ","ьЬ","ъЪь","ьЬъ","Е","ъЕ","е","ЬЕЪ","ьЕъ","ЪЕЪ", "ЪъЪ", "у"];
let sypherObject = {
    "а":"ьь",
    "б":"Ьь",
    "в":"Ъ",
    "г":"ъ",
    "д":"ъъ",
    "е":"ьЪ",
    "ё":"Ъь",
    "ж":"ь",
    "з":"ЪЪ",
    "и":"ЪъЬ",
    "й":"ЬъЬ",
    "к":"ЪьЫ",
    "л":"Ьъъ",
    "м":"Ььь",
    "н":"Ъъь",
    "о":"ЬЬъ",
    "п":"ЪЬъ",
    "р":"ЬЬЬ",
    "с":"ЪЪЪ",
    "т":"ььь",
    "у":"Ь",
    "ф":"ъъъ",
    "х":"ъЪ",
    "ц":"ьЬ",
    "ч":"ъЪь",
    "ш":"ьЬъ",
    "щ":"Е",
    "ь":"ъЕ",
    "ы":"ЪеЪ",
    "ъ":"е",
    "э":"ЬЕЪ",
    "ю":"ьЕъ",
    "я":"ЪъЪ",
    " ":"у",
}


//creating unsypher Object
let unsypherArray = Object.entries(sypherObject)
let unsypherObject = new Object;
//making unsypher Object
for (let i = 0; i < unsypherArray.length; i++) {
    unsypherObject[unsypherArray[i][1]] = unsypherArray[i][0];
}


//listener
let header = document.querySelector('.header');
let input = document.querySelector(".input");
let btnSypher = document.querySelector(".input-btn-sypher");
let btnUnsypher = document.querySelector(".input-btn-unsypher");
let frase = "";
input.addEventListener('change', () => {frase = input.value;});
btnSypher.addEventListener('click', () => { header.innerHTML = message; message = ""});
btnUnsypher.addEventListener('click', () => { header.innerHTML = message; message = ""});

let message = "";

//easter egg
// input.addEventListener('change', () => {
//     frase = input.value;
//     console.log(frase)
//     if (frase.toLowerCase() == "lag"){
//         alert("working!");
//     }
// }); 



const doSypher = function() {

for (let i = 0; i < frase.length; i++) {
    message += " " + sypherObject[frase[i]]
}
}

// doSypher();

const doUnsypher = function() {

let fraseArray = frase.split(" ");

for (let i = 0; i < fraseArray.length; i++) {
    message += unsypherObject[fraseArray[i]]
}
}
// doUnsypher();






