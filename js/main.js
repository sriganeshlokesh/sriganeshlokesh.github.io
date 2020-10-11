// Menu Show - Hide
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

// Show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// Hide
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Remove Menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Section - Active Link
const links = document.querySelectorAll('.nav__link')
const sections = document.querySelectorAll('section');
function changeLinkState() {
    let index = sections.length;
    while(--index && window.scrollY < sections[index].offsetTop) {
    }
    
    links.forEach((link) => {
        link.classList.remove('active')});
    links[index].classList.add('active');
  }

  changeLinkState();
  window.addEventListener('scroll', changeLinkState);