document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dummy credentials (replace with a real authentication system)
    const validUsername = "Rajveer.Singh1";
    const validPassword = "Yuvraj@1";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === validUsername && password === validPassword) {
        alert("Login Successful! Redirecting...");
        window.location.href = "dashboard.html"; // Redirect after login
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }
});
