
    let audio;
    document.querySelector('body').addEventListener('click', ()=> {
        console.log('click completed')
        audio = new buzz.sound('b4.mp3', {webAudioApi: true, preload: true});


    })
    document.querySelector('body').click()
    console.log(1233);
    
document.querySelector('button').addEventListener('click', () => {
    audio.play()

})
console.log(12);
