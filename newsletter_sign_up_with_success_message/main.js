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

    function showError() {
        email.classList.add("is_invalid");
        error.classList.remove("is_hidden");
    }

    function hideError() {
        email.classList.remove("is_invalid");
        error.classList.add("is_hidden");
    }

    function switchPage() {
        newsletterPage.classList.add("is_hidden");
        successPage.classList.remove("is_hidden");
    }

    email.addEventListener("input", () => {
        hideError();
        submitButton.classList.toggle("is_valid", isValidEmail());
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidEmail()) {
            submitButton.classList.remove("is_valid");
            switchPage();
            successEmail.innerHTML = email.value;
        } else {
            showError();
        }
    })

    dismissButton.addEventListener("click", () => {
        window.location.reload();
    })
})