import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const menu = document.querySelectorAll('.nab-back');
const header = document.querySelector('#header-top');
const mobileNav = document.querySelector('#mobile-nav-active');
const mobileNavBtn = document.querySelector('#menu-mobile-btn');
const serviceMobileOption = document.querySelector('#service-mobile-option');
const supportMobileOption = document.querySelector('#support-mobile-option');
const goToTopBtn = document.querySelector('.go-to-top');

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

    if(scroll >= 500) {
      goToTopBtn.classList.add('active');
    } else {
      goToTopBtn.classList.remove('active');
    }

})

goToTopBtn.addEventListener('click',e=>{
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
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




const swiper = new Swiper('.swiperSteps', {

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

    991: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    1115: {
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


// const swiperele = document.querySelector('.swiper').swiper;


const swiperApp = new Swiper('.swiperApp', {

  slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
      delay: 4000,
    },
    // centeredSlides:true,
    // pagination: {
    //   el: "#swiperApp-pagination",
    //   // el: ".swiper-pagination",
    //   clickable: true,
    // },


    // Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  490: {
    slidesPerView: 2,
    // spaceBetween: 0
  },

  // when window width is >= 991px
  991: {
    slidesPerView: 3,
    // spaceBetween: 0
  }
},


  // Navigation arrows
  navigation: {
    nextEl: '.swiperApp-button-next',
    prevEl: '.swiperApp-button-prev',
  },


});


const swiperClients = new Swiper('.swiperClients', {

    slidesPerView: 2,
    spaceBetween: 5,
    grabCursor: true,
    loop:true,
    autoplay: {
      delay: 3000,
    },

    // Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  490: {
    slidesPerView: 3,
    // spaceBetween: 0
  },

  768: {
    slidesPerView: 4,
    spaceBetween: 20
  },

  // when window width is >= 991px
  991: {
    slidesPerView: 6,
    // spaceBetween: 0
  }
},


  // Navigation arrows
  navigation: {
    nextEl: '.swiperClients-button-next',
    prevEl: '.swiperClients-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});








