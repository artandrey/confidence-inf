// setTimeout(()=>{console.log(5); clearInterval(stop1), clearInterval(stop2)}, 5000)
// console.log(7);
// let stop2 = setInterval(()=>console.log('You`re BREATHTAKING'), 4)
// let stop1 = setInterval(()=>console.log('You`re BREATHTAKING'), 100)

// let html = document.querySelector('html');
// console.log(html)
// let i = 0;
// setInterval(()=> {
    
//     if (i > 1000 ) {
//         html.style.transform = `translateX(${i--}px)`
//     }
//     else {
//         html.style.transform = `translateX(${i++}px)`
//     }
// }, 4)
// const options = {
//     root: document.querySelector('button'),
//     rootMargin: '50px',
//     threshold: 0.5,
//   };
  
//   const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//       // тут можно писать логику для проверки вхождения
//     });
//   };
  
//   const observer = new IntersectionObserver(onEntry, options);



// setTimeout(()=> {
//     let h1 = document.createElement('h1');
//     h1.textContent = 'HELLO';
//     document.querySelector('body').prepend(h1);
// }, 3000);


// const colorGenerator = function () {
//  return `rgb( ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// }
 
// setInterval(()=> {
//     let h1 = document.createElement('h1');
//     h1.textContent = 'HELLO';
//     document.querySelector('body').prepend(h1);
//     h1.style.color = colorGenerator();
//     if (document.querySelectorAll('h1').length > 10) {
//         console.log(1)
//         console.log(document.querySelector('body').lastElementChild.remove())
//     }
// }, 500);


// const promise = new Promise((reslove, reject) => {
//     reject('SMTH WENT WRONG')
//     reslove('WAITING')
    
// });
// console.log(promise);
// promise.then(console.log('work'));



// const getMessge = function () {
//     input = prompt();
//     return input;
// }
// const write = function(message) {
//     console.log(message);
// }
// getMessge().then(m => write(m))
let notes = '2 2 4 4  2 2 6 6 6  4  5 5 5 3  5 5 5 4 3 2'.split(/ +/);
let numberOfNote = 0
const obj = new Object();
const box = document.querySelector('.box');
let playingNow;
const buttonObj = new Object;
const buttons = document.querySelectorAll('.white');

 [...buttons]
 .forEach(element => {
     buttonObj[element.id] = element;
 });
console.log(buttonObj)

const createAudioObj = function (count) {
    for (let i = 0; i < count; i++) {
        obj[i] = new Audio(`./audio/${i}.mp3`)
    }
} 
buttonObj[notes[numberOfNote]].style.backgroundColor = 'green';
box.addEventListener('click', () => {
    if (event.target.nodeName === 'DIV') return;
    event.preventDefault();
    numberOfNote++;
    event.target.style.backgroundColor = 'white';
    console.log(notes[numberOfNote])
    console.log(numberOfNote)
    if (buttonObj[notes[numberOfNote]]) {
        if (buttonObj[notes[+numberOfNote+1]]) {
            buttonObj[notes[+numberOfNote+1]].style.backgroundColor = 'yellow';
        }
        
        buttonObj[notes[numberOfNote]].style.backgroundColor = 'green';
    }
    if (playingNow) {
        obj[playingNow].pause();
        obj[playingNow].currentTime = 0;
    }
    playingNow = event.target.id;
    obj[event.target.id].play();
});
createAudioObj(10);









// const button = document.querySelector('.key');
// button.addEventListener("click", ()=> {
//     event.audio = new Audio('./audio/0.mp3').play();
// })






