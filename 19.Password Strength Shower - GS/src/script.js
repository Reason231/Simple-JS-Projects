var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var eye = document.getElementById("eye");
var characters=document.getElementById("characters")
var numbers=document.getElementById("numbers")
var symbols=document.getElementById("symbols")

pass.addEventListener("input", () => {
    // Show or hide the message based on input
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        str.innerHTML = "";
        return;
    }

    const password = pass.value;
    const hasAlphanumeric = /[a-zA-Z]/.test(password);  
    const hasNumbers = /[0-9]/.test(password);   // Check if the password has numbers
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= 8 && hasAlphanumeric && hasNumbers && hasSymbols) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
       

    } else if (password.length >= 4  && (hasAlphanumeric && hasNumbers || hasSymbols)) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (password.length < 4 && password.length >=1) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";

    } 

    // Checkbox if the password conditions meets
    characters.checked = password.length >= 8;  // It checks/returns the true if password has atleast 8 characters
    numbers.checked = hasNumbers;
    symbols.checked = hasSymbols; 
});

eye.addEventListener("click", () => {
    pass.type = pass.type === "text" ? "password" : "text";

    // Toggle the eye icon between "show" and "hide"
    if (eye.src.includes("show.png")) {
        eye.src = "../hide.png"; // Switch to hide icon
    } else {
        eye.src = "../show.png"; // Switch to show icon
    }
});
