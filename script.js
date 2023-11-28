function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const PRN = document.getElementById("PRN").value;
    const rollno = document.getElementById("rollno").value;
    const cousre = document.getElementById("course").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if fields are empty or contain only spaces
    if (username.trim() === "" || email.trim() === "" || phone.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("All fields are required.");
        return false;
    }

    //  phone number must be numeric and 10 digits
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be numeric and have 10 digits.");
        return false;
    }

    // Validate password (at least 7 characters, 1 capital letter, 1 digit, 1 special character)
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&]).{7,}$/.test(password)) {
        alert("Password must be at least 7 characters and include at least one capital letter, one digit, and one special character (@, #, $, or &).");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return false;
    }

    // Validate email using a regular expression
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // If all validations pass, the form can be submitted
    return true;
}