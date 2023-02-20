let btn = document.querySelector('button');
let title = document.querySelector('.container h1');
let footer = document.querySelector('footer');
let font_footer = document.querySelector('.align');
let main = document.querySelector('main');

btn.addEventListener('click', () => {
    if(btn.textContent === 'Dark Mode'){
        main.style.backgroundColor = 'black';
        title.textContent = 'Dark Mode On';
        title.style.color = 'white';
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black'; 
        btn.classList.add('ligth');
        btn.classList.remove('dark');
        btn.textContent = 'Light Mode'
        footer.style.backgroundColor = '#333'
        font_footer.style.color = 'black';
    }else{
        main.style.backgroundColor = 'white';
        title.textContent = 'Light Mode On';
        title.style.color = 'black';
        btn.style.backgroundColor = '#5a5a5a';
        btn.style.color = 'white'; 
        btn.classList.add('dark');
        btn.classList.remove('ligth');
        btn.textContent = 'Dark Mode'
        footer.style.backgroundColor = '#5a5a5a'
    }
})