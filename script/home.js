const menu = document.querySelectorAll('.nab-back');
const header = document.querySelector('#header-top');
const mobileNav = document.querySelector('#mobile-nav-active');
const mobileNavBtn = document.querySelector('#menu-mobile-btn');

document.addEventListener('scroll',e=>{
    let scroll = window.scrollY;

    if(scroll >= 100) {
        console.log('ok');
        header.classList.add('header-top')
        menu.forEach(item=>{
            item.classList.add('fixed-nav');
        });
    } else {
        header.classList.remove('header-top')
        menu.forEach(item=>{
            item.classList.remove('fixed-nav');
        });
    }
})

mobileNavBtn.addEventListener('click',e=>{
    e.currentTarget.classList.toggle('active');
    mobileNav.classList.toggle('active');
})