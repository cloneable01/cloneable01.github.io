const navBar = document.getElementById ('navBar')
const hamburger = document.getElementById ('hamburger')
const NavUl = document.getElementById ('ul_main_nav')
const HamSpan = document.getElementById('hamburger-box')
const bar = document.getElementById ('bar')
var isActive = false

function toggleNavBar(){

    if (isActive){
        isActive = false
        hamburger.classList.remove('is-active');
        NavUl.classList.remove('show');
        navBar.style.width = '0';
     }    else {
         isActive = true
         hamburger.classList.add('is-active');
         NavUl.classList.add('show');
         navBar.style.backgroundColor = '#746C70';
         navBar.style.width = '120px';
         navBar.style.height = '100vh';
     }
}

document.onclick = function(clickevent){
    if( !['NavUl', 'hamburger', 'hamburger-box', 'bar', 'navBar' ].includes(clickevent.target.id) && isActive) {
        toggleNavBar()
    }
}

hamburger.addEventListener('click', toggleNavBar)