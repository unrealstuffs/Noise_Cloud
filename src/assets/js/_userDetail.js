const userDetail = document.querySelector(".user-detail");
const userTracksItems = document.querySelectorAll(".user-tracks-item");

const setTotalTime = () => {
    userTracksItems.forEach(item => {
        let audio = new Audio(item.firstChild.src);
        audio.addEventListener("canplaythrough", () => {
            item.lastChild.lastChild.firstChild.innerHTML = `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`
        })
    })
}

if (userDetail) {
    setTotalTime();
}