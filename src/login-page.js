const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrormsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    var check = ["x", "0", "I", "P", "3", "f", "h",  "}", "n", "E", "{" , "z", "r", "4", "x", "t", 'F', 'T', 'C']; 
	// "EPICTF{3zfr0nth4xx}"
    var key = [9, 3, 2, 18, 17, 16, 10, 4, 11, 5, 12, 1, 8, 15, 6, 13, 14, 0]
    var OK = 0
    for (let i = 0; i < key.length; i++) {
	    if (password[i] == check[key[i]])
		    OK++;
    }
    if (OK == key.length)
	    alert("Access granted");
    else
        alert("Access denied");

})
