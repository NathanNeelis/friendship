const editProfile = document.querySelector('.profile__edit');
const profile = document.querySelector('.p-profile');

editProfile.addEventListener('click', () => {
    if (profile.classList.contains('p-profile__edit')) {
        profile.classList.remove('p-profile__edit');
    } else {
        profile.classList.add('p-profile__edit');
    }
});