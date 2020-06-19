const fileInput = document.querySelector("#trackFile");
const imageIngut = document.querySelector("#trackImage");
const fileReturn = document.querySelector(".file-return");
const imageReturn = document.querySelector(".image-return");

const changeInput = () => {
    fileInput.addEventListener("change", () => {
        fileReturn.innerHTML = fileInput.value.slice(12);
    });

    imageIngut.addEventListener("change", () => {
        imageReturn.innerHTML = imageIngut.value.slice(12);
    });
};
