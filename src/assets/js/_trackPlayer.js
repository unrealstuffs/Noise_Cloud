const trackDetail = document.querySelector(".track-detail");
const buttonPlay = document.querySelector(".track-header-play");
const audioPlayer = document.querySelector(".track-header-player");

const handlePlayClick = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        buttonPlay.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audioPlayer.pause();
        buttonPlay.innerHTML = '<i class="fa fa-play"></i>';
    }
};

const init = () => {
    audioPlayer.volume = 0.5;
    buttonPlay.addEventListener("click", handlePlayClick);
};

if (trackDetail) {
    init();
}
