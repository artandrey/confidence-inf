'use strict';

const textInput = document.querySelector('#txt');
const left = document.querySelector('#L');
const rigth = document.querySelector('#R');
const button = document.querySelector('#send');
const result = document.querySelector('h2');
let text = '';
const rigthNotesObj = {
    c : 'w1',
    d : 'w2', 
    e : 'w3', 
    f : 'w4', 
    g : 'w5',
    a : 'w6', 
    b : 'w7',
    C : 'b1',
    D : 'b2',
    F : 'b3',
    G : 'b4',
    A : 'b5',
}
const leftNotesObj = {
    c : 'w8',
    d : 'w9', 
    e : 'w10', 
    f : 'w11', 
    g : 'w12',
    a : 'w13', 
    b : 'w14',
    C : 'b6',
    D : 'b7',
    F : 'b8',
    G : 'b9',
    A : 'b10',
}




textInput.addEventListener('change', ()=> {
    text = event.target.value;
});




left.addEventListener('change', ()=> {
    if(event.target.checked) {
        rigth.checked = false;
    }
});




rigth.addEventListener('change', ()=> {
    if(event.target.checked) {
        left.checked = false;
    }
});

button.addEventListener('click', () => {
    let outString = '';
    let minusCounter = 0;
    let firstSymbol = true;
    if (!left.checked && !rigth.checked) {alert ('Забыл выбрать лево или право'); return};
    const tetxArray = text.split('');

        tetxArray.forEach(el => {
            if (minusCounter === 6) {
                minusCounter = 0;
                if (firstSymbol) {
                    firstSymbol = false
                    outString+= 'w1,70,empty'
                }
            }
            if (el === '-') {
                minusCounter++
            }
            else {
                minusCounter = 0
                if (firstSymbol) {
                    firstSymbol = false
                    if (left.checked) {
                        outString += leftNotesObj[el]
                    }
                    else {
                        outString += rigthNotesObj[el]
                    }

                }
                else {
                    if (left.checked) {
                        outString += '|' + leftNotesObj[el]
                    }
                    else {
                        outString += '|' + rigthNotesObj[el]
                    }
                }
            }
        })

        // const outArray = outString.split('')
        // outArray.splise(outString.length, 1);
        // outString = outArray.join('')
        textInput.value = ''
        result.textContent += outString + '|'

    
})
