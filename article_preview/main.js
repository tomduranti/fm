const tabletSize = window.matchMedia("(width <= 47.938em)");

document.addEventListener("DOMContentLoaded", () => {
    const profile = document.getElementById("profile");
    const toast = document.getElementById("toast");
    const containerPositioning = document.getElementById("container_positioning");

    const iconShareButton = document.getElementById("icon_share");
    const iconShareButtonCircle = document.getElementById("icon_share__circle");
    const iconShareButtonPath = document.getElementById("icon_share__path");

    iconShareButton.addEventListener("click", () => {
        iconShareButtonCircle.classList.toggle("fill--grey_500");
        iconShareButtonPath.classList.toggle("fill--white");
        toast.classList.toggle("toast--is_visible");

        if (tabletSize.matches) {
            containerPositioning.classList.toggle("container_positioning--dark");
            profile.classList.toggle("profile--is_hidden");
        } else { return false }
    })
})