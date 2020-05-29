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
    "ч":"ЪУЪУъЪь",
    "ш":"ьЬъ",
    "щ":"Е",
    "ь":"ъЕ",
    "ы":"ЪеЪ",
    "ъ":"е",
    "э":"ЬЕЪ",
    "ю":"ьЕъ",
    "я":"ЪъЪ",
    " ":"у",
    "А":"ъЪьь",
    "Б":"ъЪЬь",
    "В":"ъЪЪ",
    "Г":"ъЪъ",
    "Д":"ъЪъъ",
    "Е":"ъЪьЪ",
    "Ё":"ъЪЪь",
    "Ж":"ъЪь",
    "З":"ъЪЪЪ",
    "И":"ъЪЪъЬ",
    "Й":"ъЪЬъЬ",
    "К":"ъЪЪьЫ",
    "Л":"ъЪЬъъ",
    "М":"ъЪЬьь",
    "Н":"ъЪЪъь",
    "О":"ъЪЬЬъ",
    "П":"ъЪЪЬъ",
    "Р":"ъЪЬЬЬ",
    "С":"ъЪуЪЪЪ",
    "Т":"ъЪььь",
    "У":"ъЪЬ",
    "Ф":"ъЪъъъ",
    "Х":"ъЪъЪ",
    "Ц":"ъЪьЬ",
    "Ч":"ъЪъЪь",
    "Ш":"ъЪьЬъ",
    "Щ":"ъЪЕ",
    "Ь":"ъЪъЕ",
    "Ы":"ъЪЪеЪ",
    "Ъ":"ъЪе",
    "Э":"ъЪЬЕЪ",
    "Ю":"ъЪьЕъ",
    "Я":"ъЪЪъЪ",
    "!":"ъЪъЬЪ",
    ".":"ъЪьЬЬ",
    ",":"ъЪъЬЪь",
    "?":"ъЪЬьЬъ",
    "@":"ъЪЬЕ",
    "+":"ъЪЬъЕ",
    "=":"ъЬЪЪеЪ",
    "/":"ъЪЬе",
    "$":"ъЬЪЬЕЪ",
    "#":"ъЪЬьЕъ",
    "-":"ъЪЬЪъЪ",
    "1":"ъЪЪЪЪ",
    "2":"ъЪЪЬЬ",
    "3":"ЪЪъЬЪь",
    "4":"ЪЪЬьЬъ",
    "5":"ЪЪЬЕ",
    "6":"ЪЪЬъЕ",
    "7":"ъЪЪЪеЪ",
    "8":"ъЪЪе",
    "9":"ъЪЪЬЕЪ",
    "0":"ъЪЪьььЕъ",
    "a":"ъЪЪьььььЕъ",
    "b":"ъЪььььЪьЕъ",
    "c":"ъЪЪЪьЪьЕъ",
    "d":"ъЪьььЪьЕъ",
    "e":"ъЪЪьЪЪЕъ",
    "f":"ЪЪъЪЪььЕъ",
    "g":"ъЪЪЪЪЪЪьЕъ",
    "h":"ъЪЪьЪЪЪЪЕъ",
    "k":"ъЪЪьъьЪЕъ",
    "l":"ъЪЪьУУЪЪЪЕъ",
    "m":"ъЪЪьЕъ",
    "n":"ъЪЪЪЪЪУУУьЕъ",
    "o":"ъЪъъЬЬЬЪьЕъ",
    "p":"ъЪЪЬЬЪЪьЕъ",
    "q":"ъЪьььЪЪЪЪЪЪьЕъ",
    "r":"ъЪЪьЪьЕъЪьЪ",
    "s":"ъЪььЪьЪЪьЕъ",
    "t":"ЪЪЪЪЪьььъЪЪьЕъ",
    "u":"ъЪЪЪЪЪььььЕъ",
    "v":"ъЪЪьЕЪЪьЪьЪьъ",
    "w":"ъЪуууЪьЪьЕъ",
    "x":"ъЪууУЪьЕъ",
    "y":"ъЪЪьЕУууъ",
    "z":"ъУууЪЪУьЕъ",
    "i":"ъЪЪьУУУуЕъ",
    "`":"ъЪЪууууьЕъ",
    "A":"УУъЪЪьььььЕъ",
    "B":"УУъЪььььЪьЕъ",
    "C":"УУъЪЪЪьЪьЕъ",
    "D":"УУъЪьььЪьЕъ",
    "E":"УУъЪЪьЪЪЕъ",
    "F":"УУЪЪъЪЪььЕъ",
    "G":"УУъЪЪЪЪЪЪьЕъ",
    "H":"УУъЪЪьЪЪЪЪЕъ",
    "K":"УУъЪЪьъьЪЕъ",
    "L":"УУъЪЪьУУЪЪЪЕъ",
    "M":"УУъЪЪьЕъ",
    "N":"УУъЪЪЪЪЪУУУьЕъ",
    "O":"УУъЪъъЬЬЬЪьЕъ",
    "P":"УУъЪЪЬЬЪЪьЕъ",
    "Q":"УУъЪьььЪЪЪЪЪЪьЕъ",
    "R":"УУъЪЪьЪьЕъЪьЪ",
    "S":"УУъЪььЪьЪЪьЕъ",
    "T":"УУЪЪЪЪЪьььъЪЪьЕъ",
    "U":"УУъЪЪЪЪЪььььЕъ",
    "V":"УУъЪЪьЕЪЪьЪьЪьъ",
    "W":"УУъЪуууЪьЪьЕъ",
    "X":"УУъЪууУЪьЕъ",
    "Y":"УУъЪЪьЕУууъ",
    "Z":"УУъУууЪЪУьЕъ",
    "I":"УУъЪЪьУУУуЕъ",
    "j":"УУъУУУуЕъ",
    "J":"УУъЪЪееееЕъ",
};


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
let btnCopy = document.querySelector(".copy-btn");
let i = document.querySelector(".copy-input");
let frase = "";
let message = "";
let convertedMessage = "";
let textToCopy ="";
let loadingScreen = document.querySelector('.welcome-to-matrix');
const notificationTetx = document.querySelector('.input-box__notification-text');

input.addEventListener('input', () => {frase = input.value; 
  if(input.value.length > 0) {
  notificationTetx.classList.add('input-box__notification-text__hide')
}
else {
  notificationTetx.classList.remove('input-box__notification-text__hide')
}
});
btnSypher.addEventListener('click', () => { header.textContent = formatString(convertedMessage);  i.value = textToCopy; convertedMessage = ""});
btnUnsypher.addEventListener('click', () => { header.textContent = formatString(convertedMessage); i.value = textToCopy; convertedMessage = ""});
btnCopy.addEventListener('click', () => {
    i.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
});

const showInstruction = function() {
  let counter = 0;
  const instructionText = 'Привет, хочешь познать тайны матрицы? На этом сайте можеш зашифровать своё послание или расшифровать полученное от друга';
  const wrtiteLetter = setInterval(()=> {
    if(!instructionText[counter]) clearInterval(wrtiteLetter)
    else {
    header.textContent += instructionText[counter];
    counter++;
    }
  },20)
}


window.addEventListener('load', () => {setTimeout(() => loadingScreen.style.display = 'none', 1000); showInstruction();}) 



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
  if(sypherObject[frase[i]] === undefined)
    convertedMessage += " " + frase[i];
  else
    convertedMessage += " " + sypherObject[frase[i]];
}
}

// doSypher();

const doUnsypher = function() {

let fraseArray = frase.split(" ");

for (let i = 0; i < fraseArray.length; i++) {
  if (unsypherObject[fraseArray[i]] === undefined) 
  convertedMessage += fraseArray[i];
  else
    convertedMessage += unsypherObject[fraseArray[i]];
}
}
// doUnsypher();



const formatString = function(message) {
  if (message.length > 3500) {
    textToCopy = message;
    let shortedArray = message.split("");
    shortedArray.splice(3000);
    let text = shortedArray.join("");
    return `${text}...`;
  } else {
    textToCopy = message;
    return message;
  }
};

