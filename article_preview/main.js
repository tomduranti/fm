document.addEventListener("DOMContentLoaded", () => {
    const profile = document.getElementById("profile");
    const toast = document.getElementById("toast");
    let iconShareButtons = document.querySelectorAll(".icon_share");
    
    iconShareButtons.forEach(iconShareButton => {
        iconShareButton.addEventListener("click", () => {
            profile.classList.toggle("profile--is_hidden");
            toast.classList.toggle("toast--is_visible");
        })
    })
})