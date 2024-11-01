const name = document.getElementById("name");
const email = document.getElementById("email");
const number=document.getElementById("phone")
const btn = document.getElementById("btn");

// ... existing code ...

btn.addEventListener("click", () => {
    const nameRegex = /^[a-z0-9]{3,15}$/i;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const numberRegex=/^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{4}$/;

    let isNameValid = false;
    let isEmailValid = false;
    let isNumberValid = false;

    // Check Name
    if (nameRegex.test(name.value)) {
        console.log("Username is ok");
        isNameValid = true;
    } else {
        name.value = "";  // Clear the input
        name.placeholder = "Invalid name!";  // Set error message
        name.classList.add("input-place");
        console.log("Username is not ok");
    }

    // Check Email
    if (emailRegex.test(email.value)) {
        console.log("Useremail is ok");
        isEmailValid = true;
    } else {
        email.value = "";  // Clear the input
        email.placeholder = "Invalid email!";  // Set error message
        email.classList.add("input-place");
        console.log("Useremail is not ok");
    }

    // Check Number
    if (numberRegex.test(number.value)) {
        console.log("Phone number is ok");
        isNumberValid = true;
    } else {
        number.value = "";  // Clear the input
        number.classList.add("input-place");
        number.placeholder = "Invalid number";
    }

    // Show alert if all conditions are satisfied
    if (isNameValid && isEmailValid && isNumberValid) {
        alert("Form is submitted successfully");
    }
});
