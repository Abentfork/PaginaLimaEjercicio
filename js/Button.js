const menuButton = document.getElementById('menuButton');
const desplegable = document.querySelector('.desplegable');

menuButton.addEventListener('click', () => {
    desplegable.style.display = desplegable.style.display === 'block' ? 'none' : 'block';
});