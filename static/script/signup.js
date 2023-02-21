const eyeIcons = document.querySelectorAll('.eye-icon');
const openEye = document.querySelector('.open');
const closeEye = document.querySelector('.close');
const passwordInput = document.querySelector('.password-input');

for (let i = 0; i < eyeIcons.length; i++) {
    eyeIcons[i].addEventListener('click', () => {
        if (openEye.classList.contains('active')) {
            openEye.classList.remove('active');
            closeEye.classList.add('active');
            passwordInput.type = 'password';
        } else {
            openEye.classList.add('active');
            closeEye.classList.remove('active');
            passwordInput.type = 'text';
        }
    })
}
