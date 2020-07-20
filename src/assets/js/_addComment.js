import axios from "axios";

const addCommentForm = document.querySelector(".comment-form");
const commentList = document.querySelector(".track-comments");

const addComment = comment => {
    const item = document.createElement("div");
    item.classList.add("comment-item");
    item.innerHTML = `
        <div class="comment-item-img">
            <img src="/${comment.image}">
        </div>
        <div class="comment-item-text">
            <div class="comment-author">${comment.name}</div>
            <div class="comment-text">${comment.text}</div>
        </div>
    `
    commentList.prepend(item);
}

const sendComment = async comment => {
    const trackId = window.location.href.split("/tracks/")[1];
    const text = comment.text;
    const response = await axios({
        url: `/api/${trackId}/comment`,
        method: "POST",
        data: {
            text
        }
    });
    if (response.status === 200) {
        addComment(comment);
    }
}

const handleSubmit = event => {
    event.preventDefault();
    const commentText = document.querySelector(".comment-form textarea");
    const commentName = document.querySelector("#commentName");
    const commentImage = document.querySelector("#commentImage");
    const comment = {
        text: commentText.value,
        name: commentName.value,
        image: commentImage.value
    } 
    sendComment(comment)
    commentText.value = "";
}

const init = () => {
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}