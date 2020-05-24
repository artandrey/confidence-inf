

document.querySelector('button').addEventListener('click', () => {
    const audio = new buzz.sound('b4.mp3', {webAudioApi: true, preload: true});
    audio.play()
})
console.log(12);
