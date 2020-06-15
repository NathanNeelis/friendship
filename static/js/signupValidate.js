const loadValidateSignup = document.querySelector('#sign-up_form');

if (loadValidateSignup) {
    const failedMessage = document.querySelector('.sign-up--failed');

    if (document.querySelector('.takenUsername').innerHTML) {
        failedMessage.classList.add('form-error-message');
    } else {
        failedMessage.classList.remove('form-error-message');
    }

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
        var signupAge = document.querySelector('#signupAge');

        var emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var userValidator = /^[a-zA-Z0-9_.-]*$/;
        var ageValidator = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/;

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

        if (target.id == 'signupAge') {
            console.log(signupAge.value);
            if (signupAge.value.length == 0) {
                if (!signupAge.classList.contains('error')) {
                    signupAge.classList.add('error');
                    signupAge.classList.remove('no-error');
                    signupAge.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupAge.nextElementSibling.innerHTML = 'Please fill in your date of birth.';
                } else {
                    signupAge.classList.remove('no-error');
                    signupAge.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    signupAge.nextElementSibling.innerHTML = 'Please fill in your date of birth.';
                }
            } else if (!signupAge.value.match(ageValidator)) {
                signupAge.nextElementSibling.classList.replace('no-error-message', 'error-message');
                signupAge.nextElementSibling.innerHTML = 'Please use the calendar to fill in your date of birth.';
                signupAge.classList.add('error');
                signupAge.classList.remove('no-error');
            } else {
                signupAge.classList.remove('no-error');
                signupAge.classList.remove('error');
                signupAge.nextElementSibling.classList.replace('error-message', 'no-error-message');
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

        if (target.id == 'signupUser' || target.id == 'signupFirst' || target.id == 'signupLocation' || target.id == 'signupInterests' || target.id == 'signupDescription') {
            const targetInput = document.getElementById(target.id);
            if (targetInput.value.length == 0) {
                if (!targetInput.classList.contains('error')) {
                    targetInput.classList.add('error');
                    targetInput.classList.remove('no-error');
                    targetInput.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    targetInput.nextElementSibling.innerHTML = 'Please fill in this field.';
                } else {
                    targetInput.classList.remove('no-error');
                    targetInput.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    targetInput.nextElementSibling.innerHTML = 'Please fill in this field.';
                }
            }  else {
                targetInput.classList.remove('no-error');
                targetInput.classList.remove('error');
                targetInput.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }

        if (target.id == 'signupAvatar') {
            const avatarInput = document.getElementById(target.id);
            if (avatarInput.value == '') {
                if (!avatarInput.classList.contains('error')) {
                    avatarInput.classList.add('error');
                    avatarInput.classList.remove('no-error');
                    avatarInput.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    avatarInput.nextElementSibling.innerHTML = 'Please upload an avatar.';
                } else {
                    avatarInput.classList.remove('no-error');
                    avatarInput.nextElementSibling.classList.replace('no-error-message', 'error-message');
                    avatarInput.nextElementSibling.innerHTML = 'Please upload an avatar.';
                }
            }  else {
                avatarInput.classList.remove('no-error');
                avatarInput.classList.remove('error');
                avatarInput.nextElementSibling.classList.replace('error-message', 'no-error-message');
            }
        }


    };

    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputs.forEach((input) => {
        input.addEventListener('blur', validateForm);
    });

    document.querySelector('#sign-up_form').addEventListener('submit', (event) => {
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