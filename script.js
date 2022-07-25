const hamburger = document.getElementById ('hamburger')
const NavUl = document.getElementById ('ul_main_nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle ('show');
    ul_main_nav.classList.toggle('show');
})