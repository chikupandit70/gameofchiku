// login.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement logic to check if the username and password match a stored user.
    // In a real application, this should be done on the server side.

    if (checkCredentials(username, password)) {
        alert('Successfully logged in! Welcome to the game❤️');
        window.location.href = 'game.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement logic to save the username and password.
    // In a real application, this should be done on the server side.

    // For simplicity, let's assume a global variable to store user credentials.
    // In practice, you would use a more secure and persistent storage mechanism.
    users.push({ username, password });
    alert('Successfully registered! You can now log in.');
}

function checkCredentials(username, password) {
    // Implement logic to check if the username and password match a stored user.
    // In a real application, this should be done on the server side.

    // For simplicity, let's assume a global variable to store user credentials.
    // In practice, you would use a more secure and persistent storage mechanism.
    const user = users.find(u => u.username === username && u.password === password);
    return !!user;
}

// In practice, use a secure and persistent storage mechanism like a database.
const users = [];
