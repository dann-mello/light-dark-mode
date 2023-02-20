let btn = document.querySelector('#mode-selector');
let title = document.querySelector('#page-title');
let footer = document.querySelector('footer');
let body = document.querySelector('body');
let darkModeClass = 'dark-mode'

function changeMode() {
    changeClasses();
    changeText();
}

function changeText() {
    const LIGHT_MODE = 'Light Mode';
    const DARK_MODE = 'Dark Mode';
    if (body.classList.contains(darkModeClass)) {
        btn.textContent = LIGHT_MODE;
        title.textContent = LIGHT_MODE + ' ON';
        return
    }

    btn.textContent = DARK_MODE;
    title.textContent = DARK_MODE + ' ON';
}

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    title.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

btn.addEventListener('click', changeMode);