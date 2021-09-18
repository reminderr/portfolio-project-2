let select = el => {
  return document.querySelector(el)
}
let selectAll = el => {
  return document.querySelectorAll(el)
}
let searchBtn = select('#search-btn');
let searchBar = select('.search-bar-container');
let formBtn = select('#login-btn');
let loginForm = select('.login-form-container');
let formClose = select('#form-close');
let menu = select('#menu-bar');
let navbar = select('.navbar');
let videoBtn = selectAll('.vid-btn');

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}
/* ########## MENU ########## */
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
/* ########## SEARCH ########## */
searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});
/* ########## LOGIN ########## */
formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});
formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});
/* ########## VIDEO ########## */
videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    select('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    select('#video-slider').src = src;
  });
});
/* ########## SWIPER REVIEW ########## */
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});
/* ########## SWIPER BRAND ########## */
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});
