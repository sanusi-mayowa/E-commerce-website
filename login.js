const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


registerLink.onclick = () => {
wrapper.classList.add('active');
}


loginLink.onclick = () => {
wrapper.classList.remove('active');
}

// =============================

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const signupUsername = document.getElementById('signup-username').value;
        const signupEmail = document.getElementById('signup-email').value;
        const signupPassword = document.getElementById('signup-password').value;

        const account = {
            username: signupUsername,
            email: signupEmail,
            password: signupPassword
        };

        localStorage.setItem('account', JSON.stringify(account));
        window.location.href = 'index.html';

        signupForm.reset();

        
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginUsername = document.querySelector('#loginForm input[type="text"]').value;
        const loginPassword = document.querySelector('#loginForm input[type="password"]').value;

        const storedAccount = JSON.parse(localStorage.getItem('account'));

        if (storedAccount && storedAccount.username === loginUsername && storedAccount.password === loginPassword) {
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }

        loginForm.reset();
    });

    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.register').classList.add('active');
        document.querySelector('.login').classList.remove('active');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.login').classList.add('active');
        document.querySelector('.register').classList.remove('active');
    });
});
