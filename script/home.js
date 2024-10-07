import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const menu = document.querySelectorAll('.nab-back');
const header = document.querySelector('#header-top');
const mobileNav = document.querySelector('#mobile-nav-active');
const mobileNavBtn = document.querySelector('#menu-mobile-btn');
const serviceMobileOption = document.querySelector('#service-mobile-option');
const supportMobileOption = document.querySelector('#support-mobile-option');


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

supportMobileOption.addEventListener('click',e=>{
    e.currentTarget.classList.toggle('active');
})
serviceMobileOption.addEventListener('click',e=>{
    e.currentTarget.classList.toggle('active');
})




const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
      spaceBetween: 0,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },


      // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    490: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    // when window width is >= 991px
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    },
  },

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

//   const swiper = document.querySelector('.swiper').swiper;

const swiperele = document.querySelector('.swiper').swiper;









