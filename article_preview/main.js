import { changeFillColor } from "/scss/component/profile.js";

document.addEventListener("DOMContentLoaded", () => {
    const iconShare = document.getElementById("icon_share");
    const iconShareCircle = document.getElementById("icon_share__circle");
    const iconShareArrow = document.getElementById("icon_share__path");
    const personalDetail = document.getElementById("personal_detail");

    iconShare.addEventListener("click", () => {
        iconShareArrow.classList.toggle("fill--white");
        iconShareCircle.classList.toggle("fill--grey_500");
        personalDetail.classList.toggle("profile--hidden");
    })
})