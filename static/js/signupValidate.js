const loadValidateForm = document.querySelector('#signup_form');

if (loadValidateForm) {
    const validateForm = (e) => {
        if (e.target) {
            var target = e.target;
        } else {
            // eslint-disable-next-line no-redeclare
            var target = e;
        }

        var signupUser = document.querySelector('#signupUser');
        var signupEmail = document.querySelector('#signupEmail');
        var signupPassword = document.querySelector('#signupPassword');
        var signupPasswordRepeat = document.querySelector('#signupPasswordRepeat');

        var emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var userValidator = /^[a-zA-Z0-9_.-]*$/;

        if (target.id == 'signupUser') {
            if (signupUser.value.length == 0) {
                if (!signupUser.classList.contains('error')) {
                    signupUser.classList.add('error');
                    signupUser.classList.remove('no-error');
                    signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupUser.nextElementSibling.innerHTML = 'Please choose a username.';
                } else {
                    signupUser.classList.remove('no-error');
                    signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupUser.nextElementSibling.innerHTML = 'Please choose a username.';
                }
            } else if (!signupUser.value.match(userValidator)) {
                signupUser.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupUser.nextElementSibling.innerHTML = 'A username may only contain letters, numbers and dashes.';
                signupUser.classList.add('error');
                signupUser.classList.remove('no-error');
            } else {
                signupUser.classList.remove('no-error');
                signupUser.classList.remove('error');
                signupUser.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'signupEmail') {
            if (signupEmail.value.length == 0) {
                if (!signupEmail.classList.contains('error')) {
                    signupEmail.classList.add('error');
                    signupEmail.classList.remove('no-error');
                    signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                } else {
                    signupEmail.classList.remove('no-error');
                    signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupEmail.nextElementSibling.innerHTML = 'Please fill in your e-mail adress.';
                }
            } else if (!signupEmail.value.match(emailValidator)) {
                signupEmail.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupEmail.nextElementSibling.innerHTML = 'Please fill in a valid e-mail adress.';
                signupEmail.classList.add('error');
                signupEmail.classList.remove('no-error');
            } else {
                signupEmail.classList.remove('no-error');
                signupEmail.classList.remove('error');
                signupEmail.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'signupPassword') {
            if (signupPassword.value.length == 0) {
                if (!signupPassword.classList.contains('error')) {
                    signupPassword.classList.add('error');
                    signupPassword.classList.remove('no-error');
                    signupPassword.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPassword.nextElementSibling.innerHTML = 'Please fill in a password.';
                }
            } else {
                signupPassword.classList.remove('error');
                signupPassword.classList.remove('no-error');
                signupPassword.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'signupPasswordRepeat') {
            if (signupPasswordRepeat.value.length == 0) {
                if (!signupPasswordRepeat.classList.contains('error')) {
                    signupPasswordRepeat.classList.add('error');
                    signupPasswordRepeat.classList.remove('no-error');
                    signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPasswordRepeat.nextElementSibling.innerHTML = 'Please repeat your password.';
                } else {
                    signupPasswordRepeat.classList.remove('no-error');
                    signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupPasswordRepeat.nextElementSibling.innerHTML = 'Please repeat your password.';
                }
            } else if (signupPasswordRepeat.value != signupPassword.value) {
                signupPasswordRepeat.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupPasswordRepeat.nextElementSibling.innerHTML = 'The passwords do not match.';
                signupPasswordRepeat.classList.add('error');
                signupPasswordRepeat.classList.remove('no-error');
            } else {
                signupPasswordRepeat.classList.remove('no-error');
                signupPasswordRepeat.classList.remove('error');
                signupPasswordRepeat.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }


    };

    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach((input) => {
        input.addEventListener('blur', validateForm);
    });

    document.querySelector('#signup_form').addEventListener('submit', (event) => {
        event.preventDefault();

        var errors = false;

        document.querySelectorAll('input').forEach((input) => {
            validateForm(input);

            if (input.classList.contains('no-error') || input.classList.contains('error') || parseInt(window.formTotal) === 0) {
                errors = true;
            }
        });

        if (errors === true) {
            document.querySelector('#form-error-message').classList.replace('no-error-message', 'form-error-message');
        } else {
            document.querySelector('#form-error-message').classList.replace('form-error-message', 'no-error-message');
            document.querySelector('#sign-up_form').submit();
        }
    });
}