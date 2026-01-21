window.addEventListener("DOMContentLoaded", () => {
    const newsletterPage = document.getElementById("newsletter_page");
    const successPage = document.getElementById("success_page");
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const successEmail = document.getElementById("success_email");
    const error = document.getElementById("error");
    const submitButton = document.getElementById("submit");
    const dismissButton = document.getElementById("dismiss");
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

    function isValidEmail() {
        const validity = email.value.length !== 0 && emailRegExp.test(email.value);
        return validity;
    };

    email.addEventListener("input", () => {
        email.classList.contains("form__email--is_invalid") ? email.classList.remove("form__email--is_invalid") : false;
        error.classList.contains("is_hidden") ? false : error.classList.add("is_hidden");
        isValidEmail() ? submitButton.classList.add("is_valid") : submitButton.classList.remove("is_valid");
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidEmail()) {
            //submit button gets color if email string is correct
            submitButton.classList.contains("is_valid") ? submitButton.classList.remove("is_valid") : false;
            //show success page and hide newsletter page
            newsletterPage.classList.add("is_hidden");
            successPage.classList.remove("is_hidden");
            successEmail.innerHTML = email.value;

        } else {
            email.classList.add("form__email--is_invalid");
            error.classList.remove("is_hidden");
        }
    })

    dismissButton.addEventListener("click", () => {
        window.location.reload();
    })
})