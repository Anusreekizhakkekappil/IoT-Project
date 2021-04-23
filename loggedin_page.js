const logoutButton = document.getElementById("logout-form-submit");

function logout() {
    window.location = "index.html";
}
logoutButton.addEventListener("click", function() {
    logout();
});