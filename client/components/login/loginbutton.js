document.addEventListener("DOMContentLoaded", function () {
    createLoginButton();
});

function createLoginButton() {
    if (!document.getElementById('logbutton')) {
        let button = document.createElement('button');
        button.setAttribute('id', 'logbutton');
        button.innerHTML = 'Login';
        let container = document.querySelector('.login-form__footer');
        container.appendChild(button);
        console.log('Login button created');
        button.addEventListener('click', handleLogin); // Attach click event listener
    }
}

function handleLogin() {
    console.log('Login button clicked');
    // Call the authentication function when login button is clicked
    authenticateUser();
}

// Function to handle user authentication
function authenticateUser() {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    // Define your SQL query for authentication
    const selectQuery = 'SELECT * FROM "user" WHERE email = $1 AND password = $2';

    // Data for the query
    const data = [email, password];

    // Execute the query
    pool.query(selectQuery, data, (err, res) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return;
        }

        // If user exists and password matches
        if (res.rows.length > 0) {
            // Redirect to mai.html
            window.location.href = 'mai.html';
        } else {
            // Handle authentication failure
            console.log('Authentication failed. Invalid email or password.');
        }
    });
}
