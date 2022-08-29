const hamburger = document.getElementById ('hamburger')
const NavUl = document.getElementById ('ul_main_nav')
const HamSpan = document.getElementById('hamburger-box')
const bar = document.getElementById ('bar')
var isActive = false

document.onclick = function(clickevent){

    if ( clickevent.target.id !== 'NavUl'  && clickevent.target.id !== 'hamburger' 
    && clickevent.target.id !== 'hamburger-box' && clickevent.target.id !== 'bar')
    {
        hamburger.classList.remove('is-active');
        NavUl.classList.remove('show');
    }
}

hamburger.addEventListener('click', () => {

    if (isActive){
       isActive = false
       hamburger.classList.remove('is-active');
       NavUl.classList.remove('show');
    }    else {
        isActive = true
        hamburger.classList.add('is-active');
         NavUl.classList.add('show');
    }
})