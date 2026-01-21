window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const error = document.getElementById("error");
    const submitButton = document.getElementById("submit");
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

    function isValidEmail() {
        const validity = email.value.length !== 0 && emailRegExp.test(email.value);
        return validity;
    };

    email.addEventListener("input", () => {
        email.classList.contains("form__email--is_invalid") ? email.classList.remove("form__email--is_invalid") : false;
        error.classList.contains("is_hidden") ? false : error.classList.add("is_hidden");
        isValidEmail()? submitButton.classList.add("form__submit--is_valid"): submitButton.classList.remove("form__submit--is_valid");
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidEmail()) {
            submitButton.classList.contains("form__submit--is_valid")? submitButton.classList.remove("form__submit--is_valid"): false;
        } else {
            email.classList.add("form__email--is_invalid");
            error.classList.remove("is_hidden");
        }
    })
})