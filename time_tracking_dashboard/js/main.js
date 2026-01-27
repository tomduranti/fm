
document.addEventListener("DOMContentLoaded", () => {
    const currentHours = document.querySelectorAll(".current_hours");

    window.addEventListener("resize", () => {

        if (window.matchMedia("(min-width: 48rem)").matches) {
            currentHours.forEach(currentHour => {
                currentHour.classList.replace("text_preset_3", "text_preset_1");
            })
        } else {
            currentHours.forEach(currentHour => {
                currentHour.classList.replace("text_preset_1", "text_preset_3");
            })
        }

    })
})