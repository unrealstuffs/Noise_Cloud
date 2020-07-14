const formContainer = document.querySelector(".form-container");
const trackFile = document.querySelector("#trackFile");
const trackImage = document.querySelector("#trackImage");

const userAvatar = document.querySelector("#userAvatar");
const userImage = document.querySelector("#userImage");

const fileReturn = document.querySelector(".file-return");
const imageReturn = document.querySelector(".image-return");

const avatarReturn = document.querySelector(".avatar-return");
const userImageReturn = document.querySelector(".user-image-return");

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
        userImage.addEventListener("change", () => {
            userImageReturn.innerHTML = userImage.value.slice(12);
        });
    }
};

if (formContainer) {
    changeInput();
}
