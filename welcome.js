const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginWelcome = document.getElementById("welcome-page");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        //alert("You have successfully logged in.");
        //location.reload();
        Redirect();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})