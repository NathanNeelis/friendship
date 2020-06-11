const loadValidateLogin = document.querySelector('#login_form');

if (loadValidateLogin) {

    const loginFailedMessage = document.querySelector('.login-failed');

    if (document.getElementById('loginEmail').value != '') {
        loginFailedMessage.classList.add('form-error-message');
    } else {
        loginFailedMessage.classList.remove('form-error-message');
    }

    const validateForm = (e) => {
        if (e.target) {
            var target = e.target;
        } else {
            // eslint-disable-next-line no-redeclare
            var target = e;
        }


        var loginEmail = document.querySelector('#loginEmail');
        var loginPassword = document.querySelector('#loginPassword');

        var emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (target.id == 'loginEmail') {
            if (loginEmail.value.length == 0) {
                if (!loginEmail.classList.contains('error')) {
                    loginEmail.classList.add('error');
                    loginEmail.classList.remove('no-error');
                    loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                } else {
                    loginEmail.classList.remove('no-error');
                    loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                }
            } else if (!loginEmail.value.match(emailValidator)) {
                loginEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                loginEmail.nextElementSibling.innerHTML = 'Please fill in a valid e-mail adress.';
                loginEmail.classList.add('error');
                loginEmail.classList.remove('no-error');
            } else {
                loginEmail.classList.remove('no-error');
                loginEmail.classList.remove('error');
                loginEmail.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'loginPassword') {
            if (loginPassword.value.length == 0) {
                if (!loginPassword.classList.contains('error')) {
                    loginPassword.classList.add('error');
                    loginPassword.classList.remove('no-error');
                    loginPassword.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    loginPassword.nextElementSibling.innerHTML = 'Please fill in your password.';
                }
            } else {
                loginPassword.classList.remove('error');
                loginPassword.classList.remove('no-error');
                loginPassword.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }


    };

    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach((input) => {
        input.addEventListener('blur', validateForm);
    });

    document.querySelector('#login_form').addEventListener('submit', (event) => {
        event.preventDefault();

        var errors = false;

        document.querySelectorAll('input').forEach((input) => {
            validateForm(input);

            if (input.classList.contains('no-error') || input.classList.contains('error') || parseInt(window.formTotal) === 0) {
                errors = true;
            }
        });

        if (errors === true) {
            document.querySelector('#login-error-message').classList.replace('no-error-message', 'form-error-message');
        } else {
            document.querySelector('#login-error-message').classList.replace('form-error-message', 'no-error-message');
            document.querySelector('#login_form').submit();
        }
    });
}