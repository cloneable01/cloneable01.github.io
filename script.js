//navbar
const navBar = document.getElementById ('navBar')
const hamburger = document.getElementById ('hamburger')
const navUl = document.getElementById ('ulMainNav')
const HamSpan = document.getElementById('hamburger-box')
const bar = document.getElementById ('bar')
const contact = document.getElementById ('contact')
const contactTitle = document.getElementById ('contactTitle')
const navAvoidClose = document.getElementsByClassName ('nav-avoid')

var isActive = false

function toggleNavBar(){

    if (isActive){
        isActive = false
        hamburger.classList.remove('is-active');
        navBar.classList.remove('isactive');
        navUl.classList.remove('show');
        contact.classList.remove('show')
     }    else {
         isActive = true
         hamburger.classList.add('is-active');
         navBar.classList.add('isactive');
         navUl.classList.add('show');
         contact.classList.add('show')
     }
}

document.onclick = function(clickevent){
    if( !['NavUl', 'hamburger', 'hamburger-box', 'bar', 'navBar', 'contact', 'contactTitle', 'nav-avoid'].includes(clickevent.target.id) && isActive) {
        toggleNavBar()
    }
}

hamburger.addEventListener('click', toggleNavBar)