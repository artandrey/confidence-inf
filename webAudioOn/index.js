const audio = new buzz.sound('b4.mp3', {webAudioApi: true, preload: true});

document.querySelector('button').addEventListener('click', () => {
    audio.play()
    // console.log(audio.isPlaying)
})
console.log(12);
