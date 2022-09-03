const navBar = document.getElementById ('navBar')
const hamburger = document.getElementById ('hamburger')
const NavUl = document.getElementById ('ul_main_nav')
const HamSpan = document.getElementById('hamburger-box')
const bar = document.getElementById ('bar')
var isActive = false

document.onclick = function(clickevent){

    if ( clickevent.target.id !== 'NavUl'  && clickevent.target.id !== 'hamburger' 
    && clickevent.target.id !== 'hamburger-box' && clickevent.target.id !== 'bar'
    && clickevent.target.id !== 'navBar')
    {
        hamburger.classList.remove('is-active');
        NavUl.classList.remove('show');
        navBar.style.backgroundColor = 'transparent';
    }
}

hamburger.addEventListener('click', () => {

    if (isActive){
       isActive = false
       hamburger.classList.remove('is-active');
       NavUl.classList.remove('show');
       navBar.style.width = '0';
       navBar.style.backgroundColor = 'transparent';
    }    else {
        isActive = true
        hamburger.classList.add('is-active');
        NavUl.classList.add('show');
        navBar.style.backgroundColor = '#746C70';
        navBar.style.width = '120px';
        NavUl.style.backgroundColor = '#746C70';
        NavUl.style.width = '120px';
        NavUl.style.height = '90vh';
    }
})