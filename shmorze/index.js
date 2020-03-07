"use strict";


const sypher = ["ьь","Ьь","Ъ","ъ","ъъ", "ьЪ", "Ъь", "ь","ЪЪ", "ЪъЬ", "ЬъЬ", "Ъь", "Ьъъ", "Ььь","Ъъь", "ЬЬъ", "ЪЬъ", "ЬЬЬ", "ЪЪЪ", "ььь", "Ь", "ъъъ","ъЪ","ьЬ","ъЪь","ьЬъ","Е","ъЕ","е","ЬЕЪ","ьЕъ","ЪЕЪ", "ЪъЪ", "у"];
const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'," "];
const numberOfLetter = [];
const syphredMessageArray = [];
let message;
let fraze = "ЪЬъ ЬЬЬ ЪъЬ Ъ ьЪ ььь у ьь Ъъь ъъ ЬЬЬ ьЪ ЬъЬ";

const doArrayOfNumbers = function(fraze, splitMode, usedArray) {
  let lettersOfFraze = fraze.split(splitMode);
  for (let i = 0; i < lettersOfFraze.length; i++) {
    for (let j = 0; j < usedArray.length; j++) {
      if (lettersOfFraze[i] == usedArray[j]) {
        numberOfLetter.push(j);
      }
    }
  }
  return numberOfLetter;
};

const createSypher = function(numberOfLetter, syphredMessageArray, usedArray) {
  for (let c = 0; c < numberOfLetter.length; c++) {
    syphredMessageArray.push(usedArray[numberOfLetter[c]]);
  }
  return syphredMessageArray;
};

const doSroke = function(syphredMessageArray, usedJoin) {
  message = syphredMessageArray.join(usedJoin);
  return message;
};

const toSypher = function() {
  doArrayOfNumbers(fraze, "", letters);
  createSypher(numberOfLetter, syphredMessageArray, sypher);
  doSroke(syphredMessageArray, " ");
};
// toSypher()

const toUnsypher = function() {
  doArrayOfNumbers(fraze, " ", sypher);
  createSypher(numberOfLetter, syphredMessageArray, letters);
  doSroke(syphredMessageArray, "");
};
toUnsypher();

console.log(message);
