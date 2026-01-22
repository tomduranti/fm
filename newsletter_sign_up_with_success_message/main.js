window.addEventListener("DOMContentLoaded", () => {
    const newsletterPage = document.getElementById("newsletter_page");
    const successPage = document.getElementById("success_page");
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const successEmail = document.getElementById("success_email");
    const error = document.getElementById("error");
    const submitButton = document.getElementById("submit");
    const dismissButton = document.getElementById("dismiss");
    const emailRegExp = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/;

    function isValidEmail() {
        const validity = email.value.length !== 0 && emailRegExp.test(email.value);
        return validity;
    };

    function showError() {
        email.classList.add("is_invalid");
        email.setAttribute('aria-describedby', 'error');
        email.setAttribute('aria-invalid', 'true');
        error.classList.remove("is_hidden");
    }

    function hideError() {
        email.classList.remove("is_invalid");
        email.removeAttribute('aria-describedby');
        email.setAttribute('aria-invalid', 'false');
        error.classList.add("is_hidden");
    }

    function switchPage(from, to) {
        from.classList.add("is_hidden");
        to.classList.remove("is_hidden");
    }

    function resetForm() {
        form.reset();
    }

    email.addEventListener("input", () => {
        hideError();
        submitButton.classList.toggle("is_valid", isValidEmail());
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidEmail()) {
            submitButton.classList.remove("is_valid");
            switchPage(newsletterPage, successPage);
            successEmail.textContent = email.value;
        } else {
            showError();
        }
    })

    dismissButton.addEventListener("click", () => {
        switchPage(successPage, newsletterPage);
        form.reset();
    })
})