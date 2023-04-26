const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrormsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    var Lists = ["var:hidden"];
    for (i = 0; i < Lists[i].length; i++)
    {
        var splits = Lists[i].split(":");
        var user = splits[0];
        var pass = splits[1];
        if (username == user && password == pass) {
            alert("You have been sucessfully logged in");
            location.reload();
        } else {
            loginErrormsg.style.opacity = 1;
        }
    }
})