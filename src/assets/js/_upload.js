const formContainer = document.querySelector(".form-container");
const trackFile = document.querySelector("#trackFile");
const trackImage = document.querySelector("#trackImage");

const userAvatar = document.querySelector("#userAvatar");
const userBackground = document.querySelector("#userBackground");

const fileReturn = document.querySelector(".file-return");
const imageReturn = document.querySelector(".image-return");

const avatarReturn = document.querySelector(".avatar-return");
const backgroundReturn = document.querySelector(".background-return");

const changeInput = () => {
    if (trackFile) {
        trackFile.addEventListener("change", () => {
            fileReturn.innerHTML = trackFile.value.slice(12);
        });
        trackImage.addEventListener("change", () => {
            imageReturn.innerHTML = trackImage.value.slice(12);
        });
    }

    if (userAvatar) {
        userAvatar.addEventListener("change", () => {
            avatarReturn.innerHTML = userAvatar.value.slice(12);
        });
        userBackground.addEventListener("change", () => {
            backgroundReturn.innerHTML = userBackground.value.slice(12);
        });
    }
};

if (formContainer) {
    changeInput();
}
