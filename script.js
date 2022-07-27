const hamburger = document.getElementById ('hamburger')
const NavUl = document.getElementById ('ul_main_nav')
var isActive = false

hamburger.addEventListener('click', () => {

    if (isActive){
       isActive = false
       hamburger.classList.remove('is-active');
       ul_main_nav.classList.remove('show');
    }    else {
        isActive = true
        hamburger.classList.add('is-active');
         ul_main_nav.classList.add('show');
    }

})