const crazyshuffle:HTMLAudioElement = new Audio('./music/crazyshuffle.mp3');

export function playCrazyShuffle() {
    playSound(crazyshuffle);
}
export function stopCrazyShuffle() {
    stopSound(crazyshuffle);
}

function playSound(sound:HTMLAudioElement) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound:HTMLAudioElement){
    sound.pause();
}
