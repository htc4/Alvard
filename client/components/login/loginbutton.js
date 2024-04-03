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
        button.addEventListener('click', handleLogin); 
    }
}

function handleLogin() {
    console.log('Login button clicked');
    authenticateUser();
}

function authenticateUser() {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    const selectQuery = 'SELECT * FROM "user" WHERE email = $1 AND password = $2';

    const data = [email, password];

    pool.query(selectQuery, data, (err, res) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return;
        }

        if (res.rows.length > 0) {
            window.location.href = 'mai.html';
        } else {
            console.log('Authentication failed. Invalid email or password.');
        }
    });
}
