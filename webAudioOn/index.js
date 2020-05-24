
    let audio;
    document.querySelector('body').addEventListener('click', ()=> {
        alert(123)
        audio = new buzz.sound('b4.mp3', {webAudioApi: true, preload: true});
        audio.play()


    })
    document.querySelector('body').click()
    console.log(1233);
    
document.querySelector('button').addEventListener('click', () => {
})
console.log(12);
