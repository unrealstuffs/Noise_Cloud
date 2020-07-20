const trackDetail = document.querySelector(".track-detail");
const buttonPlay = document.querySelector(".track-header-play");
const audioPlayer = document.querySelector(".track-header-audio audio");
const progressBar = document.querySelector(".audio-controls-progress");
const currTime = document.querySelector(".audio-controls-curr-time");
const durationTime = document.querySelector(".audio-controls-duration");

const registerListen = () => {
    const trackId = window.location.href.split("/tracks/")[1];
    fetch(`/api/${trackId}/view`, {
        method: "POST"
    })
}

const handlePlayClick = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        buttonPlay.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audioPlayer.pause();
        buttonPlay.innerHTML = '<i class="fa fa-play"></i>';
    }
};

const handleEnded = () => {
    audioPlayer.currentTime = 0;
    buttonPlay.innerHTML = '<i class="fa fa-play"></i>';
}

const audioProgress = () => {
    const progress =
        Math.floor(audioPlayer.currentTime) /
        (Math.floor(audioPlayer.duration) / 100);
    progressBar.value = progress;
    currTime.innerHTML = audioTime(audioPlayer.currentTime);
};

const audioTime = (time) => {
    time = Math.floor(time);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;

    if (seconds < 10) {
        secondsVal = "0" + seconds;
    }

    return minutesVal + ":" + secondsVal;
};

const setTotalTime = () => {
    durationTime.innerHTML = audioTime(audioPlayer.duration);
};

const audioChangeTime = (e) => {
    const progress =
        progressBar.value * (Math.floor(audioPlayer.duration) / 100);
    audioPlayer.currentTime = progress;
};

const init = () => {
    audioPlayer.volume = 0.5;
    progressBar.value = 0;
    buttonPlay.addEventListener("click", handlePlayClick);
    audioPlayer.addEventListener("timeupdate", audioProgress);
    audioPlayer.addEventListener("loadedmetadata", setTotalTime);
    audioPlayer.addEventListener("ended", handleEnded);
    progressBar.addEventListener("click", audioChangeTime);
    registerListen();
};

if (trackDetail) {
    init();
}
