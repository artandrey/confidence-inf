
    document.querySelector('body').addEventListener('click', ()=> {
        alert(123)
    })
    document.querySelector('body').click()
    console.log(1233);
    
    const audio = new buzz.sound('b4.mp3', {webAudioApi: true, preload: true});
document.querySelector('button').addEventListener('click', () => {
    audio.play()
})
console.log(12);
