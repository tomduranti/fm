
document.addEventListener("DOMContentLoaded", () => {
    const currentHours = document.querySelectorAll(".current_hours");
    const avatarName = document.getElementById("avatar_name");

    const tabletSize = window.matchMedia("(min-width: 48rem)");
    const desktopSize = window.matchMedia("(min-width: 90rem)");

    window.addEventListener("resize", () => {

        if (tabletSize.matches) {
            currentHours.forEach(currentHour => {
                currentHour.classList.replace("text_preset_3", "text_preset_1");
            })
        } else {
            currentHours.forEach(currentHour => {
                currentHour.classList.replace("text_preset_1", "text_preset_3");
            })
        }

        if (desktopSize.matches) {
            avatarName.classList.replace("text_preset_4", "text_preset_2");
        } else{
            
        }

    })
})